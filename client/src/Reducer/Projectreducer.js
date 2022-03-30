import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    error: "",
    msg: '',
    project: [],
    pro:{},
    success: '',
    projectD: {},
    loading: false
}
//-----------------------Getting all projects---------------->
export const getProject = createAsyncThunk(
    'getproject',
    async () => {
        const result = await fetch("http://localhost:8000/project/getAllProject")
        const res = await result.json()

        console.log(res)

        return res


    }
)

//-----------------------Creating Project-------------------->
export const createProject = createAsyncThunk(
    'createP',
    async (body) => {



        const result = await fetch("http://localhost:8000/project/createP", {
            method: "post",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify(body)
        })
        const res = await result.json()

        console.log(res)

        //  initialState.success=res.success
        //  initialState.msg=res.message

        return res


    }
)

//----------------------GETTING SINGLE PROJECT DETAIL-------->

export const singleProject = createAsyncThunk(
    'singleP',
    async (id) => {



        const result = await fetch(`http://localhost:8000/project/singleproject/${id}`,
        {
            method: "get",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },

        })
        const res = await result.json()

        console.log(res.message)

        //  initialState.success=res.success
        //  initialState.msg=res.message

        return res


    }
)


//-----------------------UPDATE PROJECT------------------------>

export const updateProject = createAsyncThunk(
    'updateP',
    async (body) => {



        const result = await fetch(`http://localhost:8000/project/updateproject/${body._id}`, {
            method: "put",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify(body)
        })
        const res = await result.json()

        console.log(res)

        //  initialState.success=res.success
        //  initialState.msg=res.message

        return res


    }
)


//----------------------GETTING SINGLE PROJECT DETAIL-------->

export const deleteProject = createAsyncThunk(
    'deleteP',
    async (id) => {
        const result = await fetch(`http://localhost:8000/project/deleteproject/${id}`, {
            method:"delete",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
        })
        const res = await result.json()

        console.log(res)

        //  initialState.success=res.success
        //  initialState.msg=res.message

        return res


    }
)



const projectreducer = createSlice({
    name: "auther",
    initialState,
    reducers: {

        model: (state, action) => {

            state.error = ''
            state.msg = ''
            state.pro=''



        },


    },
    extraReducers: {

        //------------------GETTING ALL PROJECTS--------------->
        [getProject.fulfilled]:(state, action)=>{

            state.loading=false

            if(action.payload.success===true){
                state.project=action.payload.message

            }
            else{
                state.error=action.payload.message
            }

        },
        [getProject.rejected]:()=>{
            console.log('something went wrong')

        },
        [getProject.pending]:(state, action)=>{

            state.loading=true

        },

         //---------------CREATE PROJECT----------------->
         [createProject.fulfilled]: (state, action) => {

            state.loading = false

            if (action.payload.success) {

                state.msg = action.payload.message
                state.success = action.payload.success


            }
            else {
                state.error = action.payload.message
            }

        },

        [createProject.pending]: (state, action) => {
            state.loading = true

        },


        //-------------------SINGLE PROJECT--------------------->

        [singleProject.fulfilled]: (state, action) => {

            state.loading = false

            if (action.payload.success) {

                state.pro = action.payload.message
                // state.success = action.payload.success


            }
            else {
                state.error = action.payload.message
            }

        },

        [singleProject.pending]: (state, action) => {
            state.loading = true

        },


         //-------------------UPDATE PROJECT--------------------->

         [updateProject.fulfilled]: (state, action) => {

            state.loading = false

            if (action.payload.success) {

                state.msg = action.payload.message
                state.success = action.payload.success


            }
            else {
                state.error = action.payload.message
            }

        },

        [updateProject.pending]: (state, action) => {
            state.loading = true

        },


         //-------------------DELETE PROJECT--------------------->

         [deleteProject.fulfilled]: (state, action) => {

            // state.loading = false

            if (action.payload.success) {

                state.msg = action.payload.message
                // state.success = action.payload.success


            }
            else {
                state.error = action.payload.message
            }

        },

        [deleteProject.pending]: (state, action) => {
            // state.loading = true

        },
    }


})


export const{ model  } = projectreducer.actions

export default projectreducer.reducer

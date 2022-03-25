import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    error: "",
    msg: '',
    project: [],
    success: '',
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




const projectreducer = createSlice({
    name: "auther",
    initialState,
    reducers: {


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

         //---------------CREATE USER----------------->
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


        //-------------------UPDATE PROJECT--------------------->
    }


})


export const{  } = projectreducer.actions

export default projectreducer.reducer

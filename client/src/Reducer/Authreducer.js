import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    error: "",
    msg: '',
    user: [],
    userD: {},
    success: '',
   
    loading: false
}

//--------------------SIGNIN USER------------------>
export const signin = createAsyncThunk(
    'signin',
    async (body) => {



        const result = await fetch("http://localhost:8000/login", {
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

        return res


    }
)


//---------------------CREATE USER------------------>


export const createUser = createAsyncThunk(
    'createU',
    async (body) => {



        const result = await fetch("http://localhost:8000/create", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
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



//-----------------------Forgotpassword---------------->

export const forgotPassword = createAsyncThunk(
    'forgotpassword',
    async (body) => {



        const result = await fetch("http://localhost:8000/forgotPassword", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const res = await result.json()

        console.log(res)


        return res


    }
)


//------------------PASSWORDCONFIRMATION----------->
export const passwordconfirm = createAsyncThunk(
    'passwordconfirmation',
    async (st) => {

        console.log(st.id)
        console.log(st.token)




        const result = await fetch(`http://localhost:8000/reset-password/${st.id}/${st.token}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(st.state)
        })
        const res = await result.json()

        console.log(res)


        return res


    }
)


//--------------------DELETE USER-------------->
export const dell = createAsyncThunk(
    'delete',
    async (id) => {



        const result = await fetch(`http://localhost:8000/user/${id}`, {
            method: "delete"
            // headers:{
            //     "Content-Type":"application/json"
            // },
            // body:JSON.stringify(body)
        })
        const res = await result.json()

        console.log(res)

        return res


    }
)

//------------------USER DETAIL-------------->

export const userDetail = createAsyncThunk(
    'userDetail',
    async (id) => {



        const result = await fetch(`http://localhost:8000/user/${id}`, {
            method: "get"

        })
        const res = await result.json()

        console.log(res)

        return res


    }
)

//--------------------UPDATE USER------------->

export const updateUser = createAsyncThunk(
    'Updateuser',
    async (st) => {

        // console.log(st.id)

        // console.log(st.body)

        // return body



        const result = await fetch(`http://localhost:8000/user/${st.id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(st.body)
        })
        const res = await result.json()

        console.log(res)

        return res


    }
)

//--------------------GET ALL USER------------->
export const getuser = createAsyncThunk(
    'user',
    async () => {



        const result = await fetch("http://localhost:8000/getuser")
        const res = await result.json()

        console.log(res)


        return res


    }
)



// -------------------CREATE REDUCER AND ACTION---->
const authreducer = createSlice({
    name: "auther",
    initialState,
    reducers: {

        add_token: (state, action) => {
            state.token = JSON.parse(localStorage.getItem('auth'))
        },

        logout: (state, action) => {

            //  localStorage.clear()
            state.token = ''
            state.error = ''
            state.msg = ''

        },
        model: (state, action) => {

            state.error = ''
            state.msg = ''



        },
        mode: (state, action) => {

            state.error = ''
            



        },
        remove_uerD: (state, action) => {

            state.userD = {
                _id: '',
                name: '',
                email: '',
                role: "",
            }



        }

    },
    extraReducers: {

        //--------SIGNIN USER--------->
        [signin.fulfilled]: (state, action) => {

            state.loading = false
            if (action.payload.success) {
                
                state.token = action.payload.token
                localStorage.setItem("auth", JSON.stringify(action.payload.token))
                state.msg = action.payload.message
                // state.info=action.payload.user
                localStorage.setItem("user", JSON.stringify(action.payload.user))


            }
            else {
                state.error = action.payload.message
            }

        },
        [signin.pending]: (state, action) => {

            state.loading = true

        },
        //----------------GET USER------->
        [getuser.fulfilled]: (state, action) => {


            if (action.payload.success) {
                state.loading = false
                state.user = action.payload.message
            }
            else {
                state.error = "something went wrong"
            }

        },
        [getuser.pending]: (state, action) => {

            state.loading = true

        },
        // --------------UPDATE USER-------->
        [updateUser.fulfilled]: (state, action) => {

            if (action.payload.success) {
                state.loading = false
                state.up = action.payload.message
            }
            else {
                state.error = "something went wrong"
            }


        },
        [updateUser.pending]: (state, action) => {

            state.loading = true

        },

        //--------------USER DETAIL----------------->
        [userDetail.fulfilled]: (state, action) => {

            if (action.payload.success) {
                state.loading = false
                state.userD = action.payload.message
            }
            else {
                state.error = "something went wrong"
            }

        },
        [userDetail.pending]: (state, action) => {

            state.loading = true

        },

        //---------------CREATE USER----------------->
        [createUser.fulfilled]: (state, action) => {

            state.loading = false

            if (action.payload.success) {

                state.msg = action.payload.message
                state.success = action.payload.success


            }
            else {
                state.error = action.payload.message
            }

        },

        [createUser.pending]: (state, action) => {
            state.loading = true

        },

        //---------------FORGOTPASSWORD---------------->

        [forgotPassword.fulfilled]: (state, action) => {

            state.loading = false
            if (action.payload.success === true) {
                state.msg = action.payload.message
                // localStorage.setItem('msg', action.payload.message)
                // localStorage.setItem('tr', action.payload.success)
            }
            else {
                state.error = action.payload.message
            }


            

        },
        [forgotPassword.pending]: (state, action) => {

            state.loading = true


           
        },


        //---------------passwordconfirm----------------->
        [passwordconfirm.fulfilled]:(state, action)=>{
            state.loading=false
            if(action.payload.success===true){
                console.log(action.payload.message)
                state.msg=action.payload.message
            }
            else{
                state.error=action.payload.message
            }
        },
        [passwordconfirm.pending]:(state)=>{
            state.loading = true
        }




    }
})




export const{ add_token, logout, model, remove_uerD, mode } = authreducer.actions

export default authreducer.reducer


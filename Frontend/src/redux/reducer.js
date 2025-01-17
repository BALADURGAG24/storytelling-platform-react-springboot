import { createSlice } from "@reduxjs/toolkit";
export const dashSlice=createSlice(
    {
        name:"dash",
        initialState:
        {
            email:null,
            firstName:null,
            secondName:null,
            phoneNo:null,
            emailId:null,
            query:null,
            firstNamec:null,
            secondNamec:null,
            emailc:null,
            pass:null,
            rpass:null,
        },
        reducers:
        {
            setEmail(state,action)
            {
                state.email = action.payload
            },
            setFirstName(state,action)
            {
                state.firstName=action.payload;
            },
            setSecondName(state,action)
            {
                state.secondName=action.payload;
            },
            setPhoneNo(state,action)
            {
                state.phoneNo=action.payload;
            },
            setEmailId(state,action)
            {
                state.emailId=action.payload;
            },
            setQuery(state,action)
            {
                state.query=action.payload;
            },
            setFirstNamec(state, action) {
                state.firstNamec = action.payload;
              },
              setSecondNamec(state, action) {
                state.secondNamec = action.payload;
              },
              setEmailc(state, action) {
                state.emailc = action.payload;
              },
              setPass(state, action) {
                state.pass = action.payload;
              },
              setRpass(state, action) {
                state.rpass = action.payload;
              }
        }
    }
);
export const{
    setEmail,
    setFirstName,
    setSecondName,
    setPhoneNo,
    setEmailId,
    setFirstNamec,
    setSecondNamec,
    setEmailc,
    setPass,
    setRpass,
}= dashSlice.actions;
export default dashSlice.reducer;
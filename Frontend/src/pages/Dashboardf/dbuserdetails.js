import React from 'react'
import store from '../../redux/store'
function Dbuserdetails() {
    const userObj = store.getState().userdata
    return (
       <form>
        <p>{userObj.firstNamec}</p>
        <p>{userObj.secondNamec}</p>
        <p>{userObj.emailc}</p>
        <p>{userObj.pass}</p>
        <p>{userObj.rpass}</p>
        </form>       
    )
}
export default Dbuserdetails

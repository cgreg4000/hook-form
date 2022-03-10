import React, {useState} from "react";

const RegistrationForm = () => {

    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    return (
        <>
            <form>
                <div className="form-group m-3">
                    <label>First Name:</label>
                    <input className="m-1" type="text" onChange={ (e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group mb-3">
                    <label>Last Name:</label>
                    <input className="m-1" type="text" onChange={ (e) => setLastName(e.target.value)}/>
                </div>
                <div className="form-group mb-3">
                    <label>Email:</label>
                    <input className="m-1" type="email" onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group mb-3">
                    <label>Password:</label>
                    <input className="m-1" type="text" onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group mb-3">
                    <label>Comfirm Password:</label>
                    <input className="m-1" type="text" onChange={ (e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <p>Your Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Comfirm Password: {confirmPassword}</p>
        </>
        
    )
}

export default RegistrationForm
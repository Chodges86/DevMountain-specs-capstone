import React, { useState } from "react";

import Input from "../components/FormInput";
import Button from "../components/FormButton";

import classes from './RegisterPage.module.css'
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [re_enterPW, setRe_EnterPW] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const usernameHandler = (user) => {
        setUsername(user)
    }
    const passwordHandler = (pw) => {
        setPassword(pw)
    }
    const rePasswordHandler = (rPw) => {
        setRe_EnterPW(rPw)
    }
    const firstNameHandler = (fname) => {
        setFirstName(fname)
    }
    const lastNameHandler= (lname) => {
        setLastName(lname)
    }
    const emailHandler = (em) => {
        setEmail(em)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log({username})
        console.log({password})
        console.log({re_enterPW})
        console.log({firstName})
        console.log({lastName})
        console.log({email})
        navigate('/user-portal')
    }

    return (
        <div className={classes.register}>
      <form className={classes.form} onSubmit={submitHandler}>
      <Input name="Username" id="username" type="text" handler={usernameHandler} value={username}/>
      <Input name="Password" id="password" type="password" handler={passwordHandler} value={password}/>
      <Input name="Re-Enter PW" id="re-enter-password" type="password" handler={rePasswordHandler} value={re_enterPW}/>
      <Input name="First Name" id="first-name" type="text" handler={firstNameHandler} value={firstName}/>
      <Input name="Last Name" id="last-name" type="text" handler={lastNameHandler} value={lastName}/>
      <Input name="Email" id="email" type="text" handler={emailHandler} value={email}/>
      <div>
        <Button name="Register" color="blue" type="submit"/>
      </div>
    </form>
    </div>
    )

};

export default Register;

import React, { useState } from 'react';
import Results from "./Results";

const FormComponent = props => {

    const [ user, setUser ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [ userError, setUserError ] = useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
    })
    
    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })

        if(e.target.name === "firstName") {
            if(e.target.value.length < 1 || e.target.value.length > 1) {
                setUserError({
                    firstNameError: ""
                })
            } else {
                setUserError({
                    firstNameError: "First Name must be at least 2 characters."
                })
            }
        }

        if(e.target.name === "lastName") {
            if(e.target.value.length < 1 || e.target.value.length > 1) {
                setUserError({
                    lastNameError: ""
                })
            } else {
                setUserError({
                    lastNameError: "Last Name must be at least 2 characters."
                })
            }
        }

        if(e.target.name === "email") {
            if(e.target.value.length < 1 || e.target.value.length > 1) {
                setUserError({
                    emailError: ""
                })
            } else {
                setUserError({
                    emailError: "Email must be at least 2 characters."
                })
            }
        }

        if(e.target.name === "password") {
            if(e.target.value.length < 1 || e.target.value.length > 7) {
                setUserError({
                    passwordError: ""
                })
            } else {
                setUserError({
                    passwordError: "Password must be at least 8 characters."
                })
            }
        }

        if(e.target.name === "confirmPassword") {
            if(e.target.value === user.password  || e.target.value.length < 1) {
                setUserError({
                    confirmPasswordError: ""
                })
            } else{
                setUserError({
                    confirmPasswordError: "Password must match."
                })
            }
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(`First Name: ${user.firstName}`);
        console.log(`Last Name: ${user.lastName}`);
        console.log(`Email: ${user.email}`);
        console.log(`Password: ${user.password}`);
        console.log(`Confirm Password: ${user.confirmPassword}`);
    }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" onChange={ changeHandler }/>
                <div>
                    {
                        userError.firstNameError
                    }
                </div>
                

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName" onChange={ changeHandler }/>
                <div>
                    {
                        userError.lastNameError
                    }
                </div>

                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" onChange={ changeHandler }/>
                <div>
                    {
                        userError.emailError
                    }
                </div>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={ changeHandler }/>
                <div>
                    {
                        userError.passwordError
                    }
                </div>

                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" name="confirmPassword" id="confirmPassword" onChange={ changeHandler }/>
                <div>
                    {
                        userError.confirmPasswordError
                    }
                </div>

            </form>

            <Results 
                results = {user}
            />
        </div>
    );
}

export default FormComponent;
import React from 'react';

const Results = props => {
    // const {firstName, lastName, email, password, confirmPassword} = props.data;
    const {results} = props;
    return(
        <div>
            <h2>Results</h2>
            <p>First Name: {results.firstName}</p>
            <p>Last Name: {results.lastName}</p>
            <p>Email: {results.email}</p>
            <p>Password: {results.password}</p>
            <p>Confirm Password: {results.confirmPassword}</p>
        </div>
    )
}

export default Results;
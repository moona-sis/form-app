import React from 'react'

const Form = () => {
    return(
        <div className="content">
            <div className='icone'></div>
            <div className="text-form">Please connect to access</div>
            <div className="form">
            <input type="text" placeholder=" Full name" name="name"></input>
            <input type="email" placeholder=" Email" name="email"></input>
            <input type="password" placeholder=" Enter your password" name="password"></input></div>
            <button className="btn" type="submit">Submit</button>
            <div className="forget">
            <p>Forget password ?<span className='pass'> click here</span></p>
            <p>Don't have account yet ? <span className='pass'>register now</span></p>
            </div>

        </div>
    )
}

export default Form
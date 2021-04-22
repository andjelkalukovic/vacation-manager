import React from 'react'

const Input = ({ name, placeholder, handleChange, type }) => {

    return (
        <div>
            <input
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                type={type}
            />
        </div>
    )
}

export default Input;
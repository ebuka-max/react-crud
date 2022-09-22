import React from 'react'

const AddUser = ({onAdd}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(e.target.name.value,e.target.username.value,e.target.email.value)
        e.target.name.value = "";
        e.target.username.value = "";
        e.target.email.value = "";


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h3>Add User</h3>
          <input placeholder='Name' name="name" /> 
          <input placeholder="username" name="username"/>
          <input placeholder="Email" name="email"/> 
          <button onSubmit={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default AddUser
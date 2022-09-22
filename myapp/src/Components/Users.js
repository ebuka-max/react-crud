import React from 'react'

const Users = ({ id, username, email, name, onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }
  return (
    <div className="list">
        <span>{name}</span>
        <span>{username}</span>
        <span>{email}</span>
        <span>
            <button>edit</button>
            <button onClick={handleDelete}>delete</button>
        </span>

    </div>
  )
}

export default Users
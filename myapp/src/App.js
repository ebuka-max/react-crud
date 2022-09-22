
import { useEffect, useState } from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import Users from './Components/Users';

function App() {

  const [users, setUsers] = useState([])



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => {
        console.log(err);
      })
  }, [])

  const onAdd = (name, username, email) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        username: username,
        email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then(res => {
        if (res.status !== 201) {
          return
        } else {
          return res.json();
        }
      })
      .then(data => {
        setUsers(users => [...users, data])
      })
      .catch(err => {
        console.log(err);
      })
  }


  const onDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.status !== 200) {
          return
        } else {
          setUsers(users.filter(user => {
            return user.id !== id;
          }))
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  console.log(users);

  return (
    <div className="App">
      <h3>React Crud Using Jsonplaceholder</h3>

      <br />
      <AddUser onAdd={onAdd} />

      <div>
        {users.map(user => (
          <Users id={user.id} key={user.id} name={user.name} username={user.username} email={user.email} onDelete={onDelete} />
        ))}
      </div>

    </div>
  );
}

export default App;

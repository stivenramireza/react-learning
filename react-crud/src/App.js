import React, { useState } from 'react';
import UserTable from './componentes/crud/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './componentes/crud/AddUserForm';
import EditUserForm from './componentes/crud/EditUserForm';

const App = () => {

  const [users, setUsers] = useState([
    { id: uuidv4(), name: 'Gilberth', username: 'garenteria' },
    { id: uuidv4(), name: 'Stiven', username: 'stivenramireza' },
    { id: uuidv4(), name: 'Jhon', username: 'rankey1496'}
  ]);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            !editing ? (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            ) : (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
import { useState } from 'react';
import AccessibleName from "./AccessibleName";
import RoleExample from "./RoleExample";
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
		<div>
			{/* <RoleExample /> */}
			<AccessibleName />
			{/* <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} /> */}
		</div>
  );
}

export default App;

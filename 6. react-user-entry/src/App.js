import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import { useState } from "react";
import UserList from "./components/Users/UserList";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const addUserHandler = (uName, uAge) => {

    setUserInfo((prevState) => [ ...prevState,
      { name: uName, age: uAge, id: Math.random().toString() }]);
  };

  return (
    <>
      <UserForm onAddUser={addUserHandler}></UserForm>
      <UserList items={userInfo} />
    </>
  );
}

export default App;

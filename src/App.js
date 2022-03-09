import "./App.css";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { _getQuestions, _getUsers } from "./_DATA";

function App() {
  const [users, setUsers] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [questions, setQuestions] = useState("");
  useEffect(() => {
    (async function getData() {
      let response = await _getUsers();
      setUsers(response);
    })();
  }, []);

  useEffect(() => {
    (async function getQuestionsData() {
      let response = await _getQuestions();
      setQuestions(response);
    })();
  }, []);
  return (
    <div className="App">
      <Login
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        questions={questions}
      />
    </div>
  );
}

export default App;

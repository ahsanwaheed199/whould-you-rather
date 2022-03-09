import React, { useState, useEffect } from "react";
import { _getUsers } from "../_DATA";
import Dashboard from "./Dashboard";
import {
  LoginContainer,
  Select,
  Container,
  Nav,
  NavLogo,
} from "../styles/styles";

const Login = ({ users, questions, selectedUser, setSelectedUser }) => {
  return (
    <div>
      {selectedUser ? (
        <Dashboard
          users={users}
          questions={questions}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      ) : (
        <Container>
          <Nav>
            <NavLogo> Polling App</NavLogo>
          </Nav>
          <LoginContainer>
            <h2>Select User To Login </h2>
            <Select onChange={(e) => setSelectedUser(e.target.value)}>
              <option value="">Select a User ...</option>
              {Object.keys(users).map((value, index) => {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              })}
            </Select>
          </LoginContainer>
        </Container>
      )}
    </div>
  );
};

export default Login;

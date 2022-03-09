import React from "react";
import {
  Container,
  Nav,
  NavLogo,
  Button,
  NavHeadings,
  Polls,
  Row,
  Avatar,
} from "../styles/styles";
const LeaderBoard = ({
  setLeaderBoard,
  selectedUser,
  setSelectedUser,
  users,
}) => {
  return (
    <div>
      <Container>
        <Nav>
          <NavLogo onClick={() => setLeaderBoard(false)}> Polling App</NavLogo>
          <NavHeadings>Leader Board</NavHeadings>
          <div style={{ color: "white" }}>
            {selectedUser},
            <Button onClick={() => setSelectedUser("")}>Log Out</Button>
          </div>
        </Nav>
        <Polls>
          {Object.values(users).map((value, index) => {
            return (
              <Row key={index}>
                {console.log(value)}
                <h3 style={{ margin: 0 }}>
                  Points:
                  {Object.keys(value.answers).length + value.questions.length}
                </h3>
                <h2 style={{ margin: 0 }}>{value.name}</h2>
                <Avatar>
                  <img src={value.avatarURL} alt="image" />
                </Avatar>
              </Row>
            );
          })}
        </Polls>
      </Container>
    </div>
  );
};

export default LeaderBoard;

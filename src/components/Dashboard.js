import React, { useState, useEffect } from "react";
import { _getQuestions } from "../_DATA";
import LeaderBoard from "./LeaderBoard";
import {
  Container,
  Nav,
  NavLogo,
  NavHeadingsWrapper,
  NavHeadings,
  Button,
  Polls,
  PollsButton,
  PollsButtonWrapper,
  Row,
  Wrapper,
  Item,
  RadioButton,
  RadioButtonLabel,
} from "../styles/styles";

const Dashboard = ({ selectedUser, setSelectedUser, questions, users }) => {
  // States

  const [switchQuestion, setSwitchQuestion] = useState("Unanswered");
  const [select, setSelect] = useState("optionA");
  const [leaderBoard, setLeaderBoard] = useState(false);
  // Functions

  const getUnansweredQuestions = (questions, selectedUser) => {
    return questions.filter(
      (q) =>
        q.optionOne.votes.includes(selectedUser) ||
        q.optionTwo.votes.includes(selectedUser)
    );
  };
  const getAnsweredQuestions = (questions, selectedUser) => {
    return questions.filter(
      (q) =>
        !q.optionOne.votes.includes(selectedUser) &&
        !q.optionTwo.votes.includes(selectedUser)
    );
  };
  const handleswitchQuestion = (type) => {
    setSwitchQuestion(type);
  };
  const answered = getUnansweredQuestions(
    Object.values(questions),
    selectedUser
  );
  const unanswered = getAnsweredQuestions(
    Object.values(questions),
    selectedUser
  );
  return (
    <div>
      {leaderBoard ? (
        <LeaderBoard
          users={users}
          setLeaderBoard={setLeaderBoard}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      ) : (
        <Container>
          <Nav>
            <NavLogo> Polling App</NavLogo>
            <NavHeadingsWrapper>
              <NavHeadings>Home</NavHeadings>
              <NavHeadings onClick={() => setLeaderBoard(true)}>
                Leader Board
              </NavHeadings>
              <NavHeadings> Add Question</NavHeadings>
            </NavHeadingsWrapper>
            <div style={{ color: "white" }}>
              {selectedUser},
              <Button onClick={() => setSelectedUser("")}>Log Out</Button>
            </div>
          </Nav>
          <Polls>
            <PollsButtonWrapper>
              <PollsButton
                value={"Answered"}
                onClick={() => handleswitchQuestion("Answered")}
              >
                Answered Question
              </PollsButton>
              <PollsButton
                value={"Unanswered"}
                onClick={() => handleswitchQuestion("Unanswered")}
              >
                Unanswered Question
              </PollsButton>
            </PollsButtonWrapper>
            {switchQuestion === "Unanswered" ? (
              <div>
                {unanswered.map((q, i) => (
                  <Row key={i}>
                    {q.author} asked <br /> Whould You Rather <br />
                    <Wrapper>
                      <Item>
                        <RadioButton
                          type="radio"
                          value="optionA"
                          checked={select === "optionA"}
                          onChange={(event) => setSelect(event.target.value)}
                        />
                        <RadioButtonLabel />
                        <div>{q.optionOne.text}</div>
                      </Item>
                      <Item>
                        <RadioButton
                          type="radio"
                          name="radio"
                          value="optionB"
                          checked={select === "optionB"}
                          onChange={(event) => setSelect(event.target.value)}
                        />
                        <RadioButtonLabel />
                        <div>{q.optionTwo.text}</div>
                      </Item>
                    </Wrapper>
                  </Row>
                ))}
              </div>
            ) : (
              switchQuestion === "Answered" && (
                <div className="CardList">
                  {answered.map((q, i) => (
                    <Row key={i}>
                      {q.author} asked <br /> Whould You Rather <br />
                      <Wrapper>
                        <Item>
                          <RadioButton
                            type="radio"
                            value="optionA"
                            checked={select === "optionA"}
                            onChange={(event) => event}
                          />
                          <RadioButtonLabel />
                          <div>{q.optionOne.text}</div>
                        </Item>
                        <Item>
                          <RadioButton
                            type="radio"
                            name="radio"
                            value="optionB"
                            checked={select === "optionB"}
                            onChange={(event) => select(event)}
                          />
                          <RadioButtonLabel />
                          <div>{q.optionTwo.text}</div>
                        </Item>
                      </Wrapper>
                    </Row>
                  ))}
                </div>
              )
            )}
          </Polls>
        </Container>
      )}
    </div>
  );
};

export default Dashboard;

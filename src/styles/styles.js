import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  margin: 10px auto;
  background-color: #efe8e8;
  border-radius: 5px;
`;
export const Nav = styled.div`
  background-color: #056992;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled.h1`
  color: white;
`;
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
export const LoginContainer = styled.div`
  width: 400px;
  height: 400px;
  margin: 50px auto;
  border-radius: 3px;
  border: 2px solid #056992;
  text-align: center;
  color: #056992;
`;
export const Select = styled.select`
  width: 80%;
  height: 35px;
  background: #056992;
  margin: 30px auto;
  color: white;
  padding-left: 5px;
  font-size: 14px;
  border: none;

  option {
    color: white;
    background: #056992;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
// Dashboard Styles
export const Polls = styled.div`
  width: 40%;
  height: 60%;
  margin: 50px auto;
  border-radius: 3px;
  border: 2px solid #056992;
  color: #056992;
  overflow-y: scroll;
`;
export const PollsButtonWrapper = styled.div`
  display: flex;
`;
export const PollsButton = styled.button`
  background: #056992;
  border-radius: 3px;
  border: none;
  color: white;
  width: 50%;
  margin: 3px;
  padding: 0.25em 1em;
`;
export const Row = styled.div`
  width: 60%;
  height: 80%;
  border-radius: 3px;
  margin: 10px auto;
  border: 2px solid #056992;
  color: #056992;
`;
export const NavHeadings = styled.h4`
  color: white;
  cursor: pointer;
  border-bottom: 2px solid white;
  margin: 0px 5px;
`;
export const NavHeadingsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      content: "\f005";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: #056992;
    border: 2px solid #056992;
  }
  &:checked + ${RadioButtonLabel} {
    background: #056992;
    border: 1px solid #056992;
    &::after {
      content: "\f005";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;
export const Avatar = styled.div`
  width: 20%;
`;

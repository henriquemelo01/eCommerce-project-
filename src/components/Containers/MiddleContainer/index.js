import react from "react";
import styled from "styled-components";
import Input01 from "../../Inputs/Input01";
import BtnLoginForm from "../../Buttons/BtnLoginForm";
import { motion } from "framer-motion";

const FakeBody = styled.div`
  display: flex; // flex -> div
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: black;

  form {
    background-color: #ebeaf5;
    width: 300px;
    padding: 20px;
    height: 50vh;
    border: solid white 1px;
    border-radius: 2rem;
  }
`;

export default function MiddleContainer({ children }) {
  return (
    <>
      <FakeBody>
        <form>
          <h1>Log In</h1>
          <hr
            style={{
              width: "100%",
              border: "1px solid white",
              margin: "15px 0",
              size: "10px",
            }}
          />
          <Input01 type="text" placeholder="E-mail" />
          <Input01 type="password" placeholder="Password" />
          <p style={{ margin: "5px 0 15px 0", textAlign: "center" }}>
            <a href="#">Forgot your password ?</a>
          </p>
          <BtnLoginForm>Log In</BtnLoginForm>
          <hr
            style={{
              margin: "15px 0",
              width: "100%",
              border: "1px solid white",
              size: "10px",
            }}
          />
          <p style={{ margin: "5px 0 15px 0", textAlign: "center" }}>
            <a href="#">Already have an account ? Sign Up</a>
          </p>
        </form>
      </FakeBody>
    </>
  );
}

import react from "react";
import styled from "styled-components";

// Importantando componentes
import MiddleContainer from "../src/components/Containers/Middle";
import InputLogin from "../src/components/Inputs/Input01";
import BtnLoginForm from "../src/components/Buttons/BtnLoginForm";
import { motion } from "framer-motion";

const Body = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  background: linear-gradient(black, #5c6bc0);
  color: white;

  h1 {
    color: black;
  }
  hr {
    width: 100%;
    border-top: 1px dashed lightgrey;
    margin: 15px 0;
    /* size: 10px; */
  }

  p {
    margin: 10px 0 15px 0;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }

  a {
    color: #5c6bc0;
    text-decoration: none;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`;

// Middle container tera uma proprieda que mudara a cor do backgorund
export default function TestePage() {
  return (
    <Body>
      <motion.div
        style={{ height: "100vh" }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          // Estados da animação
          hidden: { opacity: 0, y: "-100%" },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="show"
      >
        <MiddleContainer background="white" as={motion.div}>
          <h1>Log In</h1>
          <hr />
          <InputLogin type="text" name="email" placeholder="E-mail" />
          <InputLogin type="password" placeholder="Password" />
          <p>
            <a href="#">Forgot your password ?</a>
          </p>
          <BtnLoginForm> Login</BtnLoginForm>
          <p>
            <a href="#">Already have an account ? Sign Up</a>
          </p>
          <hr />
        </MiddleContainer>
      </motion.div>
    </Body>
  );
}

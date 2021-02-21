import react from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

// Importando Componentes
import MiddleContainer from "../src/components/Containers/Middle";
import InputLogin from "../src/components/Inputs/Input01";
import BtnLoginForm from "../src/components/Buttons/BtnLoginForm";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";

// Fake Body
const Body = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  background: linear-gradient(black, #4a148c);
  color: white;

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: black; // black ou #311b92?
  }

  .icon {
    margin-right: 10px;
    color: #4a148c; // #4527a0 ou #1769aa
    cursor: pointer;
    font-size: 25px; // aumenta tamanho do icone
    transition: transform 0.5s;
    &:hover {
      transform: translate(0px, -1.5px);
      translate: transform 0.5;

      opacity: 1;
    }
  }

  hr {
    width: 100%;
    border-top: 1px solid lightgrey;
    margin: 15px 0;
    /* size: 10px; */
  }

  p {
    margin: 10px 0 15px 0;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }

  a {
    color: #4a148c; // #0d47a1 ou #4a148c
    text-decoration: none;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }

  .already {
    margin-top: 20px;
  }
`;

// Middle container tera uma proprieda que mudara a cor do backgorund
export default function LoginPage() {
  const router = useRouter();

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
        <MiddleContainer height="60%" background="white" as={motion.div}>
          <form>
            <div className="form-header">
              <h1>Sign Up</h1>
              <AiOutlineCloseCircle
                className="icon"
                onClick={() => router.push("/")}
              />
            </div>
            <hr />
            <InputLogin
              style={{ marginBottom: "10px" }}
              type="name"
              name="email"
              placeholder="Nome Completo"
            />
            <InputLogin type="text" name="email" placeholder="E-mail" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              <InputLogin width="48%" type="password" placeholder="Password" />
              <InputLogin
                width="48%"
                type="password"
                placeholder="Confirmar Password"
              />
            </div>
            <BtnLoginForm> Sign Up</BtnLoginForm>
            <hr />
            <p className="already">
              <Link href="login">
                <a>Faça Login em vez disso</a>
              </Link>
            </p>
          </form>
        </MiddleContainer>
      </motion.div>
    </Body>
  );
}

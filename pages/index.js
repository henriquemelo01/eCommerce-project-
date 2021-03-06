import styled from "styled-components";
import Menu from "../src/components/Menu";
import BtnLogin from "../src/components/Buttons/BtnLogin";
import BtnSignUp from "../src/components/Buttons/BtnSignUp";
import { useRouter } from "next/router";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) =>
    theme.colors.primary}; // Todo componente possui a propriedade props.theme
`;

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Menu
        itens={[
          { nome: "Product", path: "/" },
          { nome: "Pricing", path: "#" },
          { nome: "Sucess Stories", path: "#" },
          { nome: "Services", path: "/services" },
          { nome: "About Us", path: "/about" },
          { nome: "Resources", path: "#" },
        ]}
        disp="inline-block" // Define disposição do menu (Block, Inline-block ou Inline)
      />
      <BtnLogin onClick={() => router.push("/login")}>Log In</BtnLogin>
      <BtnSignUp onClick={() => router.push("/testepage")}>
        Create a free account
      </BtnSignUp>
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//       <header>
//         <div className="Popup"></div>
//         <Menu>
//           <Menu.ul>
//             <Menu.li>WOMEN</Menu.li>
//             <Menu.li>MEN</Menu.li>
//             <Menu.li>OBJECTS</Menu.li>
//             <Menu.li>JOURNAL</Menu.li>
//             <Menu.li>OUR STORY</Menu.li>
//             <Menu.li>🛒(0)</Menu.li>
//           </Menu.ul>
//         </Menu>
//         <img
//           src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
//           alt="shoes"
//           style={{
//             display: "block",
//             width: "1080px",
//             height: "720px",
//             margin: "0 auto",
//           }}
//         ></img>
//       </header>
//       <main>
//         <section></section>
//       </main>
//       <footer></footer>
//     </>
//   );
// }

import styled from "styled-components";
import Menu from "../src/components/Menu";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  // itens é um array de objetos que contém o nome do item e o caminho

  return (
    <>
      <Menu
        itens={[
          { nome: "Product", path: "#" },
          { nome: "Pricing", path: "#" },
          { nome: "Sucess Stories", path: "#" },
          { nome: "Services", path: "#" },
          { nome: "About Us", path: "#" },
          { nome: "Resources", path: "#" },
        ]}
        disp="inline-block" // Define disposição do menu
      />
      <button
        style={{
          padding: "12px 16px",
          border: "solid black 2px",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          fontWeight: "bolder",
        }}
      >
        Log In
      </button>
      <button
        style={{
          color: "white",
          backgroundColor: "black",
          marginLeft: "20px",
          padding: "12px 30px",
          border: "solid black 2px",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          fontWeight: "bolder",
        }}
      >
        Create a free account
      </button>
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

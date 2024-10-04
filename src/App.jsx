import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "SimKyungha";
    src: url("/fonts/SimKyungha.ttf") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: "SimKyungha";
    background: url("https://i.pinimg.com/originals/24/62/09/246209d8f51ebcfc94f3b9381f2acf61.jpg") center/cover no-repeat ;
    height: 100vh;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
    }
    > * {
      position: relative;
    }
  } 

`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: `result`,
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { Context, ContextProvider } from "./context/Context";
const App = () => {
  return (
    <>
      <ContextProvider>
        <Sidebar />
        <Main />
      </ContextProvider>
    </>
  );
};

export default App;



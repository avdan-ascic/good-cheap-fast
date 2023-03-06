import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";
import MaintRouter from "./MainRouter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MaintRouter />
    </BrowserRouter>
  );
}

export default App;

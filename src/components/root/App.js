import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import Dashboard from "../root/Dashboard";

function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/products" element={<Dashboard></Dashboard>}></Route>
          <Route path="/cart" element={<CartDetail></CartDetail>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;

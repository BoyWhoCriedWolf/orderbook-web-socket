import "./App.css";
import Container from "./components/layout/container";
import OrderBookList from "./components/order-book/list";

function App() {
  return (
    <div className="bg-slate-800 text-white">
      <Container>
        <OrderBookList />
      </Container>
    </div>
  );
}

export default App;

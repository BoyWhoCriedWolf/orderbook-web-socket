import "./App.css";
import Container from "./components/layout/container";
import OrderBookList from "./components/order-book/list";

function App() {
  return (
    <div className="bg-slate-800 text-white h-screen overflow-auto flex flex-col justify-center items-stretch">
      <Container>
        <OrderBookList />
      </Container>
    </div>
  );
}

export default App;

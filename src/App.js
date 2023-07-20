import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";

function App() {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <Header />
        <ProductList />
    </div>
  );
}

export default App;

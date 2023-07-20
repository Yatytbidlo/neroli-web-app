import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import ProductList from "./components/ProductList/ProductList";

function App() {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <ProductList />
      <button onClick={onToggleButton}>Main button</button>
    </div>
  );
}

export default App;

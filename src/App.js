import { DataProvider } from "./context/DataContext";
import Home from "./pages/Home";
import './index.css';

function App() {
  return (
    <DataProvider>
      <div className="bg-black min-h-screen grid grid-cols-1">
        <Home />
      </div>
    </DataProvider>

  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SystemHub from "./pages/SystemHub";
import StockManager from "./pages/StockManager";
import PeopleManager from "./pages/PeopleManager";
import ClientManager from "./pages/ClientManager";
import CompanyManager from "./pages/CompanyManager";
import CreateCompanyManager from "./components/CreateCompanyMarket";
import ManufacturesManager from "./pages/ManufacturersManager";
import CreateManufacturesManager from "./components/CreateManufacturesMarket";
import ShoppingList from "./pages/ShoppingList";
import CreateShoppingList from "./pages/CreateShoppingList";

// import "./styles/App.css";
// import ChaoHeader from "./components/ChaoHeader";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hub" element={<SystemHub />} />
      <Route path="/stock" element={<StockManager />} />
      <Route path="/people" element={<PeopleManager />} />
      <Route path="/clients" element={<ClientManager />} />

      <Route path="/market" element={<CompanyManager />} />
      <Route path="/createMarket" element={<CreateCompanyManager />} />

      <Route path="/manufacturers" element={<ManufacturesManager />} />
      <Route
        path="/createManufacturers"
        element={<CreateManufacturesManager />}
      />

      <Route path="/shopping-lists" element={<ShoppingList />} />
      <Route path="/create-shopping-lists" element={<CreateShoppingList />} />
    </Routes>
  );
};

export default App;

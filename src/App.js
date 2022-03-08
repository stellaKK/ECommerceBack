import React from "react";
import './App.css';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Login from './login/SignIn';
import Dashboard from './pages/dashboard/Dashboard.js';
import InventoryMain from "./pages/inventory/InventoryMain";
import PriceMain from "./pages/prices/PricesMain";
import ClientPageMain from "./pages/clients/ClientPageMain";
import OrderMain from "./pages/orders/OrderMain";
import MessageMain from "./pages/message/MessageMain";
import TaskMain from "./pages/tasks/TaskMain";


function App() {
  return (
      <Router>
        <div className="App">

          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/inventory/*" element={<InventoryMain />} />
            <Route path="/invoices/*" element={<OrderMain />} />
            <Route path="/prices/*" element={<PriceMain />} />
            <Route path="/clients/*" element={<ClientPageMain />} />
            <Route path="/messages/*" element={<MessageMain />} />
            <Route path="/tasks/*" element={<TaskMain />} />

            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;

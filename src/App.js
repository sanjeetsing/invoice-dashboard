import React, { useState } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import RecentTransactions from "./components/RecentTransactions";
import NewInvoiceButton from "./components/NewInvoiceButton";
import CreateInvoice from "./components/CreateInvoice";
import "./App.css";

function App() {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);

  return (
    <div className="App">
      <Header />
      {showCreateInvoice ? (
        <CreateInvoice onBack={() => setShowCreateInvoice(false)} />
      ) : (
        <>
          <Summary />
          <RecentTransactions />
          <NewInvoiceButton onClick={() => setShowCreateInvoice(true)} />
        </>
      )}
    </div>
  );
}

export default App;

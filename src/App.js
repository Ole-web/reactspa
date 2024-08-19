import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ItemDetails from "./components/ItemDetails";
import NotFound from "./components/NotFound";
import "./styles/App.css"; // Import the App.css file

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home todos={todos} setTodos={setTodos} />
            </Route>
            <Route path="/todos/:id">
              <ItemDetails todos={todos} />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AddBook from "./components/AddBook";
import BookList from "./components/Books";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Render the Navbar component outside of the Routes */}
      <Routes>
        <Route index  element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
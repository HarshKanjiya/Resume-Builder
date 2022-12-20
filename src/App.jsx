import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/fomr";
import Nav from "./components/Nav";
import Next from "./components/next";

function App() {
  const [value, setValue] = useState({
    name: "",
    profession: "",
    age: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
    hobbies: [],
    skills: [],
    languages: [],
    education: [],
    links: [],
    experiences: [],
    projects: [],
    img: [],
  });
  // console.log('value.lang :>> ', value.links);
  // console.log('value.skills :>> ', value.education);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              exact
              element={<Form value={value} setValue={setValue} />}
            />
            <Route
              path="/next"
              element={<Next value={value} setValue={setValue} />}
            />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;

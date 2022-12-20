import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/fomr";
import Nav from "./components/Nav";
import Next from "./components/next";

function App() {
  const [value, setValue] = useState({
    name: "harsh kanjiya",
    profession: "berojgar",
    age: "20",
    phone: "90542 42004",
    email: "harshkanjiya001@gmail.com",
    gender: "male",
    address: "",
    hobbies: ["Html", "css", "js", "react"],
    skills: ["css", "js", "react"],
    languages: ["gujrati", "english"],
    education: [
      {
        course: "B Tech IT",
        place: "P P Savani University",
        duration: "2020 - 2024",
      },
      {
        course: "HSC",
        place: "Ashadip Science",
        duration: "2019 - 2020",
      },
    ],
    links: [
      { name: "A", link: "a" },
      { name: "A", link: "a" },
    ],
    experiences: [
      {
        name: "b",
        dipscription: "dsdsdsds",
      },
      {
        name: "sdsd",
        dipscription: "qwertyuiugfds",
      },
      {
        name: "wdfv",
        dipscription: "rethgbdsdrtjhndfjn",
      },
    ],
    projects: [
      {
        name: "b",
        dipscription: "dsdsdsds",
      },
      {
        name: "sdsd",
        dipscription: "qwertyuiugfds",
      },
      {
        name: "wdfv",
        dipscription: "rethgbdsdrtjhndfjn",
      },
    ],
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

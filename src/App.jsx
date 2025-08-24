//app.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import TemplateChooser from "./Templates/TemplateChooser";
import CreativePortfolio from "./Templates/CreativePortfolio";
import Form from './Pages/Form'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/templatechooser" element={<TemplateChooser/>}></Route>
        <Route path='/template1/:id?' element={< CreativePortfolio/>}></Route>
        <Route path="/form/:id" element={<Form/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

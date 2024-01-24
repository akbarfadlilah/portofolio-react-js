import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portofolio from "./components/Portofolio";
import Sertifikat from "./components/Sertifikat";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Chat />
    <About />
    <Skills />
    <CTA />
    <Portofolio />
    <Sertifikat />
    <Contact />
    <Footer />
  </React.StrictMode>
);

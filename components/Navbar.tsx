"use client";

import React from "react";
import { Router, Link } from "@reach/router";
import { FaSearch } from "react-icons/fa";

const Home = () => <div>Home Page</div>;
const Gallery = () => <div>Car Gallery Page</div>;
const Reservation = () => <div>Reservation Page</div>;
const About = () => <div>About Page</div>;
const FAQ = () => <div>FAQ Page</div>;

const Navbar: React.FC = () => {
  return (
    <nav className="bg-opacity-50 bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4 justify-center">
          <Link to="/">Home</Link>
          <Link to="/gallery">Car Gallery</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <FaSearch />
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" />
        <Gallery path="/gallery" />
        <Reservation path="/reservation" />
        <About path="/about" />
        <FAQ path="/faq" />
      </Router>
    </div>
  );
};

export default App;

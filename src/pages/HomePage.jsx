import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Link to="/nike" className="text-blue-500 underline">Nike Website</Link>
      <h2>Projects</h2>
    </div>
  );
};

export default HomePage;

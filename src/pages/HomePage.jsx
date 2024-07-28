import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Main/Nav';
import aboutMe from '../Main/aboutMe';

const HomePage = () => {
  return (
    <main className='bg-main-white relative'>
      <Nav/>
      <section className="container mx-auto padding">
        <h1 className="text-3xl font-bold underline">Home Page</h1>
        <p>Hello!</p>
      </section>
      <section className='padding bg-amaranth-pink'>
        <aboutMe />
      </section>
      <section className='padding'>
        <div>
          Projects
        </div>
        <Link to="/nike" className="text-blue-500 underline">Nike Website</Link>
      </section>
      <section className='padding'>
        <div>
          Blog
        </div>
      </section>
      <section className='padding'>
        <div>
          Footer
        </div>
      </section>

    </main>
  );
};

export default HomePage;

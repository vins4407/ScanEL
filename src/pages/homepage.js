import React, { useEffect } from 'react';
import "../style/homepage.css";
import { Search } from "../component/search";
import Navbar from "../component/navbar";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Homepage() {

  useEffect(() => {
    const toastMessage = localStorage.getItem('toastMessage');

    if (toastMessage) {
      toast.success(toastMessage, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      localStorage.removeItem('toastMessage');
    }
  }, []);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Search />
      </div>
    </div>
  );
}
export default Homepage;
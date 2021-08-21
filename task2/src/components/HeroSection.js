import '../App.css';
import './HeroSection.css';
import React, { useState, useEffect } from 'react';
import Ap from './Ap'
import Card from './Card'
import Axios from 'axios';
const HeroSection = () =>  {
  const [isClicked, setIsClicked] = useState(0);
  const [users, setData] = useState(null);
  const getUsers = () => {

    Axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        console.log("api data recieved")
        setData(response.data.data);

      }
    )
  }

  useEffect(() => {
    isClicked && getUsers();
  }, [isClicked])
  return (
    // <div className='hero-container'>
    //   <h1>Welcome to Av</h1>
    //   <br></br>
    //   <br></br>
    //     <Ap onSetIsClicked={setIsClicked} />
    //     <div className='row'>

    //       {users && users.map((val) => {
    //         return <Card first_name={val.first_name} last_name={val.last_name} email={val.email} avatar={val.avatar} />

    //       })}
    //     </div>
    // </div>
    <div className='photo'>
    
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Welcome to Av</h1>
        <Ap onSetIsClicked={setIsClicked} />
        <div className='row'>

          {users && users.map((val) => {
            return <Card first_name={val.first_name} last_name={val.last_name} email={val.email} avatar={val.avatar} />

          })}
        </div>
    </div>
  );
}

export default HeroSection;

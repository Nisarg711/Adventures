import React from 'react'
import { Dropdown } from 'rsuite';
import './drop.css'

const nav = () => {
  const infolist=[{label:'Our Universe', value:'./universe.jsx'},
    {label:'Our Universe', value:'./universe.jsx'}
  ]


  const handleSelect = (key) => {
    if (key === 'scientist') {
      window.open('/scientist', '_blank'); // Open Scientist page in a new tab
    } else if (key === 'universe') {
      window.open('/universe', '_blank'); // Open Universe page in a new tab
    }
    else if(key==='ast')
    {
      window.open('/astronaut','_blank');
    }
    else if(key==='sat')
    {
      window.open('/satellite','_blank');
    }
  };

  return (
    <div>

        {/* Welcome to home */}
        <img id="rocket" src="image/Rocket-PNG-Image-File.png" alt="Rocket" />
  <div id="message">Welcome to Mission: Explore</div>

<div className="nav1">
    {/* Navbar */}
  <nav className="navbar">
    <img src="image/logo.png" alt="" />
    <a href="">Home</a>
    <Dropdown title="Info" onSelect={handleSelect}>
          <Dropdown.Item eventKey="universe">Our Universe</Dropdown.Item>
          <Dropdown.Item eventKey="scientist">Indian Scientists</Dropdown.Item>
          <Dropdown.Item eventKey="ast">Indian Astronauts</Dropdown.Item>
          <Dropdown.Item eventKey="sat">Satelites</Dropdown.Item>
        </Dropdown>
    <a href="#" onClick={()=>{
      window.open('/projects','_blank');
    }}>Projects</a>
    <a href="#" onClick={()=>{
       window.open('/gameHome','_blank');
    }}>Games</a>
    <a href="#" onClick={()=>{
      window.open('/agency','_blank');
    }}>ISRO</a>
  </nav>

  
    <img src="/video/pin2.jpg" alt="" srcset="" className='back' />


   <div className="container">
    
         <h1 className='quote11'>EXPLORE THE UNEXPLORED!!!
</h1>

<p>The realm of the unknown facts, the people behind every star struck discoveries and the different sci-fi techs around the world awaits....  <br/>
Different ongoing and past projects need  Indians to know them and boast about them.</p>


      <h3 className="go"> Let’s Liftoff to learning….</h3>
   </div>
   

    {/* <footer>
      <ul>
        <li></li>
     </ul>
    </footer> */}
    </div>
    </div>
  )
}

export default nav

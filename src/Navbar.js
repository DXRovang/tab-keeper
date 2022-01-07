import React from 'react'

const Navbar = () => {
  return (<div>
    <h1>Tab Keeper</h1>
    <div>
      <div><a href="/">Home</a></div>
      <a href="/add" style={{
        color: "white",
        backgroundColor: "black",
        textDecoration: "none",
        borderRadius: "4px",
        margin: "4px"
        }}>Add</a>
    </div>
  </div>  );
}
 
export default Navbar;
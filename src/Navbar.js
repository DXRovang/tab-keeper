import React from 'react'

const Navbar = () => {
  return (<div className="Navbar">
    <h1>Tab Keeper</h1>
    <div>
      <div><a href="/">Home (in Navbar)</a></div>
      <a href="/add" style={{
        color: "white",
        backgroundColor: "black",
        textDecoration: "none",
        borderRadius: "4px",
        margin: "4px"
        }}>Add (in Navbar)</a>
    </div>
  </div>  );
}
 
export default Navbar;
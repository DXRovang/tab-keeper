import Form from "./Form";
import SiteList from "./SiteList";
import { useState } from "react";
import useFetch from './useFetch'

function Sites() {

  const { sites, isPending, error} = useFetch(" http://localhost:8000/sites");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const changeCount = () => {
    setCount(count + 1);
    setAge(30);
  };


  // const handleDelete = (id) =>{
  //   const newSites = sites.filter(site => site.id !== id)
  //   setSites(newSites)
  // }

  return (
    <div>
      { error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      <Form title="I'm a form title" />
      <div className="rando1">
        <h2>Rando State #1</h2>
        <button onClick={changeCount}>Click</button>
        {count}
      </div>

      <div className="all">
        {sites && <SiteList sites={sites} title="All Sites" 
        // handleDelete={handleDelete}
        />}
      </div>
      <div className="my">
        {sites && (
          <SiteList
            sites={sites.filter((blog) => blog.author === "me")}
            title="My Sites"
          />
        )}
      </div>
      {/* checks if sites exists, if yes then imports
    SiteList and sends it a prop of sites which 
    we get from UseEffect */}
      <div className="rando2">
        <h2>Rando State #2</h2>
        <button onClick={() => setName("luigi")}>ChangeName</button>
        {name} is {age} old.
      </div>
      {/* using an anonymous function because of the dynamic value
     if we just called the function with the value it would
     run automatically instead of waiting for the Click */}
    </div>
  );
}
export default Sites;

//   const sites = () =>{
//     fetch('http://127.0.0.1:3000/sites'
//     .then(r=>r.json())
//     .then(data=>
//       console.log(data)))
//   }
// sites()

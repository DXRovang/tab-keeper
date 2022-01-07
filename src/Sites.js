import Form from './Form'
import SiteList from './SiteList'
import { useState, useEffect } from 'react'


function Sites() {

  const [sites, setSites] = useState([])
  const [count, setCount] = useState(0)
  const [name, setName] = useState('mario')
  const [age, setAge] = useState(25)

  const changeCount = () => {
    setCount(count + 1)
    setAge(30)
  }

  useEffect(() => {
    fetch(' http://localhost:8000/sites')
    .then(r=> {
      return r.json()})
    .then(data => {
      setSites(data)
    })
  },[])
  // runs when the component mounts, second arg 
  // has 3 options - nothing, [], or a specific
  // thing that could change

  return <div>
    <Form title="I'm a form title"/>

    <button onClick={changeCount}>Click</button>
    {count}


    {sites && <SiteList sites={sites} title="All Sites"/>}
    {sites && <SiteList sites={sites.filter(blog => blog.author === "me")} title="My Sites"/>}
    {/* checks if sites exists, if yes then imports
    SiteList and sends it a prop of sites which 
    we get from UseEffect */}   
 

    <button onClick={()=> setName('luigi')}>ChangeName</button>
    {name} is {age} old.
    {/* using an anonymous function because of the dynamic value
     if we just called the function with the value it would
     run automatically instead of waiting for the Click */}

  </div>;
}
export default Sites;


  //   const sites = () =>{
  //     fetch('http://127.0.0.1:3000/sites'
  //     .then(r=>r.json())
  //     .then(data=>
  //       console.log(data)))
  //   }
  // sites()
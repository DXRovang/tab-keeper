
import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [sites, setSites] = useState([]);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch(url)
      .then((r) => {
        if(!r.ok){
          throw Error('Sumpin went wrong')
        }
        return r.json();
      })
      .then((data) => {
        setSites(data);
        setIsPending(false)
        setError(null)
      })
      .catch(err=>{
        setError(err.message)
        setIsPending(false)
      })
  }, [url]);
  // runs when the component mounts, second arg
  // has 3 options - nothing, [], or a specific
  // thing that could change

  return { sites, isPending, error}
};

export default useFetch;
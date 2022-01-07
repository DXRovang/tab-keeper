function Form(props){

  const title = props.title
  return(
    <div>
      <h2>{ title }</h2>
      <form>
        <textarea type='text'/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default Form
import "./TodoCounter.css"
function TodoCounter(props){
    return( 
        <h2>You've <span>f!#ked</span> {props.completed} of {props.total} Todos</h2>
    );
  
  }
  
export { TodoCounter };
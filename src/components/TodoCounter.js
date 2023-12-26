import "./TodoCounter.css"
function TodoCounter(props){
    return( 

      props.total === 0?
      <h2>No hay Todos por hacer</h2>
      :
      props.total === props.completed?
       <h2>Ya no tienes todos vete a jugar con tu ganso🌭</h2>
      :

      <h2>You've <span>f!#ked</span> {props.completed} of {props.total} Todos</h2>
    );
  
  }
  
export { TodoCounter };
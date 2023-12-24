import "./TodoItem.css"
function TodoItem(props){
    return(
      // {`todoItem ${props.completed && "todoCompletados"}`
      <li className={`todoItem ${props.completed && "todoCompletados"}`}>
        <span className="todoCompleted">V</span>
        <p>{props.text}</p>
        <span className="deleteButton" >X</span>
      </li>
    );
  
  }
  
export { TodoItem };
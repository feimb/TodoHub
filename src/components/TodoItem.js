import "./TodoItem.css"
function TodoItem(props){
    return(
      // {`todoItem ${props.completed && "todoCompletados"}`
      <li className={`todoItem ${props.completed && "todoCompletados"}`}>
        <span 
        className="todoCompleted"
        onClick={props.onComplete}
        >V</span>
        <p>{props.text}</p>
        <span 
        className="deleteButton" 
        onClick={props.onDelete}
        >X</span>
      </li>
    );
  
  }
  
export { TodoItem };
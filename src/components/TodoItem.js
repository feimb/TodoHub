import "./TodoItem.css"
function TodoItem(props){
    return(
      <li className="todoItem">
        <span className="todoCompleted">V</span>
        <p>{props.text}</p>
        <span className="deleteButton" >X</span>
      </li>
    );
  
  }
  
export { TodoItem };
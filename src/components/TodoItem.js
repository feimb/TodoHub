import "./TodoItem.css"
import { DeleteIcon } from "./icons/deleteIcon";
import { CheckIcon } from "./icons/checkIcon";

function TodoItem(props){
    return(
      // {`todoItem ${props.completed && "todoCompletados"}`
      <li className={`todoItem ${props.completed && "todoCompletados"}`}>
        {/* <span 
        className="checkButton"
        onClick={props.onComplete}
        >
        <CheckIcon />
        </span> */}
        <CheckIcon 
        onComplete={props.onComplete}
        />
        <p>{props.text}</p>
        {/* <span 
        className="deleteButton" 
        onClick={props.onDelete}
        >
        <DeleteIcon />
        </span> */}
        <DeleteIcon 
        onDelete={props.onDelete}
        />
      </li>
    );
  
  }
  
export { TodoItem };
import "./TodoIcon.css"
import { ReactComponent as CheckIcon} from "./check.svg"
import { ReactComponent as DeleteIcon } from "./delete.svg"
const iconTypes = {
    "check": (color) =><CheckIcon className="svgIcon" fill={color} />,
    "delete": (color) =><DeleteIcon className="svgIcon" fill={color} />
}
function TodoIcon({ type, color, onClick}){
    return(
        <span 
        className={`${type}Button`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }
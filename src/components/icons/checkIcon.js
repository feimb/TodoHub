import React from "react";
import { TodoIcon } from "./TodoIcon";
function CheckIcon({onComplete}){
    return(
        <TodoIcon 
        type={"check"}
        color={"white"}
        onClick={onComplete}
        />
    )
}

export { CheckIcon }
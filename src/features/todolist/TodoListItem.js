import React, {useState} from "react";
import Portal from "../../Portal";
import {TodoListItemDetails} from "./TodoListItemDetails";


export const TodoListItem = ({todo}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="my-3.5 cursor-pointer">
            <p className="text-green-900 text-lg" key={todo.id} onClick={handleClick}>{todo.title}</p>
            {isOpen &&
                <Portal>
                    <TodoListItemDetails todo={todo} handleClick={handleClick}/>
                </Portal>
            }
        </div>
    )
}
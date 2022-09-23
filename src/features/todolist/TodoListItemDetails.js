import React from "react";

export const TodoListItemDetails = ({todo, handleClick}) => {

    return (
        <div>
            <div className="bg-sky-500/100 h-fit m-60 p-3 fixed z-20 inset-0 max-w-xl mx-auto rounded border-2 border-amber-700" onClick={handleClick}>
                <p className="text-center text-lg text-amber-500">{todo.body}</p>
            </div>
            <div className="bg-slate-900/[.075] fixed inset-0 w-screen h-screen">
            </div>
        </div>
    )
}
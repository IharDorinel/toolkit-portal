import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getPosts} from './todolistSlice'
import {TodoListItem} from "./TodoListItem";

export const TodoList = () => {

    const dispatch = useDispatch()

    const { entities, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if(loading) return <p>Loading...</p>

    return (
        <div className="text-center m-auto pt-2.5 flex items-center justify-center flex-col">
           {entities.map((todo) => (
                <TodoListItem todo={todo}/>
            ))}

        </div>

    )
}
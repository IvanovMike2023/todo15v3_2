import {Dispatch} from 'redux'
import {ResponseType} from '../api/todolists-api'
import {
    setAppEntityStatusAC,
    setAppEntityStatusTodolistACType,
    setAppErrorAC,
    setAppErrorACType
} from "../app/App-reducer";
import {changeTodolistTitleAC} from "../features/TodolistsList/todolists-reducer";

//type ErrorUtilsDispatchType = Dispatch<setAppErrorACType | setAppEntityStatusTodolistACType>

// generic function


export const handleServerAppError =<T> (
    data: ResponseType<T>,
    dispatch: Dispatch
) => {
        if (data.messages.length) {
            dispatch(setAppErrorAC(data.messages[0]))
        } else {
            dispatch(setAppErrorAC('Some error occurred'))
        }
        dispatch(setAppEntityStatusAC('failed'))
    }

export const handleServerNetworkError = (
    error: { message: string },
    dispatch: Dispatch
) => {
    dispatch(setAppErrorAC(error.message))
    dispatch(setAppEntityStatusAC('failed'))
}
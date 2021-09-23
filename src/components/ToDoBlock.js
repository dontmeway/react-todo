import React, {useState} from 'react'



import {ToDo} from './ToDo/index'



export function ToDoBlock({heading, headingColor}) {
    const [isAdding, setIsAdding] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [dones, setDones] = useState([]);
    const [toDos, setToDos] = useState([])
    const [color, setColor] = useState(headingColor)
    const [headingInput, setHeadingInput] = useState(heading)

    const onHandleSubmit = (e) => {
        e.preventDefault()
        if (inputValue === '') return;
        setToDos(prev => [...prev, inputValue])
        setInputValue('')
        setIsAdding(false)
    }

    const addDone = (value) => {
        if (dones.find(item => item === value)) {
            setDones(prev => prev.filter(item => item !== value))
        } else {
            setDones(prev => [...prev, value])
        }

    }
    const removeDone = (value) => {
        setToDos(prev => prev.filter(item => item !== value))
    }

    const handleEditHeading = (value) => {
        setHeadingInput(prompt('', value) || value)
    }

    return (
        <div className = "toDoBlock">
            <h1 style = {{color: color}}>
              {headingInput}
              <img onClick = {() => handleEditHeading(headingInput)} src = "/images/pen.svg" alt = "edit"/>
            </h1>
            <ul className = "content">
                {toDos.map((item, index) => <ToDo removeDone = {removeDone} key = {index} value = {item} addDone = {addDone}/>)}
                {isAdding ? 
                <form onSubmit = {onHandleSubmit}>
                    <i onClick = {(e) => {
                        setInputValue('')
                        e.target.nextElementSibling.focus()
                        }} className = "bi bi-x-circle-fill"></i>
                    <input placeholder = "Текст задачи" value = {inputValue} onChange = {(e) => {
                        setInputValue(e.target.value);
                    }} /> 
                    <div className = "btns">
                        <button onSubmit = {onHandleSubmit} type = "submit" className = "submitBtn">
                            Добавить задачу
                        </button>
                        <button onClick = {() => {
                            setIsAdding(false);
                            setInputValue('');
                        }} className = "cancelBtn">
                            Отмена
                        </button>
                    </div>
                </form> : 
                <li className = "newToDo" onClick = {() => {
                    setIsAdding(true);
                }}>
                <img src = "/images/addBtn.svg" alt = "addBtn"/>
                Новая задача
              </li>}
            </ul>
        </div>
    )
}



import styles from './SideBar.module.scss'
import React from 'react'
import {Link} from 'react-router-dom'


import {Heading} from '../Heading'

export function SideBar({setHeadingColor, setToDoHeadings, toDoHeadings}) {
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [isHeading, setIsHeading] = React.useState('')
    const [dataColor, setDataColor] = React.useState('#C9D1D3')
    
    
    


    const handleAddHeading = (e) => {
        e.preventDefault()
        if (isHeading === '') return;
        setIsHeading('')
        setToDoHeadings(prev => [...prev, isHeading])
    }

    const setColor = (e) => {
        if (!e.target.classList.contains('circle')) return;
        document.querySelectorAll('.circle').forEach(item => {
            item.classList.remove('border');
        })
        e.target.classList.add('border')
        setDataColor(e.target.classList[0]);
        setHeadingColor(e.target.classList[0])
    }

    const removeHeading = (value) => {
        setToDoHeadings(prev => prev.filter(item => item !== value))
    }

    

    return(
        <div className = {styles.sideBar}>

                <h3>
                    <img width = {18} height = {18} src = "/images/sideBarMenu.svg" alt = "sideBarMenu"/>
                    Все задачи
                </h3>

            <ul>
                {toDoHeadings.map((item, index) => <Heading key = {index} removeHeading = {removeHeading} value = {item} dataColor = {dataColor}/>)}
            </ul>
            <button onClick = {() => setIsModalOpen(true)}>
                <img src = "/images/addBtn.svg" alt = "addBtn"/>
                Добавить папку
            </button>
            {isModalOpen &&
            <form onSubmit = {handleAddHeading} className = {styles.modalWindow}>
                <i onClick = {() => setIsModalOpen(false)} className = "bi bi-x-circle-fill"></i>
                <input value = {isHeading} onChange = {(e) => setIsHeading(e.target.value)} placeholder = "Название папки" />
                <div onClick = {(e) => setColor(e)}>
                    <div className = "#C9D1D3 border gray circle"></div>
                    <div className = "#42B883 green circle"></div>
                    <div className = "#64C4ED blue circle"></div>
                    <div className = "#FFBBCC pink circle"></div>
                    <div className = "#B6E6BD lightGreen circle"></div>
                    <div className = "#C355F5 violet circle"></div>
                    <div className = "#42B883 black circle"></div>
                    <div className = "#FF6464 red circle"></div>
                </div>
                <button type = "submit">Добавить</button>
            </form>}
        </div>
    )
}
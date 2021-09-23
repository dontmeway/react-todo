import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom'






import {SideBar} from './components/SideBar/index';
import {ToDoBlock} from './components/ToDoBlock';







function App() {
  
  const [toDoHeadings, setToDoHeadings] = useState([])
  const [headingColor, setHeadingColor] = useState('#C9D1D3')
  





  return (
    <div className = "wrapper">
      <SideBar setHeadingColor = {setHeadingColor} setToDoHeadings = {setToDoHeadings} toDoHeadings = {toDoHeadings} />
      <main>
        <div className = "container">
          {toDoHeadings.length === 0 && 
          <div className = "emptyPage">
            <h2>Задачи отсутствуют</h2>
          </div>}
          {toDoHeadings.map((item, index) => (

              <ToDoBlock headingColor = {headingColor} key = {index} heading = {item}/>

          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import TaskCount from "./TaskCount/TaskCount";



import './Footer.css'
import TaskFilter from "./TaskFilter/TaskFilter";
import ButtonClear from "./ButtonClear/ButtonClear";


const Footer = ({countTask}) => {
    return(
        <footer className="footer">
            <TaskCount
            countTask={countTask}/>
            <TaskFilter/>
            <ButtonClear/>
        </footer>
    )
}
export default Footer;
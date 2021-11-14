import React, {Component} from "react";
import TaskList from "./TaskList/TaskList";
import Footer from "./Footer/Footer";

import './MainTask.css';

class MainTask extends Component {
    render(){
        const {dataTask, deleteTask, countTask, completeTask, editTask,setEditTask} = this.props;
        return (
            <section className="main">
                <TaskList
                dataTask={dataTask}
                deleteTask={(id)=>deleteTask(id)}
                editTask={(id)=>editTask(id)}
                completeTask={(id)=>completeTask(id)}
                setEditTask={setEditTask}/>
                <Footer
                countTask={countTask}/>
            </section>
        )
    }
}
export default MainTask;
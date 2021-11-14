import { Component } from 'react';
import Header from '../Header/Header';
import MainTask from '../MainTask/MainTask';
import './App.css'
class App extends Component {
    maxId = 4;
    constructor(props){
      super(props)
      this.state = {
          dataTask: [
            { className: 'completed', label: 'Completed task', id: '1', taskDone: false, taskEdit: false, taskActive: false },
			{ className: 'editing', label: 'Editing task', id: '2', taskDone: false, taskEdit: false, taskActive: false },
			{ className: 'active', label: 'Active task', id: '3', taskDone: false, taskEdit: false, taskActive: false }
          ]
      }
    }
    deleteTask = (id)=> {
        this.setState(({dataTask})=>{
            // const index = data.findIndex(elem=> elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr= [...before, ...after];
            return {
                dataTask: dataTask.filter(item => item.id !== id),
            }
          })
    }

    toggleProp = (arr, id, prop)=> {
		const index = arr.findIndex((el) => el.id === id);
		const oldTask = arr[index];
		const newTask = { ...oldTask, [prop]: !oldTask[prop] };

		return [
			...arr.slice(0, index),
			newTask,
			...arr.slice(index + 1)
		]
    }
 
    editTask = (id)=> {
        this.setState(({ dataTask }) => {
			return {
				dataTask: this.toggleProp(dataTask, id, 'taskEdit')
			}
		});
    }
    setEditTask = (key, val, id)=> {
        // this.setState(({ dataTask }) => {
		// 	const index = dataTask.findIndex(elem=> elem.id === id);
        //     const ed = {label: val}
        //     const before = dataTask.slice(0, index);
        //     const after = dataTask.slice(index + 1);
        //     const newArr= [...before, ed, ...after];
        //     if(key === 'Enter'){
        //         return {
        //             dataTask: newArr
        //         }
        //     }
            
		// });
        this.setState(({ dataTask }) => {
			const index = dataTask.findIndex((el) => el.id === id);
			const oldTask = dataTask[index];
			const newTask = { ...oldTask, label: val };

			if (key === 'Enter') {
				return {
					dataTask: [
						...dataTask.slice(0, index),
						newTask,
						...dataTask.slice(index + 1)
					]
				}
			}
		})
        if (key === 'Enter') {
            this.editTask(id)
        }
        
    }
    completeTask = (id)=> {
        this.setState(({dataTask}) => {
          return {
            dataTask: this.toggleProp(dataTask, id, 'taskDone')
          };
        });
      }
    render(){
        const {dataTask,} = this.state;
        const countTask = dataTask.length - dataTask.filter((el) => el.taskDone).length
        return (
            <section className="todoapp">
				<Header/>
                <MainTask
                dataTask={dataTask}
                deleteTask={this.deleteTask}
                countTask={countTask}
                completeTask={this.completeTask}
                editTask={this.editTask}
                setEditTask={this.setEditTask}
                />
			</section>
        )
    }
}
export default App;
import { Component } from 'react';
import Header from '../Header/Header';
import MainTask from '../MainTask/MainTask';
import './App.css'
class App extends Component {
    maxId = 1;
    constructor(props){
      super(props)
      this.state = {
          dataTask: [
            this.createTaskItem('Completed task'),
            this.createTaskItem('Editing task'),
            this.createTaskItem('Active task'),
          ],
          dataFilter: [
              {label: 'All', filterDone: true, id: 1},
              {label: 'Active', filterDone: false, id: 2},
              {label: 'Completed', filterDone: false, id: 3},
          ]
      }
    }
    createTaskItem = (label)=> {
        return {
            label,
            id: this.maxId++,
            taskDone: false,
            taskEdit: false,
            taskActive: false,
            filterTask: false,
        }
    }
    addNewItem = (key, target)=> {
        
        this.setState(({dataTask})=>{
            const newTask = this.createTaskItem(target.value);
            const Arr = [...dataTask, newTask];
            if (key === 'Enter'){
                target.value = "";
                return {
                    dataTask : Arr,
                }
            }
        })
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
    
    filterDone = (id)=> {
        this.setState(({dataFilter, dataTask})=>{
            let newDataFilter = [...dataFilter];
            newDataFilter = newDataFilter.map((el) => ({...el, filterDone: el.id === id,}))
            let newDataTask = [...dataTask];
            newDataTask = newDataTask.map(el => {
                const active = newDataFilter.findIndex((filter) => filter.id === 2);
                const completed = newDataFilter.findIndex((filter) => filter.id === 3);
                
                return {
                    ...el,
                    filterTask: (newDataFilter[active].filterDone && el.taskDone) || (newDataFilter[completed].filterDone && !el.taskDone)
                }
            });
            return {
                dataTask: newDataTask,
                dataFilter: newDataFilter,
            }
        });
    }
    clearCompleted = (idArr)=> {
        idArr.forEach(id => this.deleteTask(id));
    }
 
    render(){
        const {dataTask, dataFilter} = this.state;
        const countTask = dataTask.length - dataTask.filter((el) => el.taskDone).length
        return (
            <section className="todoapp">
				<Header
                addNewItem={this.addNewItem}/>
                <MainTask
                dataTask={dataTask}
                deleteTask={this.deleteTask}
                countTask={countTask}
                completeTask={this.completeTask}
                editTask={this.editTask}
                setEditTask={this.setEditTask}
                clearCompleted={this.clearCompleted}
                onFilterDone={this.filterDone}
                dataFilter={dataFilter}
                />
			</section>
        )
    }
}
export default App;
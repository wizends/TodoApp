import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import DateShow from './components/DateShow';
import MasiveDelete from './components/MasiveDelete';
import FilterBy from './components/FilterBy';



const styles = {
  h1: {
    display: "inline",
    margin: "0"
  },
  div:{
    display:"flex",
    alignItems:"center",
    columnGap:"60%"
  }
}

const App = () => {
  
	return (
		<div className='container w-50 bg-white'>
			<h1 style={styles.h1} >Cosas por hacer</h1>
      <DateShow />
      <div style={styles.div}>
        <MasiveDelete />
        <FilterBy />
      </div>
      
			<TodoList />
      <AddTodoForm />
      <TotalCompleteItems />
		</div>
	);
};

export default App;

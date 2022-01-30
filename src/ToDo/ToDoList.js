import {Grid, Button, Typography, AppBar, Container, Toolbar, Divider} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskData, addTaskData, deleteTaskData } from '../Action/taskAction'
import './ToDoList.css';

function ToDoList() {
 const [open, setOpen] = useState(false)
 const tasks = useSelector(state => state.tasks);

  const status = {
      COMPLETED: "Completed", 
      INPROGRESS: "In Progress", 
      INCOMPLETE: "Incomplete"}

  const dispatch = useDispatch();

  //Fetch the task data from JSON server on initiall load
  useEffect(() => {
    dispatch(getTaskData())
  }, [])

  const addTask = (data, e) => {
    console.log(data)
    if(data) {
        dispatch(addTaskData(data));
    }
    handleClose(false);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const openDailog = () => {
    setOpen(true);
  }

  const deleteTask = (id) => {
    console.log(id)
    if(id) {
        dispatch(deleteTaskData(id));
    }
  }
  return (
      
    <Grid container spacing={2} rowSpacing={2}>
    <AppBar position='static'>
     <Container maxWidth="xl">
     <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            className='app-header'
          >
            TODO LIST
          </Typography>
    </Toolbar>
     </Container>
    </AppBar>
    <Grid item xs={12}>
    <Button variant="contained" endIcon={<AddIcon />} onClick={openDailog}>
         Add Task
    </Button>
    </Grid>
    <Grid item xs={4}>
        <Typography variant='h3'>InComplete</Typography>
        <Divider />
      {tasks && tasks.filter((task) => task.status === status.INCOMPLETE).map((task, index) => <Task task={task} key={index} onDeleteTask={deleteTask} className="incomplete"/>)}
    </Grid>
    <Grid item xs={4}>
    <Typography variant='h3'>In Progress</Typography>
    <Divider />
    {tasks && tasks.filter((task) => task.status === status.INPROGRESS).map((task, index) => <Task task={task} key={index} onDeleteTask={deleteTask} className="in-progress"/>)}
   
    </Grid>
    <Grid item xs={4}>
    <Typography variant='h3'>Completed</Typography>
    <Divider />
    {tasks && tasks.filter((task) => task.status === status.COMPLETED).map((task, index) => <Task task={task} key={index} onDeleteTask={deleteTask} className="complete"/>)}
    
    </Grid>
    {open && <AddTask open={true} handleSave={addTask} handleClose={handleClose} />}
  </Grid>
  );
}

export default ToDoList;

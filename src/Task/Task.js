import {Card, CardContent, CardActions, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './Task.css';

function Task({task, onDeleteTask, className}) {
console.log(className)
const onDelete = () => {
    onDeleteTask(task.id)
}

 return (
    <Card className={`card-container  + ${className}`}>
    <CardContent><Typography variant='h5'>{task.name}</Typography></CardContent>
    <CardContent><Typography variant='subtitle2'>{task.status}</Typography></CardContent>
    <CardActions>
        <IconButton onClick={onDelete}>
            <DeleteIcon />
        </IconButton>
    </CardActions>
  </Card>
 )
}

export default Task;

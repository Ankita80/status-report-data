import { TextField, Dialog, DialogTitle, DialogContent, Select, DialogActions, Button, FormControl, MenuItem, } from '@mui/material';
import { useRef, useState } from 'react';

function AddTask({open, handleSave, handleClose}) {
const Statuses = [
    {label: "Completed", value: "completed"}, 
    {label: "In Progress", value: "In Progress"}, 
    {label: "Incomplete", value: "Incomplete"}]

const [status, setStatus] = useState("");
const [taskName, setTaskName] = useState("")

const handleChangeStatus = (e) => {
    setStatus(e.target.value);
}

const handleChangeName = (e) => {
    setTaskName(e.target.value);
}
const handleSubmit = () => {
    const data = {
        "id": Math.floor(Math.random() * 100),
        "name": taskName,
        "status": status
      }
      handleSave(data);
}

return (
    <Dialog open={open} handleClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="taskName"
            label="Task Name"
            type="text"
            fullWidth
            variant="standard"
            value={taskName}
            name="name"
            onChange={handleChangeName}
          />
          <TextField
          id="status"
          select
          label="Status"
          value={status}
          onChange={handleChangeStatus}
          helperText="Please select Status"
          variant="standard"
          fullWidth
          name="status"
        >
          {Statuses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
    </Dialog>
 )
}

export default AddTask;


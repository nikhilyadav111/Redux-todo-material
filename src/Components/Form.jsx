import { Button, TextField } from '@mui/material'
import  {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add, update}from"../Features/Todo/todoSlice"


const Form = () => {
  // edit step5
  const {edit}=useSelector((state)=>state.todos);
// add opration
    const [title,setTitle]=useState("")
    const[description,setDescription]=useState("")

    const dispatch=useDispatch();

    const handleSumite=(e)=>{
      e.preventDefault();

     edit.isEdit
     ?dispatch(
      update({
        id:edit.todo.id,
        title,
        description,
      })
     )
     :dispatch(
      add({
        _id: crypto.randomUUID(),
        title,
        description,
      })
    );
    setTitle("");
    setDescription("")
       
    };
    // edit step=6
    useEffect(()=>{
      setTitle(edit.todo.title);
      setDescription(edit.todo.description);
    },[edit]);

  return (

   <form onSubmit={handleSumite}>
  <TextField
  sx={{margin:"10px 0px"}}
   label="Enter Title Here"
   varient="outlined"
   fullWidth
   onChange={(e) => setTitle(e.target.value)}
   value={title}
  />
  <TextField
  sx={{margin:"10px 0px" }}
  label="Enter description Here"
  fullWidth
  variant='outlined'
  multiline
  rows={5}
  onChange={(e) => setDescription(e.target.value)}
  value={description}
  
  />
  <Button type='submit' variant='contained'  color='success' fullWidth>
    Save
  </Button>

   </form>
  )
}

export default Form
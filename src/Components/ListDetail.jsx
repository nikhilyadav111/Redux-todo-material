import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Divider,  ListItem, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { edit, remove } from "../Features/Todo/todoSlice";

const ListDetail = ({todo}) => {
// dlt opration 
  const dispatch=useDispatch();

  const handleRemove=(id)=>{
    dispatch(remove(id));
  }
  // edit step3
  const handleEdit=(todo)=>{
    dispatch(edit(todo));
  }


  return (
   <>
    <ListItem>
      <Box sx={{flexGrow:1}}>
      <Typography variant='h5'>Title :{todo.title}</Typography>
     <Typography variant='body2'>Description: {todo.description}</Typography>
      </Box>
      <Button variant='outlined'
      size='small'
      color='success'
      endIcon={<EditIcon/>}
      // step4
      onClick={(e)=>handleEdit(todo)}
      >
      Edit
      </Button>
     <Button variant='outlined'
     size='small'
     color='error'
     endIcon={<DeleteIcon/>}
     onClick={()=>handleRemove(todo.id)}
     >
      Delete
     </Button>
    </ListItem>
    <Divider/>
   </>
  )
}

export default ListDetail
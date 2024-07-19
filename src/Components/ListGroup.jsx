import {List } from '@mui/material'
import ListDetail from './ListDetail';
import { useSelector } from 'react-redux';

const ListGroup = () => {
// read opration
const {alltodos} = useSelector((state)=>state.todos);

  return (
   <List sx={{margin:"20px 0px"}}>
  {/* read oparation */}
   {alltodos.map((todo)=>(
        <ListDetail key={todo.id} todo={todo}/>
   ))}
   </List>
   
  )
}

export default ListGroup
// import { Edit, Update } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
name:"todo",
initialState:{
    alltodos:[
        {id:1,
        title:"Some title Here",
        Discreption:"Sample Disrapation"},
    ],
// edit step1
edit:{
    todo:{},
    isEdit:false,
}
 
   
},
// dlt opration
reducers:{
    remove:(state,action)=>{
        return{
           ...state,
           alltodos:state.alltodos.filter((item)=>item.id!=action.payload),
        };
    },
   add:(state,action)=>{
    return{
        ...state,
        alltodos:[...state.alltodos,action.payload],
    };
   },
//    edit step2
edit:(state,action)=>{
    return{
        ...state,
        edit:{
            todo:action.payload,
            isEdit:true,
        },
    };
},
// update
   update:(state,action)=>{
    return{
        ...state,
        alltodos:state.alltodos.map((item)=>
        item.id===action.payload.id?action.payload:item
    ),
    edit:{todo:{},isEdit:false},
        
    }
   }

},
});

export const {remove,add,edit,update}=todoSlice.actions;
export default todoSlice.reducer;
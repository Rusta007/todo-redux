const initialState = {
  taskName: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODOADD":
      return {
        taskName: [...state.taskName,{
          text : action.payload, completed : false
        }], // Access the payload for the new task
      };
      case "TODOREMOVE":
        
        return{
          taskName : state.taskName.filter((todo) => todo !== action.payload)
        }
      case "TODOFINISHED" :
        const updatedTasks = state.taskName.map((todo, index)=>{
          if(index === action.payload){
            return { ...todo, completed : !todo.completed}
          }
          return todo;
        });
        return {
          taskName : updatedTasks
        }
    default:
      return state;
  }
};

export default todoReducer;

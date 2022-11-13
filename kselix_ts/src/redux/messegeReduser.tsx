const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MES_TEXT = 'UPDATE-MES-TEXT'

export const messegeReducer=(state:any, action:any)=>{

  if (action.type === UPDATE_MES_TEXT) {
    state.newMesText = action.newtext;
    
  } 
  else if (action.type === ADD_MESSAGE) {
    let newM = {
      massage: action.message,
    };
state.MyMassage.unshift(newM)
    
    
  } 
  return state
}
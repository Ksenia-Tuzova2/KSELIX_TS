const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MES_TEXT = 'UPDATE-MES-TEXT'

export const messegeReducer = (state: any, action: any) => {

  switch (action.type) {
    case UPDATE_MES_TEXT:state.newMesText = action.newtext;
    return state; 
    case ADD_MESSAGE: let newM = {
      massage: action.message,
    };
      state.MyMassage.unshift(newM);
      return state;
    default: return state
  }

}

export const addMessageActionCreator = (message: string) => {
	return { type: ADD_MESSAGE, message }
}

export const updateMesTextActionCreator = (newtext: string) => {
	return { type: UPDATE_MES_TEXT, newtext }
}


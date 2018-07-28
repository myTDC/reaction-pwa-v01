
import { usrTodoRef } from "../Config/fb";

export const FETCH_TODOS = 'fetch_user_todos';

export const addToDo = newToDo => async dispatch => {
  usrTodoRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  usrTodoRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  usrTodoRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};


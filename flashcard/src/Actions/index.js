export const SET_STACK = "SET_STACK"
export const LOAD_STACK = "LOAD_STACK"
export const ADD_STACK = "ADD_STACK"

export function setStack(stack) {
  return {
    type: SET_STACK,
    stack: stack,
  };
}

export function loadStack(stacks){
  return{
    type : LOAD_STACK,
    stacks : stacks
  }
}

export function addStack(stack) {
  return{
    type : ADD_STACK,
    stack
  }
}

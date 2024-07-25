import { useReducer } from "react"

interface CounterState {
  counter: number
  previus: number
  changes: number
}

const INITIAL_STATE: CounterState = {
  counter: 10,
  previus: 15,
  changes: 20
}

type CounterActions =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

const counterReducer = ( state: CounterState, action: CounterActions): CounterState => {
   switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        previus: 0,
        changes: 0
      }

    default:
      return state
   }
}

export const CounterReducerComponent = () => {
  const [{counter}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleClick = () => {
    dispatch({type: 'reset'})
  }
  return (
    <>
    <h1>CounterReducer: {counter} </h1>
    <button onClick={handleClick}> Reset </button>
    </>
  )
}

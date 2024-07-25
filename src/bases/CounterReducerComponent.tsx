import { useReducer } from "react"

interface CounterState {
  counter: number
  previus: number
  changes: number
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previus: 0,
  changes: 0
}

type CounterActions =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

const counterReducer = ( state: CounterState, action: CounterActions): CounterState => {
    const { counter, previus , changes } = state

   switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        previus: 0,
        changes: 0
      }
      case 'increaseBy':
        return{
          counter: counter + action.payload.value,
          previus: counter,
          changes: changes + 1
        }

    default:
      return state
   }
}

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch({type: 'reset'})
  }

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: {value}})
  }
  return (
    <>
    <h1>CounterReducer</h1>
    <pre>
      {JSON.stringify(counterState, null, 2)}
    </pre>
    <button onClick={() => increaseBy(1)}>
      +1
    </button>
    <button onClick={() => increaseBy(5)}>
      +5
    </button>
    <button onClick={() => increaseBy(10)}>
      +10
    </button>
    <button onClick={handleReset}>
      Reset
    </button>
    </>
  )
}

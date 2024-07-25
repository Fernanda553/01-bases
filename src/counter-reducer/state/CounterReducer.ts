import { CounterActions } from "../actions/actions"
import { CounterState } from "../interfaces/interfaces"

export const counterReducer = ( state: CounterState, action: CounterActions): CounterState => {
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
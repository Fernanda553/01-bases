export type CounterActions =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

export const doReset = (): CounterActions => ({
    type: 'reset'
})

export const doIncreaseBy = (value: number): CounterActions => ({
     type: 'increaseBy', payload: {value}
})
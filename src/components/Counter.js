/* @flow */
import React from 'react'

export type Props = {
  count: number,
  onIncrement?: () => void,
  onDecrement?: () => void,
  onReset?: () => void
}

const Counter = ({ count, onIncrement, onDecrement, onReset }: Props) => (
  <div>
    <p className='count'>Counter: {count}</p>
    {onIncrement && <button onClick={onIncrement.bind(this)}>Increment</button>}
    {onDecrement && <button onClick={onDecrement.bind(this)}>Decrement</button>}
    {onReset && <button onClick={onReset.bind(this)}>Reset</button>}
  </div>
)

Counter.propTypes = {
  count: React.PropTypes.number.isRequired,
  onIncrement: React.PropTypes.func,
  onDecrement: React.PropTypes.func,
  onReset: React.PropTypes.func
}

Counter.defaultProps = {
  count: 0
}

export default Counter

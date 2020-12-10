import React, { useEffect } from 'react'
import './Counter.scss'

interface Props {
  number: number
  Icon: any
  target: number
  category: string
}

const Counter = ({ number, Icon, target, category }: Props) => {
  return (
    <div className='counter'>
      <Icon className='counter__icon' />
      <div className='counter__target'>{number}</div>
      <p>{category}</p>
    </div>
  )
}

export default Counter

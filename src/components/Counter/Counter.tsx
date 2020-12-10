import React, { useEffect, useState } from 'react'
import './Counter.scss'

interface Props {
  Icon: any
  target: number
  category: string
}

const Counter = ({ Icon, target, category }: Props) => {
  const [counter, setCounter] = useState(0)

  const incrementAmount = Math.floor(target / 100)

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter >= target) {
        clearInterval(interval)
      } else {
        setCounter((counter) => counter + incrementAmount)
      }
    }, 1)

    return () => {
      clearInterval(interval)
    }
  }, [counter, target, incrementAmount])

  return (
    <div className='counter'>
      <Icon className='counter__icon' />
      <div className='counter__target'>{counter}</div>
      <p>{category}</p>
    </div>
  )
}

export default Counter

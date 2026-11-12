import { useState, useEffect } from 'react'
import { formatDueIn } from '../../Helpers'

const ArrivalDueIn = ({ expectedArrival }) => {
  const [dueIn, setDueIn] = useState(() => formatDueIn(expectedArrival))

  useEffect(() => {
    setDueIn(formatDueIn(expectedArrival))
    const timer = setInterval(() => setDueIn(formatDueIn(expectedArrival)), 1000)
    return () => clearInterval(timer)
  }, [expectedArrival])

  return <div className='end'>{dueIn}</div>
}

export default ArrivalDueIn

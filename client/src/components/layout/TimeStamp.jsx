import { formatTime } from '../../Helpers'

const TimeStamp = ({ timeStamp }) => (
  <div className='row age end'>
    {timeStamp ? `updated ${formatTime(timeStamp)}` : 'fetching...'}
  </div>
)

export default TimeStamp

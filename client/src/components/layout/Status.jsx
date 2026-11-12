import TimeStamp from './TimeStamp'

const Status = ({ line, timeStamp }) => (
  <>
    <div className='row titleRow status'>{line.status}</div>
    {line.reason && (
      <div className='row'>
        <div className='data'>{line.reason}</div>
      </div>
    )}
    <TimeStamp timeStamp={timeStamp} />
  </>
)

export default Status

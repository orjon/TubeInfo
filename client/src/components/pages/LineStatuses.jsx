import LineStatusCard from '../layout/LineStatusCard'
import { useStatuses } from '../../hooks'
import '../../scss/Section.scss'

const LineStatuses = () => {
  const { statuses, statusesTimeStamp } = useStatuses()

  return (
    <section>
      <div className='CardGrid'>
        {statuses.map((line) => (
          <LineStatusCard
            key={line.id}
            line={line}
            statusesTimeStamp={statusesTimeStamp}
          />
        ))}
      </div>
    </section>
  )
}

export default LineStatuses

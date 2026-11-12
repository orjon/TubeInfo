// Lines whose colour needs dark text
export const lightColors = ['hammersmith-city', 'waterloo-city', 'circle']

const TubeLineHeader = ({ line }) => (
  <div className={`row lineColor ${line.id}`}>
    <div className={lightColors.includes(line.id) ? 'lightColor' : ''}>
      {line.name}
    </div>
  </div>
)

export default TubeLineHeader

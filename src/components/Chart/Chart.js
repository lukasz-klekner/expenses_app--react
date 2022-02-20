import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(({ value }) => value)
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className='chart'>
      {dataPoints.map(({ label, value }) => (
        <ChartBar label={label} value={value} maxValue={totalMaximum} />
      ))}
    </div>
  )
}

export default Chart

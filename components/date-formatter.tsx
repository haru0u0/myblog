// components/date-formatter.tsx
import { format, parseISO } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  let date: Date
  try {
    // ISO形式でパース
    date = parseISO(dateString)
    if (isNaN(date.getTime())) {
      // parseISOできなかったら通常のDateでパース
      date = new Date(dateString)
    }
  } catch {
    date = new Date(dateString)
  }

  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

export default DateFormatter

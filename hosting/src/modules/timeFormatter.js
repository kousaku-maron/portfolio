import moment from 'moment-timezone'

const timezone = 'Asia/Tokyo'

export const unixToDate = (unix) => {
  return moment(unix, 'X').tz(timezone).format()
}
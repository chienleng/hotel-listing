import Hotel from '../../models/hotel'

export default function(results) {
  const arr = []
  if (results) {
    results.forEach(d => {
      arr.push(new Hotel(d))
    })
  } else {
    console.warn('Cannot find results.')
  }
  return arr
}

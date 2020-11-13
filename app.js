//endpoint: https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=CRJtRnLswIU7kXmTsDuzmnwJy55e0sGEmWrKLcFe
//
//https://api.nasa.gov/neo/rest/v1/feed?start_date=${year}-09-07&end_date=2015-09-08&api_key=CRJtRnLswIU7kXmTsDuzmnwJy55e0sGEmWrKLcFe


const yearInput = document.querySelector('#year-blank')
const monthInput = document.querySelector('#month-blank')
const dayInput = document.querySelector('#day-blank')

const searchButton = document.querySelector('#search')

function findYear() {
  const yearSearch = yearInput.value
  const monthSearch = monthInput.value
  const daySearch = dayInput.value
  getData(yearSearch, monthSearch, daySearch)
  removeData()
  return
}
searchButton.addEventListener("click", findYear)



async function getData(year, month, day) {
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${year}-${month}-${day}&api_key=CRJtRnLswIU7kXmTsDuzmnwJy55e0sGEmWrKLcFe`
  try {
    const res = await axios.get(url)
    console.log(res)
    let response = await res.data.near_earth_objects[`${year}-${month}-${day}`]
    console.log(response)

    response.forEach((info) => {

      const neoId = document.querySelector('.neo-list')

      const neoName = document.createElement('h3')
      const getName = info.name
      neoName.textContent = `Object Name: ${getName}|`

      const neoDate = document.createElement('p')
      const dateNeo = info.close_approach_data[0].close_approach_date
      neoDate.textContent = ` Approach Date: ${dateNeo}`


      const missDist = document.createElement('h5')
      const neoDist = info.close_approach_data[0].miss_distance.miles
      missDist.textContent = ` Miss Distance: ${neoDist} miles`

      const neoDanger = document.createElement('h6')
      const dangerNeo = info.is_potentially_hazardous_asteroid
      neoDanger.textContent = ` Is it a potentially dangerous asteroid? ${dangerNeo}`


      neoDate.className = 'date-list'
      neoId.append(neoName)
      neoId.append(neoDate)
      neoId.append(missDist)
      neoId.append(neoDanger)

      

    })

  }
  catch (error) {
    console.log(error)
  }

}


function removeData() {
  const oldList = document.querySelector('.neo-list')
  while (oldList.lastChild) {
    oldList.removeChild(oldList.lastChild)
  }
}




// async function getApod(apod) {
// const url = `https://api.nasa.gov/planetary/apod?api_key=CRJtRnLswIU7kXmTsDuzmnwJy55e0sGEmWrKLcFe`
//   try {
//     const res = await axios.get(url)
//     console.log(res)
//     let response = res.data
//     console.log(response)

//     response.forEach((info) => {
//       const apodImg = document.createElement('img')
//       apodImg.setAttribute('src', data.image)

//     })
//   }

//  catch (error) {
//   console.log(error)
//   }
//   getApod()












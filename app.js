//endpoint: https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=CRJtRnLswIU7kXmTsDuzmnwJy55e0sGEmWrKLcFe
//http://www.neowsapp.com/rest/v1/feed?start_date=2015-09-09&end_date=2015-09-10&detailed=false&api_key=CRJtRnLswIU7kXmTsDuzmnwJy55e0sGEmWrKLcFe


const yearInput = document.querySelector('#year-blank')
const monthInput = document.querySelector('#month-blank')
const searchButton = document.querySelector('#search')

async function getDate(neo) {
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=CRJtRnLswIU7kXmTsDuzmnwJy55e0sGEmWrKLcFe`
  try {
    const res = await axios.get(url)
    console.log(res)
    let response = res.data
    console.log(response)

  } catch (error) {
    console.log(error)
  }
  response.forEach((info) => {

    const neoId = document.querySelector('.neo-list')
    const neoDiv = document.createElement('div')
    const neoName = info.data.name_limited

    const neoDate = document.createElement('h3')
    neoDate.textContent = info.data.close_approach_data
    neoDate.className = 'neo-list'

    const neoMiss = document.createElement('h5')
    neoMiss.textContent = info.data.miss_distance.miles
    neoMiss.className = 'neo-list'

    const neoSpeed = document.createElement('h6')
    neoSpeed.textContent = info.data.relative_velocity.miles_per_hour
    neoSpeed.className = 'neo-list'
    neoDate.append(neoDiv)
    neoName.append(neoDiv)
    neoSpeed.append(neoDiv)
    neoMiss.append(neoDiov)


  })
}
function removeData() {
  const oldNeo = document.querySelector('.neo-list')
  while (oldNeo.lastChild) {
    oldNeo.removeChild(oldNeo.lastChild)
  }
}
const button = document.querySelector('button')


button.addEventListener('click', () => {
  const optionValue = document.querySelector('#year-blank', '#month-blank').value
  removeData()
  getData(optionValue)
})



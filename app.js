//endpoint: https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=CRJtRnLswIU7kXmTsDuzmnwJy55e0sGEmWrKLcFe


const yearInput = document.querySelector('#year-blank')
const monthInput = document.querySelector('#month-blank')
const searchButton = document.querySelector('#search')

async function getData(neo) {
  const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=CRJtRnLswIU7kXmTsDuzmnwJy55e0sGEmWrKLcFe`
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
    neoDate.append(neoDiv)
    neoName.append(neoDiv)


  })
}

getData(1977)

let greeting = "Hello"
console.log(greeting)
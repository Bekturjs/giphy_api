
// console.log('request data...')

// setTimeout(() => {
// console.log('preparing data...')

// const backendData = {
// server : 'AAA',
// prompt: 2000,
// status: 'working'
// }
//  setTimeout(() => {
//      backendData.modified = true
//      console.log('Data recieved', backendData)
//  },2000)

// }, 2000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'AAA',
//             port: 2000,
//             status: 'working'
//         }
//         resolve (backendData)
//     },2000)
// } )
//  p.then((data) => {
//      console.log('Promise resolved')
//  })

//  p
//  .then((data) => console.log('OK', data))
//  .catch((err) => {
//      console.error('ERROR:', err)
//  }).finally((data) => console.log('FINALLY'))


//======fetch================async=============Await===============
// const search = async () => {
// let url = 'https://www.samurai.com/users'

// let response = await fetch(url)

// let request = await response.json()
// console.log(request)
// }

const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'rhmyBQlIdCGf49XxwY2Y6BGYzvxd9YiZ'
const secondStr = '&limit=25&q='


const input = document.getElementById('searchGiphy')
const btn = document.getElementById('btn')
const output = document.getElementById('output')

const search = async () => {
    let text = input.value
    let url = API + KEY + secondStr + text
    let response = await fetch(url)
    let request = await response.json()

    output.innerHTML = ''   
    input.value = ''

    renderGiphy(request.data)
}





const renderGiphy = (data) => {
    data.forEach(element => {
        let ifrm = document.createElement('iframe')
        ifrm.src = element.embed_url
                    let h3 = document.createElement('h3')
                    h3.innerHTML = element.title
                    output.append(ifrm, h3)
    })              
}

btn.addEventListener('click', search)






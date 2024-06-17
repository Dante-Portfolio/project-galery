import {json_file} from './json.js'

const authParams = new URLSearchParams(window.location.search);
const containerApp = document.getElementById('containerApp')
const containerBoxes = document.getElementsByClassName('containerBoxes')
const radioChecked = document.getElementsByTagName('input:checked')
const pics = document.getElementsByClassName('img')

if (!authParams.get('auth')) {
    alert('Logueate Primero')
    window.location.href = '../index.html'
}

console.log(radioChecked.classList.value)

// function insertboxes() {

    // const jsonLenght = JSON.parse(jsonBD).length
    console.log(json_file.length)

    const boxesNumber = getComputedStyle(document.body).getPropertyValue('--imagesPerContainer');
    const containerCalc = jsonLenght / boxesNumber
    const containersInApp = Math.ceil(containerCalc)

//     for (let i = 0; i < containersInApp; i++) {
//         const newContainer = containerApp.appendChild(document.createElement('div'))
//         newContainer.setAttribute('class', 'containerBoxes containerBoxes' + i)
//     }
// }

// radioChecked.addEventListener('change', insertboxes)
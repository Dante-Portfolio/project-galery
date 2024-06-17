const authParams = new URLSearchParams(window.location.search);
const containerApp = document.getElementById('containerApp')
const containerBoxes = document.getElementsByClassName('containerBoxes')
const radioChecked = document.getElementsByTagName('input:checked')

const pics = document.getElementsByClassName('img')

if (!authParams.get('auth')) {
    alert('Logueate Primero')
    window.location.href = '../index.html'
}

// reconocer contenedorApp
// contar imagenes cargadas
// pasar al puto json
// recoger de json y contar
// crear boxes por cada imagen
// cargar imagenes en boxes
// borrar contenedores de cargas anteriores
// filtrar por lo que sea
// si da tiempo insertar lasimagenes reales

// CREAR CONTENEDORES Y BOX DEPENDIENDO DEL NUMERO DE IMAGENES

function insertboxes() {

    const jsonBD = localStorage.getItem('uploadFiles')
    const jsonLenght = JSON.parse(jsonBD).length
    const boxesNumber = getComputedStyle(document.body).getPropertyValue('--imagesPerContainer');
    const containerCalc = jsonLenght / boxesNumber
    const containersInApp = Math.ceil(containerCalc)

    for (let i = 0; i < containersInApp; i++) {
        const newContainer = containerApp.appendChild(document.createElement('div'))
        newContainer.setAttribute('class', 'containerBoxes containerBoxes' + i)
    }

    const containersCreated = document.getElementsByClassName('containerBoxes')

    let counter = 0
    for (let newContainer of containersCreated) {

        for (let i = 0; i < boxesNumber; i++) {
            if (counter < jsonLenght) {
                const box = newContainer.appendChild(document.createElement('div'))
                box.setAttribute('class', 'boxInput')

                const boxRadio = box.appendChild(document.createElement('div'))
                boxRadio.setAttribute('class', 'radio')

                const boxImage = box.appendChild(document.createElement('div'))
                boxImage.setAttribute('class', 'boxImage')

                const img = boxImage.appendChild(document.createElement('div'))
                img.setAttribute('class', 'img')
                img.style.backgroundImage = 'url(../resources/pics/' + (counter + 1) + '.webp'

                const info = boxImage.appendChild(document.createElement('div'))
                info.setAttribute('class', 'info')
            }
            counter += 1
        }
    }
} // ..........................................................

// RECOGER LOS ARCHIVOS SUBIDOS Y GUARDAR DATOS EN JSON

function createJson() {
    const list = filesUpload.files

    for (let i = 0; i < Object.keys(list).length; i++) {
        let id = i
        let name = list[i].name
        let type = list[i].type

        filesData.push({
            id: i,
            name: name,
            type: type
        })
    }
    const json = JSON.stringify(filesData)
    localStorage.setItem('uploadFiles', json)
    console.log(json)

} // ...........................................................

// BORRAR DATOS DE SUBIDAS ANTERIORES 

function cleanOldData() {
    filesData = []
} // ...........................................................


const filesUpload = document.getElementById('filesUpload')
let filesData

filesUpload.addEventListener('change', cleanOldData)
filesUpload.addEventListener('change', createJson)
filesUpload.addEventListener('change', insertboxes)


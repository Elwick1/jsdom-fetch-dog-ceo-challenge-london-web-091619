console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let jswan



fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        displayDogs(json.message)
    })

function displayDogs(json) {
    for (const dog of json) {
      doggos = document.createElement("img")
      doggos.src = dog 
      addDoggo = document.querySelector("#dog-image-container")
      addDoggo.appendChild(doggos)
    }
}
function scopeHack() {

    return fetch(breedUrl)
        .then(function(response) {
            return response.json();
        })
}
    function doggoController() {
         scopeHack()
        .then(function(json) {
            jswan = Object.keys(json.message)
            displayBreed(Object.keys(json.message))
        })
        console.log(jswan)
    }

    function displayBreed(json) {
        for (const breed of json) {
            breedos = document.createElement("li")
            breedos.innerText = breed
            breedos.style.fontSize = "xx-large"
            breedos.addEventListener("click", orange)
            addBreedo = document.querySelector("#dog-breeds")
            addBreedo.appendChild(breedos)
            document.querySelector("#breed-dropdown").addEventListener("change", chooseyBoy)
        }
        function chooseyBoy(e){
            clickyBreeds = []
            clickyBoy = e.target.value 
            clickyBoy.breed
            console.log(json)
            for(let i = 0; i < jswan.length; i ++) {
            
                if (clickyBoy === jswan[i][0]){
                    console.log(jswan[i])
                    clickyBreeds.push(jswan[i])
                }
            }
            document.querySelector("#dog-breeds").innerText = ""
            displayBreed(clickyBreeds)
        }
    }

    doggoController()


function orange(e) {
    e.target.style.color = "orange"
}

// document.querySelector("#breed-dropdown").addEventListener("change", chooseyBoy)

// function chooseyBoy(e){
//    clickyBoy = e.target.value 
//    clickyBoy.
// }
})

var dogsClicked = ""
var dogsAmount = 0
var firstDogId = ""
var secondDogId = ""
var score = 0
var fails = 0

function showDog(dogId){
    dogsAmount += 1
    if (dogsAmount !== 3){

        var dogImg = document.getElementById(dogId)
        dogImg.classList.toggle("dog-img")

        dogsClicked += dogImg.getAttribute("id")

        if(dogsAmount == 1){
            firstDogId = dogId
        } else if (dogsAmount == 2){
            secondDogId = dogId
        }

        if (dogsClicked == "beagle2beagle1" || dogsClicked == "beagle1beagle2"
            || dogsClicked == "dachshund2dachshund1" || dogsClicked == "dachshund1dachshund2"
            || dogsClicked == "pug2pug1" || dogsClicked == "pug1pug2"){
            alert("You won!")
            score += 1
            document.getElementById("score").innerHTML = score
        } else if (dogsAmount == 2) {
            alert("Try Again!")
            fails += 1
            document.getElementById("fails").innerHTML = fails
        }
    } else {
        document.getElementById(firstDogId).classList.toggle("dog-img")
        firstDogId = ""
        document.getElementById(secondDogId).classList.toggle("dog-img")
        secondDogId = ""
        dogsClicked = ""
        dogsAmount = 0
    }
}

function retry(){
    dogsClicked = ""
    dogsAmount = 0
    if (firstDogId !== ""){
        document.getElementById(firstDogId).classList.toggle("dog-img")
    }
    firstDogId = ""

    if (secondDogId !== ""){
        document.getElementById(secondDogId).classList.toggle("dog-img")
    }
    secondDogId = ""

    score = 0
    document.getElementById("score").innerHTML = score

    fails = 0
    document.getElementById("fails").innerHTML = fails
}
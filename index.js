

document.querySelector(".w.drum").addEventListener("click", function() {
    let audio = new Audio("./Drum Kit Starting Files/sounds/tom-1.mp3");
    audio.play();
    buttonAnimation("w");
});
document.querySelector(".a.drum").addEventListener("click", function() {
    let audio = new Audio("./Drum Kit Starting Files/sounds/crash.mp3");
    audio.play();
    buttonAnimation("a");
});
document.querySelector(".s.drum").addEventListener("click", function() {
    let audio = new Audio("./Drum Kit Starting Files/sounds/tom-2.mp3");
    audio.play();
    buttonAnimation("s");
});
document.querySelector(".d.drum").addEventListener("click", function() {
    let audio = new Audio("./Drum Kit Starting Files/sounds/kick-bass.mp3");
    audio.play();
    buttonAnimation("d");
});
document.querySelector(".j.drum").addEventListener("click", function() {
    let audio = new Audio("./Drum Kit Starting Files/sounds/tom-3.mp3");
    audio.play();
    buttonAnimation("j");
});
let k = document.querySelector(".k.drum").addEventListener("click", function() {
    let audio = new Audio("./Drum Kit Starting Files/sounds/tom-4.mp3");
    audio.play();
    buttonAnimation("k");
});
document.querySelector(".l.drum").addEventListener("click", function() {
    let audio = new Audio("./Drum Kit Starting Files/sounds/snare.mp3");
    audio.play();
    buttonAnimation("l");
});


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(key){
    switch(key){
        case "w" : 
        let audio = new Audio("./Drum Kit Starting Files/sounds/tom-1.mp3");
        audio.play();
        break;

        case "a" :
            let audio1 = new Audio("./Drum Kit Starting Files/sounds/crash.mp3");
            audio1.play();
            break;
        case "s" :
            let audio2 = new Audio("./Drum Kit Starting Files/sounds/tom-2.mp3");
            audio2.play();
            break;
        case "d" :
            let audio3 = new Audio("./Drum Kit Starting Files/sounds/kick-bass.mp3");
            audio3.play();
            break;
        case "j" :
            let audio4 = new Audio("./Drum Kit Starting Files/sounds/tom-3.mp3");
            audio4.play();
            break;
        case "k" :
            let audio5 = new Audio("./Drum Kit Starting Files/sounds/tom-4.mp3");
            audio5.play();
            break;
        case "l" :
            let audio6 = new Audio("./Drum Kit Starting Files/sounds/snare.mp3");
            audio6.play();
            break;
        default : alert("press appropriate key");
    }

}
function buttonAnimation(currentKey){
// WE PUT DOT(.) BECAUSE CLASS HAS DOT AND KEY ONLY PASS CHARACTER WITHOUT DOT
        let button = document.querySelector("." + currentKey);
        button.classList.add("pressed");
        setTimeout(function (){
            button.classList.remove("pressed");
        }, 100);
}

// function makeSound(event, ke){
//     if(event = "keydown" && ke == "l"){
//         let audio = new Audio("sounds/snare.mp3");
//         audio.play();
//     }
// }


// makeSound("keydown");
// function handleClick(){
//     alert("I got clicked");
// }
// // keydown

document.addEventListener("keydown", function(event){
    console.log(event);
    });
// 0 = kő
// 1 = papír
// 2 = olló 

let wonCounter = 0;
let drawCounter = 0;
let lostCounter = 0;


let gameFunction = (selectedImgNumber) => {

    // the computer players random result
    let resultImgNumber = Math.floor(Math.random() * 3);

    // set the image src based on the random number
    if (resultImgNumber == 0) {
        document.getElementById("result").src = "ko.webp";

        if (selectedImgNumber == 0) {
            document.getElementById("draw").innerHTML = "DÖNTETLEN: " + (++drawCounter);
            document.getElementById("informationLabel").innerHTML = "EZ MOST EGY DÖNTETLEN LETT";
        } else if (selectedImgNumber == 1) {
            document.getElementById("won").innerHTML = "NYERT: " + (++wonCounter);
            document.getElementById("informationLabel").innerHTML = "HURRÁ! EZT A KÖRT TE NYERTED!";
        } else {
            document.getElementById("lost").innerHTML = "VESZTETT: " + (++lostCounter);
            document.getElementById("informationLabel").innerHTML = "MOST SAJNOS VESZTETTÉL";
        }

    } else if (resultImgNumber == 1) {
        document.getElementById("result").src = "papir.webp";

        if (selectedImgNumber == 0) {
            document.getElementById("lost").innerHTML = "VESZTETT: " + (++lostCounter);
            document.getElementById("informationLabel").innerHTML = "MOST SAJNOS VESZTETTÉL";
        } else if (selectedImgNumber == 1) {
            document.getElementById("draw").innerHTML = "DÖNTETLEN: " + (++drawCounter);
            document.getElementById("informationLabel").innerHTML = "EZ MOST EGY DÖNTETLEN LETT";
        } else {
            document.getElementById("won").innerHTML = "NYERT: " + (++wonCounter);
            document.getElementById("informationLabel").innerHTML = "HURRÁ! EZT A KÖRT TE NYERTED!";
        }

    } else {
        document.getElementById("result").src = "ollo.webp";

        if (selectedImgNumber == 0) {
            document.getElementById("won").innerHTML = "NYERT: " + (++wonCounter);
            document.getElementById("informationLabel").innerHTML = "HURRÁ! EZT A KÖRT TE NYERTED!";
        } else if (selectedImgNumber == 1) {
            document.getElementById("lost").innerHTML = "VESZTETT: " + (++lostCounter);
            document.getElementById("informationLabel").innerHTML = "MOST SAJNOS VESZTETTÉL";
        } else {
            document.getElementById("draw").innerHTML = "DÖNTETLEN: " + (++drawCounter);
            document.getElementById("informationLabel").innerHTML = "EZ MOST EGY DÖNTETLEN LETT";
        }
    }

    // makes the result visible
    document.getElementById("resultContainer").classList.remove("hidden");
    document.getElementById("resultContainer").classList.add("imgTile");

    // makes the button visible
    document.getElementById("buttonContainer").classList.remove("hidden");
    document.getElementById("buttonContainer").classList.add("visibleButton");

}

//makes the computer players random result hidden and gives a new value to the information header
let hideFunction = () => {
    document.getElementById("resultContainer").classList.remove("imgTile");
    document.getElementById("resultContainer").classList.add("hidden");

    document.getElementById("informationLabel").innerHTML = "FOLYTASD A JÁTÉKOT EGY KÖVETKEZŐ KÖRREL!";
}
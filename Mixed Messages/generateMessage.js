//Accessing textbar and button from document
const textbar = document.getElementById('textbar');
const generateButton = document.getElementById('generate-button');

//Arrays of different words to choose from
const randomWords = [
    "Apple",
    "Bicycle",
    "Curiosity",
    "Diamond",
    "Elephant",
    "Forest",
    "Galaxy",
    "Harmony",
    "Imagination",
    "Journey",
    "Kaleidoscope",
    "Laughter",
    "Melody",
    "Nostalgia",
    "Ocean",
    "Phoenix",
    "Quicksand",
    "Rainbow",
    "Symphony",
    "Thunder",
    "Umbrella",
    "Victory",
    "Whisper",
    "Xylophone",
    "Yearning",
    "Zephyr",
    "Acorn",
    "Blossom",
    "Cascade",
    "Daydream",
    "Eclipse",
    "Feather",
    "Glacier",
    "Horizon",
    "Illusion",
    "Jewel",
    "Kettle",
    "Lantern",
    "Meadow",
    "Nightingale"];

//create function that decides word length
const messageLength = () => {
    //choose word length between one and 5

    let lengthOfMessage = 0;

    while(lengthOfMessage === 0){
        //assigning length of message new random value, if value is 0 loop will repeat
        lengthOfMessage = Math.floor(Math.random() * 6);
    }

    return lengthOfMessage;
}

//Choose random word from array

const chooseRandomWord = (arr) => {
    //Select random word from array and return it\
    return arr[Math.floor(Math.random() * arr.length)];
}

//Function to construct the message
const constructMessage = () => {
    //array that will contain message
    let message = [];
    //variable setting the length of the message
    const lengthOfMessage = messageLength();

    //loop for the same length of the message
    for(let i = lengthOfMessage; i > 0; i--){
        //push a new random word to message array 
        message.push(chooseRandomWord(randomWords));
    }
}




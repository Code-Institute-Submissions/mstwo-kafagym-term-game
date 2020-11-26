window.addEventListener('load', init);

let seconds = 6;
let gameLoading;

const entryWord = document.querySelector('#entry-word');
const gymTerms = document.querySelector('#gym-terms');
const feedbackMessage = document.querySelector('#feedback');
const timer = document.querySelector('#counting-down');


const terms = ['Abs', 'Absolute Strength', 'Active rest', 'Adduct muscles', 'Aerobic exercise', 'Aerobics', 'Agonist muscles', 'Anaerobic exercise', 'Antagonist muscle', 'Anterior chain', 'Back-cycling', 'Barbell', 'Basal metabolic rate', 'Bench press', 'Biceps', 'Bicep curls', 'Bleep test', 'Body fat percentage', 'Bodyweight exercises', 'Cardiovascular conditioning', 'Bridge', 'Bulking', 'Burpees', 'Calf muscles', 'Cardio', 'Chest fly', 'Chest press', 'Chin up', 'Circuit training', 'Core', 'Crunch', 'Deadlift', 'Deltoid muscles', 'Dumbbell', 'Endurance training', 'Exercise ball', 'Exercise wheel', 'Fat burn', 'Hamstrings', 'Insanity', 'Kegel exercises', 'Kettlebell', 'Lat pull downs'];

function init() {
    displayTerm(terms);
    setInterval(countingDown, 1000);
    setInterval(checkStatus, 40);
}

function displayTerm(terms) {
    const randomIndex = Math.floor(Math.random() * terms.length);
    gymTerms.innerHTML = terms[randomIndex];
}

function countingDown() {
    if(seconds> 0) {
        seconds--;
    } else if (seconds === 0) {
        gameLoading = false;
    }
    timer.innerHTML = seconds;
}

function checkStatus(){
    if(!gameLoading && seconds === 0) {
        feedbackMessage.innerHTML = 'End of play!';
    }
}



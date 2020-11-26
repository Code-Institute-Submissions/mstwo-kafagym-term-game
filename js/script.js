window.addEventListener('load', init);

let countingDown = 4;
let gameLoading;

const entryWord = document.querySelector('#entry-word');
const gymTerms = document.querySelector('#gym-terms');
const timer = document.querySelector('#counting-down');
const feedbackMessage = document.querySelector('#feedback');

const terms = ['Abs', 'Absolute Strength', 'Active rest', 'Adduct muscles', 'Aerobic exercise', 'Aerobics', 'Agonist muscles', 'Anaerobic exercise', 'Antagonist muscle', 'Anterior chain', 'Back-cycling', 'Barbell', 'Basal metabolic rate', 'Bench press', 'Biceps', 'Bicep curls', 'Bleep test', 'Body fat percentage', 'Bodyweight exercises', 'Cardiovascular conditioning', 'Bridge', 'Bulking', 'Burpees', 'Calf muscles', 'Cardio', 'Chest fly', 'Chest press', 'Chin up', 'Circuit training', 'Core', 'Crunch', 'Deadlift', 'Deltoid muscles', 'Dumbbell', 'Endurance training', 'Exercise ball', 'Exercise wheel', 'Fat burn', 'Hamstrings', 'Insanity', 'Kegel exercises', 'Kettlebell', 'Lat pull downs'];

function init() {
    displayTerm(terms);
}

function displayTerm(terms) {
    const randomIndex = Math.floor(Math.random() * terms.length);
    gymTerms.innerHTML = terms[randomIndex];
}


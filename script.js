$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let attackAP = 100;

// const attacks = [{
//     arcaneScepter: 
//     entangle:
//     dragonBlade:
//     starFire:

// }];



function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    // on click i need to activate on attack button
    // i need to update the #ap-meter .ap-text and the #hp-meter .hp-text
    // once those values are changed i need to render the DOM
    // 
    
    $('.arcane-sceptre').on('click', arcaneSceptreAttack);
    $('.entangle').on('click', entangleAttack);
    $('.dragon-blade').on('click', dragonBladeAttack);
    $('.star-fire').on('click', starFireAttack);



    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
function renderAttackNumbers() {
    $('.hp-text').html(fungusHP);
    $('.ap-text').html(attackAP);
}


// functions with attacks

function arcaneSceptreAttack() {
    attackAP -= 12;
    fungusHP -= 14;
    renderAttackNumbers();
    deadShroom();
    gloryToShroom();
}
function entangleAttack() {
    attackAP -= 23;
    fungusHP -= 9;
    renderAttackNumbers();
    deadShroom();
    gloryToShroom();
}

function dragonBladeAttack() {
    attackAP -= 38;
    fungusHP -= 47;
    renderAttackNumbers();
    deadShroom();
    gloryToShroom();
}
function starFireAttack() {
    attackAP -= 33;
    fungusHP -= 25;
    renderAttackNumbers();
    deadShroom();
    gloryToShroom();
}


//If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the `walk` 
//class with a `dead` class on the freaky-fungus element, to make them fall over and die.

function deadShroom() {
    if (fungusHP<0) {
        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('dead')
    }
}

//If you run out of AP, the monster wins and humanity is doomed 😢 
//Replace the `walk` class with a `jump` class on the freaky-fungus element, to make them jump for the glory of the fungal race.

function gloryToShroom() {
    if (attackAP<0) {
        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('jump')
    }
}
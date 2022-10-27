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

// function renderAttackBars() {
//     $('#hp-meter').html(fungusHP);
//     $('#ap-meter').html(attackAP);
// }

function arcaneSceptreAttack() {
    attackAP -= 12;
    fungusHP -= 14;
    renderAttackNumbers();
    deadShroom();
}
function entangleAttack() {
    attackAP -= 23;
    fungusHP -= 9;
    renderAttackNumbers();
    deadShroom();
}

function dragonBladeAttack() {
    attackAP -= 38;
    fungusHP -= 47;
    renderAttackNumbers();
    deadShroom();
}
function starFireAttack() {
    attackAP -= 33;
    fungusHP -= 25;
    renderAttackNumbers();
    deadShroom();
}


//If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the `walk` 
//class with a `dead` class on the freaky-fungus element, to make them fall over and die.

function deadShroom() {
    if (fungusHP<0) {
        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('dead')
    }
}
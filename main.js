var cardsArray = [
    { 'name': 'CSS', 'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true', },
    { 'name': 'HTML', 'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true', },
    { 'name': 'jQuery', 'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true', },
    { 'name': 'JS', 'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true', },
    { 'name': 'Node', 'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true', },
    { 'name': 'Photo Shop', 'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true', },
    { 'name': 'PHP', 'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true', },
    { 'name': 'Python', 'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true', },
    { 'name': 'Ruby', 'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true', },
    { 'name': 'Sass', 'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true', },
    { 'name': 'Sublime', 'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true', },
    { 'name': 'Wordpress', 'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true', },
];

//duplicate cardArray to mach for each card

var gameGrid = cardsArray.concat(cardsArray);

//randomize game grid on each load

gameGrid.sort(function () {
    return 0.5 - Math.random();
})





//grab the div with id game-board and assign to a variable game

var game = document.getElementById('game-board');


//create new section element and assign it to variable grid

var grid = document.createElement('section');

//give section grid a class name of grid also

grid.setAttribute('class', 'grid');

//append the grid section to te game board div

game.appendChild(grid);



//loop through each element in our cards array

for (i = 0; i < gameGrid.length; i++) {
    //create a div element and assign to variable card

    var card = document.createElement('div');


    // apply card class to that div

    card.classList.add('card');



    //set the data name attribute of the div to the cards array name
    card.dataset.name = gameGrid[i].name;



    // apply the background image of the div to card arrayimg

    card.style.backgroundImage = `url(${gameGrid[i].img})`;


    // append the div to grid section
    grid.appendChild(card);


};


//Set count to 0

var count = 0;



//add event listener to grid
grid.addEventListener('click', function (event) {
    // declare a variable to target our clicked item
    var clicked = event.target;

    //donot allow the grid it self to be selected
    // only divs to inside the grid

    if (clicked.nodeName === "SECTION") {
        return;
    }
    //we only want to add selected class if cureent count is less than 2
    if (count < 2) {
        count++
        //add selected class
        clicked.classList.add('selected');
    }


});





  //






  //










  //
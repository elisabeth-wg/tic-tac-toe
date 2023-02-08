// document.querySelector('button').addEventListener('click', getFetch)


// document.querySelector('ul').innerHTML = "";

  
// document.querySelector('ul').appendChild(li);



// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide() {
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }


//Leon said you could just use event listeners and a really long conditional. 
//Otherwise how to use objects to do it?
//Big object the game? Extend to player 1 and computer
//get something down the refactor




//Below is my current attemptes: the function isn't working....not sure why
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nice = document.querySelector('#nine')


document.querySelector('#one').addEventListener('click', playerSpaceOne)


function playerSpaceOne() {
    one.classList.toggle('hidden');
    document.querySelector('#one').innerHTML = <img src="imgticTacToePOnePOnebg.png"/>
}
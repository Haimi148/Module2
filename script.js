
// alert("This is alert");
// exit();


//Giveaway TIC TAC TOE game JS //

var empty = 0, you = 1, ai = -1
function runGame() {
  var field = []
  var table = document.getElementById("t")
  for (var Ycoords = 0; Ycoords < 3; Ycoords++) {
    var tr = document.createElement("tr")
    table.appendChild(tr)
    var row = []
    field.push(row)
    for (var Xcoords = 0; Xcoords < 3; Xcoords++) {
      var td = document.createElement("td")
      td.classList.add("cell")
      td.onclick = playerMove(field, Xcoords, Ycoords)
      tr.appendChild(td)
      row.push({value: empty, element: td})
    }
  }
}
function playerMove(field, x, y) {
return function() {
if (!move(field, x, y, you)) return
console.log("Player moved to x:", x, "y:", y); // Add this line to log the player's move to the console
if (wins(field, you)) {
gameOver('You won!')
disableClick(field)
} else if (aiMove(field)) {
gameOver('Computer won!')
disableClick(field)
} else if (!validMoves(field).length) {
gameOver('Draw!')
disableClick(field)
}
console.log(field); // Add this line to log the updated field to the console
  }
}

function disableClick(field) {
for (var Ycoords = 0; Ycoords < 3; Ycoords++) {
for (var Xcoords = 0; Xcoords < 3; Xcoords++) {
field[Ycoords][Xcoords].element.onclick = null;
}
}
}

function move(field, x, y, who) {
var Board_Cell = field[y][x]
if (Board_Cell.value != empty) return false
Board_Cell.value = who
Board_Cell.element.innerHTML = who == you ? 'X' : 'O'
console.log("Moved", who == you ? 'X' : 'O', "to x:", x, "y:", y); // Add this line to log the move to the console
return true
}
function gameOver(msg) {
var result = document.getElementById("gameResult");
result.textContent = msg;
var modal = new bootstrap.Modal(document.getElementById('gameOverModal'), {});
modal.show();

}

function wins(f, player) {
  function lineWins(x, y, dx, dy) {
    var Cell_Coords = f[y][x].value, b = f[y+dy][x+dx].value, c = f[y+2*dy][x+2*dx].value
    return Cell_Coords == b && b == c && Cell_Coords == player
  }
  for (var i = 0; i < 3; i++) {
    if (lineWins(0, i, 1, 0) || lineWins(i, 0, 0, 1)) return true
  }
  return lineWins(0, 0, 1, 1) || lineWins(2, 0, -1, 1)
  console.log("Game Over:"); // Add this line to log the player's move to the console

}
function validMoves(field) {
  var moves = []
  for (var Ycoords = 0; Ycoords < 3; Ycoords++) {
    for (var Xcoords = 0; Xcoords < 3; Xcoords++) {
      field[Ycoords][Xcoords].value == empty && moves.push({x:Xcoords, y:Ycoords})
    }
  }
  return moves;
}
function findRandomMove(field) {
  var moves = validMoves(field)
  if (moves.length == 0) return null
  return moves[Math.floor(Math.random()*moves.length)]
}
function findBestMove(field, player) {
  if (wins(field, player)) return {score: player}
  if (wins(field, -player)) return {score: -player}
  var moves = validMoves(field)
  if (moves.length == 0) return {score:0}
  var res = []
  for (var i = 0; i < moves.length; i++) {
    var m = moves[i]
    var e = field[m.y][m.x]
    e.value = player
    var Moves = findBestMove(field, -player)
    Moves.move = m
    res.push(Moves)
    e.value = empty
  }
  res.sort(function(a, b) { return (b.score-a.score)*player })
  return res[0]
}
function aiMove(field) {
    var m = findRandomMove(field)
  var m = findBestMove(field, ai).move
  if (!m) {
    gameOver("Draw!")
    return
  }
  move(field, m.x, m.y, ai)
  wins(field, ai) && gameOver("Computer won!")
}
runGame()

document.getElementById("gameOverModal").addEventListener("click", function() {
location.reload();
});


// // Gallery JS//

// const container = document.querySelector('#container');

// function generateShoe() {
//   const img = new Image();
//   img.src = `https://source.unsplash.com/200x200/?shoes&_=${Math.random()}`;
//   img.classList.add('shoe');
//   container.appendChild(img);
// }

// // generate initial set of shoes
// for (let i = 0; i < 20; i++) {
//   generateShoe();
// }

// // generate more shoes as user scrolls
// window.addEventListener('scroll', () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     for (let i = 0; i < 10; i++) {
//       generateShoe();
//     }
//   }
// });


// //

// BUY BUTTON
// Get a reference to the Buy Button
var buyButton = document.getElementById('buyButton');

// Add a click event listener to the Buy Button
buyButton.addEventListener('click', function() {
  // Get the item name and price from wherever they are stored
  var itemName = 'Your Item Name';
  var itemPrice = 9.99;

  // Update the popup checkout page with the item name and price
  var itemNameSpan = document.getElementById('itemName');
  var itemPriceSpan = document.getElementById('itemPrice');
  itemNameSpan.innerHTML = itemName;
  itemPriceSpan.innerHTML = itemPrice.toFixed(2);

  // Display the popup with the item name and price
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
});

// Get a reference to the Close Button
var closeButton = document.getElementById('closeButton');

// Add a click event listener to the Close Button
closeButton.addEventListener('click', function() {
  // Hide the popup checkout page
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
});

let message = "Welcome to STEPWISE SHOES, affordable shoes that can't be found anywhere else. Our mission is quality over quantity.";

if (!(message.includes("Nike") && message.includes("Adidas")) || message.includes("STEPWISE")) {
  console.log("We have unique shoes!");
} else {
  console.log("We don't have any unique shoes :(");
}

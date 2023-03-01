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
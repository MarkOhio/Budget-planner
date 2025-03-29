   
 // Select the background container
 const background = document.querySelector('.background');

 // Function to generate a random number within a range
 const random = (min, max) => Math.random() * (max - min) + min;
 
 // Function to create a single "X" or "O"
 const createXO = () => {
   const xo = document.createElement('div');
   xo.classList.add('xo');
   xo.textContent = Math.random() > 0.5 ? '$' : 'N'; // Randomly choose "X" or "O"
 
   // Random position
   xo.style.left = `${random(0, 100)}vw`;
   xo.style.top = `${random(0, 100)}vh`;
 
   // Random animation direction
   xo.style.setProperty('--random-x', random(-1, 1));
   xo.style.setProperty('--random-y', random(-1, 1));
 
   // Random size
   xo.style.fontSize = `${random(10, 50)}px`;
 
   background.appendChild(xo);
 
   // Remove the element after animation ends
   setTimeout(() => {
     xo.remove();
   }, 5000); // Matches the animation duration
 };
 
 // Generate multiple "X" and "O" elements
 const generateXOs = () => {
   for (let i = 0; i < 100; i++) {
     createXO();
   }
 };
 
 // Continuously generate new "X" and "O" elements
 setInterval(() => {
   createXO();
 }, 100);
 
 // Initial batch of "X" and "O" elements
 generateXOs();
 
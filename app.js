const container = document.getElementById('container');




//Main view 
// Create h1 
const greeting = document.createElement('h1');
greeting.textContent = 'Hi, I am Data';


// Create img 
const image = document.createElement('img');
image.alt = 'Data avatar';
image.src ='#';

//Create 2 buttons
const appearancesBtn = document.createElement('button');
appearancesBtn.textContent =' Appearances';

const bioBtn = document.createElement('button');
bioBtn.textContent = 'Biography';
// append to main container 

container.appendChild(greeting);
container.appendChild(image);
container.appendChild(appearancesBtn);
container.appendChild(bioBtn);

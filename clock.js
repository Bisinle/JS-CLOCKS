// const clock = document.querySelector('.clock');
// const numbers = document.querySelectorAll('.number');

// const clockRadius = clock.offsetWidth / 2;
// const numberSpacing = 30; // Adjust this value to change the spacing between numbers

// numbers.forEach((number, index) => {
//   const angle = (index * 30 - 90) * Math.PI / 180;
//   const numberX = clockRadius + clockRadius * Math.cos(angle) - number.offsetWidth /2 ;
//   const numberY = clockRadius + clockRadius * Math.sin(angle) - number.offsetHeight / 2;
//   number.style.left = `${numberX}px`;
//   number.style.top = `${numberY}px`;
// });


const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  
  console.log("hours : " + hours); 
  console.log("mins : " + mins);
  console.log("seconds : " + seconds);
  
  const secondsDegree  = seconds * ( 360 / 60 ) + 90;
  const minsDegree = mins * ( 360 / 60 ) + 90;
  const hoursDegree = hours * ( 360 / 12 ) + 90;;
  
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  hoursHand.style.transform  = `rotate(${hoursDegree}deg)`;
  
  
};



setInterval(setDate, 1000);
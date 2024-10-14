const numhour = document.querySelector(".num-hours");
const numElement = [];

for (let i = 1; i <= 12; i++) {
  numElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}
numElements = numElement.join("");

numhour.insertAdjacentHTML("afterbegin", numElements);

sec = document.getElementById("sec");
let secElement = [];

for (let i = 1; i <= 60; i++) {
  secElement.push(`<span style="--inde:${i}"><p></p></span>`);
}

secs = secElement.join("");

sec.insertAdjacentHTML("afterbegin", secs);

const getDateTime = () => {
  let localTime = new Date();
  let hour = localTime.getHours();
  let minutes = localTime.getMinutes();
  let sec = localTime.getSeconds();
  console.log(localTime);
  
  hourn.style.rotate = `${hour*30+minutes/2}deg`
  minn.style.rotate = `${minutes*6}deg`;
  secn.style.rotate = `${sec * 6}deg`;
  
  
};

getDateTime();
setInterval(getDateTime, 1000);


const getDateTimes = () => {
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let localTime = new Date();
  console.log(localTime);
  
  let hour = localTime.getHours();
  let minutes = localTime.getMinutes();
  let x=localTime.getDay();

  let y = weekday[x];
 

  digital.innerHTML = `${hour}:${minutes}`
  days.innerHTML = y


}

getDateTimes()
getDateTime();
setInterval(getDateTimes());




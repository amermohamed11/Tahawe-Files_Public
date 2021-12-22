const date = new Date();

const monthDayes = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const fristDayIndex = date.getDay();
const lastDayIndex = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDay();

const nextDay = 7 - lastDayIndex - 1;

console.log(lastDay);

const months = [
  "January",
  "February",
  "March",
  "April",
  "Mey",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector(".date h1").innerHTML = months[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";

for (let x = fristDayIndex; x > 0; x--) {
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
}

for (let i = 1; i <= lastDay; i++) {
  days += `<div>${i}</div>`;
  monthDayes.innerHTML = days;
}

for (let j = 1; j <= nextDay; j++) {
  days += `<div class="next-date">${j}</div>
    `;
  monthDayes.innerHTML = days;
}

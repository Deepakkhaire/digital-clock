let cl = console.log;

let txt = "<h1>Current Date  :-</h1>";
let txt1 = "<h1>Current Day  :-</h1>";
let txt2 = "<h1>Current Time  :-</h1>";

let months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function digitalclock(){
    const digClock = document.getElementById("digitalClock");

    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM";
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDay();
    if(hr > 12){
        hr = hr - 12;
        session = "PM";
    }
    let result = `${txt} &nbsp;${ setZero(date)}-${(months[month])}-${setZero(year)} `;
    result += `${txt1} &nbsp;&nbsp;${(days[day])}`;
    result += "<br>"; 
    result += `${txt2} &nbsp;${ setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${setZero(session)}`;
    
    digClock.innerHTML = result;
    setTimeout(digitalclock,1000);
   
}
digitalclock();

function setZero(num){
    return (num < 10) ? "0" + num : num;
}

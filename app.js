const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
const months = ["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

function setTime() {
    let date = new Date();

    document.getElementById('timestamp').innerText = date;
    
    setInterval(setTime,1000);

}

setTime();

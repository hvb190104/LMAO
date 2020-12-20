function showtime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    let time = hour + ":" + minute + ":" + second;
    document.getElementById("stillclock").innerText = time;


    setTimeout(showtime, 1000)
}
showtime()
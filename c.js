confirmButton.onclick = () => {
    windowTime.close();
let timeSelected = 100;
    let countTimer = setInterval(function () {
        let seconds = timeSelected * 60 % 60
        let minutes = timeSelected % 60
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        if (timeSelected <= 0) {
            clearInterval(countTimer);
        } else {
            // document.querySelector('.first__timer').innerHTML = strTimer
            console.log(strTimer);
            timeSelected = timeSelected -1 ;
        }
    }, 100)
}
function clock(){
    let date = new Date()
           year = date.getFullYear()
           month = date.getMonth(2)
           dates = date.getDate()
           hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
           minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
           seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = year + "-" + month + "-" + dates + " - " + hours + ':' + minutes + ':' + seconds;
  }
  setInterval(clock, 1000);
  clock();



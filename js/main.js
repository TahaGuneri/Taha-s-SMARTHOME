var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.response);
      console.log(data);
      document.getElementById("temp").innerHTML = data.main.temp+"°C";
    }
  };
  xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Bishkek&units=metric&appid=5c1c46c31e457fda3c20415dff314051");
  xhttp.send();


  var conn = new XMLHttpRequest();
  
  conn.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.response);
      console.log(data.results[0].measurements);
      document.getElementById("air_quality").innerHTML = data.results[0].measurements[0].value + " " + data.results[0].measurements[0].unit;
  }
  };
  
  conn.open("GET","https://api.openaq.org/v1/latest?location=Bishkek");
  conn.send();


  var anime = new XMLHttpRequest();
  
  anime.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.response);
      console.log(data.top[0].title);
      document.getElementById("anime1").innerHTML = "1. "+data.top[0].title;
      document.getElementById("anime2").innerHTML = "2. "+data.top[1].title;
      document.getElementById("anime3").innerHTML = "3. "+data.top[2].title;
  }
  };
  
  anime.open("GET","https://api.jikan.moe/v3/top/anime/1/bypopularity");
  anime.send();


  var curr = new XMLHttpRequest();
  
  curr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.response);
      console.log(data.rates.TRY);
      document.getElementById("currency").innerHTML = data.rates.TRY.toFixed(2);

  }
  };
  
  curr.open("GET","https://api.exchangeratesapi.io/latest?base=USD");
  curr.send();


  
  if (localStorage.user){
    document.getElementById("this_user").innerHTML = "Hello, " + localStorage.user + " !";
  };

  function userFunction(){
    var name = document.getElementById("username").value;
    if (name!=null){
      localStorage.user = name;
    }
  };
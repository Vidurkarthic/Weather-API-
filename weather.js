function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='0248a410fddd45f3edff64eef4a9ee1d';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then(data=>{
        var t=data['main']['temp']
        document.getElementById("output").innerHTML=t;
        var s=data['main']['pressure']
        document.getElementById("v").innerHTML=s;
        var h=data['main']['humidity']
        document.getElementById("s").innerHTML=h;
        console.log(t,h,s);
    })
}
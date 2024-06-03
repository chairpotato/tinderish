
function getData(){
  const apiUrl = 'https://randomuser.me/api/';

  fetch(apiUrl)
    .then(response => {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      let name = data.results[0].name.first + " " + data.results[0].name.last; 
      document.getElementById("name").innerHTML = name;
      document.getElementById("face").src = data.results[0].picture.large;
      let location = data.results[0].location.street.number + " " + data.results[0].location.street.name + " " + data.results[0].location.country; 
      document.getElementById("loco").innerHTML = location; 
      let latlong = "Latitude: " + data.results[0].location.coordinates.latitude + " Longitude: " + data.results[0].location.coordinates.longitude; 
      document.getElementById("coord").innerHTML = latlong; 
    })
    .catch(error => {
      console.error('Error',error);
    })
}

function swipe(){
  getData();
  //getFace();
}

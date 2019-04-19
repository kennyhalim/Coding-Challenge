$(document).ready(function() {
  $('#furniture').click(function() {

    let request = new XMLHttpRequest();
    const url = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      response.body.data.forEach(function(dat){
        $("#result").append('<li>' + dat.name + '</li>');
      });
    }
  });
});
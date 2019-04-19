$(document).ready(function() {
  $('#furniture').click(function() {

    let request = new XMLHttpRequest();
    const url = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`;
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $("#output").empty();
      $(".intro").hide();
      $(".result").show();
      response.body.data.forEach(function(dat){
        $("#output").append('<div class="col-md-6"><h2>' + dat.name + '</h2> <img src="' + dat.imageUrl + '"/> <p>' + dat.description +'</p> <p> Stock: ' + dat.stock + '</p> <p>Price: <strong>$' + dat.cost + '</strong></p></div>');
      });
    }
  });

  $('#searchBtn').click(function(){
    let request = new XMLHttpRequest();
    let searchInput = $('#search').val();
    console.log(searchInput);
    const url = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`;
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
     $("#output").empty()
      response.body.data.forEach(function(dat){
        if(dat.name.toLowerCase().includes(searchInput.toLowerCase())){
          $("#output").append('<div class="col-md-6"><h2>' + dat.name + '</h2> <img src="' + dat.imageUrl + '"/> <p>' + dat.description +'</p> <p> Stock: ' + dat.stock + '</p> <p>Price: <strong>$' + dat.cost + '</strong></p></div>');
        }    
      });
    }
  });

  $('#filter').change(function() {
    let request = new XMLHttpRequest();
    let filterValue = $("#filter").val();
    console.log(filterValue);
    const url = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`;
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $("#output").empty();
      response.body.data.forEach(function(dat){
        if(filterValue === "none"){
          $("#output").append('<div class="col-md-6"><h2>' + dat.name + '</h2> <img src="' + dat.imageUrl + '"/> <p>' + dat.description +'</p> <p> Stock: ' + dat.stock + '</p> <p>Price: <strong>$' + dat.cost + '</strong></p></div>');
        } else if(parseInt(dat.cost) <= parseInt(filterValue)){
          $("#output").append('<div class="col-md-6"><h2>' + dat.name + '</h2> <img src="' + dat.imageUrl + '"/> <p>' + dat.description +'</p> <p> Stock: ' + dat.stock + '</p> <p>Price: <strong>$' + dat.cost + '</strong></p></div>');
        }      
      });
    }
  });

  $("#header").click(function(){
    location.reload();
  });
});
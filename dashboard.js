

/* globals Chart:false, feather:false */



var chart = function () {
 
  //my own code starts
 
  fetch("./crimes.geojson")
  .then(response =>  response.json())
  .then(data => {
    var features = data.features
  
  
    var crime_type = features.map(function (feat){
       return feat["properties"]["Crime type"]
    } );

    
    
    var result = { };
    for(var i = 0; i < crime_type.length; ++i) {
        if(!result[crime_type[i]])
            result[crime_type[i]] = 0;
        ++result[crime_type[i]];
    }

    
    
    var categories = Object.keys(result)
    var counts = Object.values(result)
    var barColors = ["red", "green","blue","orange","brown"];

    // feather.replace({ 'aria-hidden': 'true' })
    // var ctx = document.getElementById('myChart').getContext('2d')
    var mychart = new Chart("myChart", {
      type: "bar",
  data: {
    labels:categories,
    datasets:[{
      backgroundColor:[...barColors, ...barColors, ...barColors],
      data:counts
    }]

  },
  options: {
    legend:{display:true},
    title:{
      display:true,
      text: "Crimes in Surrey"
    }
  }
    });
    console.log(mychart)
  });


};

chart()


  //my own code ends

//   feather.replace({ 'aria-hidden': 'true' })

//   // Graphs
//   var ctx = document.getElementById('myChart')
//   // eslint-disable-next-line no-unused-vars
//   var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: categories,
//       datasets: [{
//         data: counts,
//         lineTension: 0,
//         backgroundColor: 'transparent',
//         borderColor: '#007bff',
//         borderWidth: 4,
//         pointBackgroundColor: '#007bff'
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: false
//           }
//         }]
//       },
//       legend: {
//         display: false
//       }
//     }
//   })
// })()
// 
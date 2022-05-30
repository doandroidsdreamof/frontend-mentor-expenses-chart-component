const ctx = document.getElementById('myChart').getContext('2d');
const cyanCurrent = 'hsl(186, 34%, 60%)';
const datas = [
    {
      day: "date",
      amount: 17.45,
    },
    {
      day: "date",
      amount: 34.91,
    },
    {
      day: "date",
      amount: 52.36,
    },
    {
      day: "date",
      amount: 31.07,
    },
    {
      day: "date",
      amount: 23.39,
    },
    {
      day: "date",
      amount: 43.28,
    },
    {
      day: "date",
      amount: 25.48,
    },
  ];
  const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat','san'];

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: "",
            borderRadius: 3,
            data: [datas[0].amount,datas[1].amount,datas[2].amount,datas[3].amount,datas[4].amount,datas[5].amount,datas[6].amount],
            backgroundColor: [ 
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',  
                'hsl(10, 79%, 65%)',            
                'hsl(10, 79%, 65%)', 
                'hsl(10, 79%, 65%)', 
                'hsl(10, 79%, 65%)', 
                'hsl(10, 79%, 65%)'
                                   
            ],
           
            borderColor: [
                'hsl(186, 34%, 60%)',
              
            ],
          
            borderWidth: 0
        }],
    
    
    },
    options: {   
        plugins: { legend: { display: false, }, },
      tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scales: {
          x: {
            grid: {
              display: false,
            
            },
            ticks:{
                font:{
                    family: 'Rubik,sans-serif',
                }
            },
          
          },
          y:{
            ticks:{
                display: false,
            },
              grid:{
                  display: false,
                  drawBorder: false,
              },
            
          },
        
        },
     
     
      },
     
      
 
 
});

Chart.defaults.plugins.tooltip.displayColors = false;
Chart.defaults.plugins.tooltip.cornerRaduis = 5;


const App = {

    Init()
    {
        let myChart = document.getElementById('myChart').getContext('2d');

        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#7B061A';

        let massPopChart = new Chart(myChart, {
            type: 'polarArea', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data:{
                labels:['Porto Alegre','Caxias do Sul','Canoas','Pelotas','Santa Maria','Gravataí'],
                datasets:[{
                    label:'População',
                    data:[
                        1483771,
                        515213,
                        350022,
                        342405,
                        282660,
                        281519
                    ],
                    backgroundColor:[
                        'rgba(197,113,188, 0.6)',
                        'rgba(150,200,162, 0.6)',
                        'rgba(130,27,138, 0.6)',
                        'rgba(229,125,56, 0.6)',
                        'rgba(0,123,184, 0.6)',
                        'rgba(19,136,8, 0.6)'
                    ],
                    // borderWidth: 1,
                    // borderColor: 'rgba(130,27,138, 0.6)',
                    hoverBorderWidth: 2,
                    hoverBorderColor: 'rgba(130,27,138, 0.6)'
                }]                
            },
            options:{
                title:{
                    display:true,
                    text:'Crescimento da População no RS | 2019',
                    fontSize: 25
                },
                legend:{
                    // display:false,
                    position:'right',
                    labels:{
                        fontColor:'#990000'
                    }
                },
                layout:{
                    padding:{
                        left:50,
                        right:0,
                        bottom:0,
                        top:0
                    }
                },
                tooltips:{
                    enabled:true
                }
            }
        })
    }
}

App.Init()
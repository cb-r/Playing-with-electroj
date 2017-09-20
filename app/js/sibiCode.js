

$(function () {

    var donutData =  [2478,5267,734,784,433];

    //code for charts
    function drawDonut(){
        
        //var donutEl = document.getElementById("donut").getContext("2d");
        
        new Chart($("#donut"), {
            type: 'doughnut',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: donutData
                  }
                ]
              },
              options: {
                title: {
                  display: false
                },
                legend:{
                    display:false
                }
              }
        });
        new Chart(document.getElementById("bar-chart1"), {
            type: 'bar',
            data: {
              labels: ["Africa", "Asia", "Europe", "Latin America"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
                  data: [4,6,5,1]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: false,
                
              },
              scales: {
                xAxes: [ { display: false  } ], 
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            }
           
            }
        });
        new Chart(document.getElementById("bar-chart2"), {
            type: 'bar',
            data: {
              labels: ["Africa", "Asia", "Europe", "Latin America"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
                  data: [4,6,5,1]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: false,
                
              },
              scales: {
                xAxes: [ { display: false  } ], 
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            }
           
            }
        });
        new Chart(document.getElementById("bar-chart3"), {
            type: 'bar',
            data: {
              labels: ["Africa", "Asia", "Europe", "Latin America"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
                  data: [4,6,5,1]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: false,
                
              },
              scales: {
                xAxes: [ { display: false  } ], 
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            }
           
            }
        });
        // new Chart($("#bar-chart"), {
        //     type: 'bar',
        //     data: {
        //       labels: ["Sucessful", "Failed", "Monitoring"],
        //       datasets: [
        //         {
        //           label: "Test results",
        //           backgroundColor: ["#8e5ea2","#3cba9f","#e8c3b9"],
        //           data: [2,2,5]
        //         }
        //       ]
        //     },
        //     options: {
        //       legend: { display: false },
        //       title: {
        //         display:false, 
        //       },
        //       scales : {
        //         xAxes: [ { display: false  } ], 
        //         yAxes: [ { display: true  } ]
                
        //       }

        //     }
        // });
        // var data = {
        //     datasets: [{
        //         data: [10, 20, 30]
        //     }],
        
        //     // These labels appear in the legend and in the tooltips when hovering different arcs
        //     labels: [
        //         'Red',
        //         'Yellow',
        //         'Blue'
        //     ]
        // };
        // var options = {
        //     options: {
               
        //       }
        // }
        // var myDoughnutChart = new Chart(donutEl, {
        //     type: 'doughnut',
        //     data: data,
        //     options: options
        // });
        }
    drawDonut();


    $('#alarmTestPage').hide();



    $('#alarmNavElement').on('click', alarmClicked);
    function alarmClicked() {
        alert("hel");
      
    }

    $('#settingsMenu').on('click', settingsClicked);
    function settingsClicked() {
        $('#settingsMenu').addClass("active");
        $('#alarmNavElement').removeClass("active");
        $('#alarmTestPage').hide();
        $('#settingsMain').show();
    }

    $('#beginTest').on('click', beginTest);
    function beginTest() {
        $('#settingsMenu').removeClass("active");
        $('#alarmNavElement').addClass("active");
        insertNavElements();
        // createStopTest();
        hideSettings();
        showTests();
    }

    function showTests() {
        $('#alarmTestPage').show();
    }

    function hideSettings() {
        $('#settingsMain').hide();
    }

    // function createStopTest(){
    //     var isButtonThere = $('#testStopButton').length;
    //     if (isButtonThere===0){
    //         const htmlStr = '<div class="nav-item" id="testStopButton">\
    //         <button class="btn btn-danger" type="button">\
    //           <i class="fa fa-stop"></i>\
    //         </button>\
    //        </div>';
    //       var $sideNavBar = $("#topNavBar");
    //         var html = $.parseHTML(htmlStr);
    //        $sideNavBar.prepend(html);

    //     }


    // }


    function alarmNavElement() {
        var $navBar = $("#navBar");

        const str = '<li class="nav-item createdSideNavElement" >\
                        <a class="nav-link active" href="#" id="alarmNavElement" >\
                        <i class="fa fa-refresh fa-spin fa-1x fa-fw redSpinner" aria-hidden="true"></i>\
                        <i class="fa fa-fw fa-bell"></i>&nbsp;Alarm\
                      <span class="sr-only">(current)</span>\
                      </a>\
                      <button class="btn btn-danger" type="button">\
                      <i class="fa fa-stop"></i>\
                    </button>\
                    </li>';
        var html = $.parseHTML(str);
        $navBar.append(html);
    }

    function insertNavElements() {
        var alarmValue = $('#alarmCheckbox').is(':checked');
        if (alarmValue) {
            var isAlarmThere = $('#alarmNavElement').length;
            if (isAlarmThere === 0) {
                alarmNavElement();
            }

        }
    }



});


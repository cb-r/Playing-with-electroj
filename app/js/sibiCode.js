

$(function () {

    $('#testCollapse').hide();



    $('#alarmNavElement').on('click', alarmClicked);
    function alarmClicked() {
        alert("hel");
      
    }

    $('#settingsMenu').on('click', settingsClicked);
    function settingsClicked() {
        $('#settingsMenu').addClass("active");
        $('#alarmNavElement').removeClass("active");
        $('#testCollapse').hide();
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
        $('#testCollapse').show();
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


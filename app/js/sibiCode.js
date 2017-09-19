

$(function () {

   
    $('#beginTest').on('click', beginTest);
    function beginTest(){

        insertNavElements();
        createStopTest();
    
    }

    function createStopTest(){
        var htmlStr = '<li class="nav-item">\
        <form class="form-inline my-2 my-lg-0 mr-lg-2">\
          <div class="input-group">\
            <span class="input-group-btn">\
              <button class="btn btn-danger" type="button">\
                <i class="fa fa-stop"></i>\
              </button>\
            </span>\
          </div>\
        </form>\
      </li>';
      var $sideNavBar = $("#sideNavBar");
      html = $.parseHTML(htmlStr);
      $sideNavBar.prepend(html);
      
    }


    function alarmNavElement() {
        var $navBar = $("#navBar");
        const str = '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Alarm" id="alarmNavElement">\
                        <a class="nav-link" href="app.html">\
                        <i class="fa fa-refresh fa-spin fa-1x fa-fw redSpinner" aria-hidden="true"></i>\
                        <i class="fa fa-fw fa-bell"></i>\
                        <span class="d-lg-none">Alerts\
                      </span>\
                            <span class="nav-link-text">\
                            Alarm</span>\
                        </a>\
                    </li>\
                ';
        html = $.parseHTML(str),
        $navBar.append(html);    
    }

    function insertNavElements(){
        var alarmValue = $('#alarmCheckbox').is(':checked');
        if(alarmValue){
            var isAlarmThere = $('#alarmNavElement').length;
            if (isAlarmThere===0){
                alarmNavElement();      
            } 
            
        }
   }


   
});


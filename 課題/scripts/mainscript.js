"use strict";

//smallnav-btn toggle
$(".smallnav-btn").click(function() {
    $(this).toggleClass('active');
    $(".smallnav").toggleClass('panelactive');
    $(".smallnav").toggleClass('filter-bokasi');
})
$("#smallnav a").click(function () {
    $(".smallnav-btn").removeClass('active');
    $(".smallnav").removeClass('panelactive');
    $(".smallnav").removeClass('filter-bokasi');
})

//smallnav
const snavswich = (dataname,parentname) => {
    var pa_level = $("#"+parentname).data('snavlevel');
    console.log("swiched:",dataname," parent: ",parentname," level:"+pa_level);
    if(pa_level == 1) {
        $("#"+parentname).removeClass('snav-show');
        $("#snav-"+dataname).addClass('snav-show');
        $(".back-snav").addClass('snabtnactive');
    }
    else if(pa_level == 2) {
        if(dataname == "end") {
            $("#"+parentname).removeClass('snav-show');
            $(".back-snav").removeClass('active');
            $(".back-snav").removeClass('snabtnactive');
            $("#snav-index").addClass('snav-show');
        }
        else {
            $("#"+parentname).removeClass('snav-show');
            $("#"+parentname).addClass('snav-selected');
            $("#snav-"+dataname).addClass('snav-show');
        }
    }
    else if(pa_level == 3) {
        $("#"+parentname).removeClass('snav-show');
        $(".back-snav").removeClass('active');
        $(".back-snav").removeClass('snabtnactive');
        $("#snav-index").addClass('snav-show');
    }
    else {console.log("error::pa_level out of lange:",pa_level);}
}
$(".snav-list li").click(function() {
    var list_data = $(this).data('snavselector');
    var parent_id = $(this).data('snavparentid');
    console.log("dataName:",list_data," parentName:",parent_id);
    snavswich(list_data,parent_id);
})

const snavbackswich = (deleteshow,delevel) => {
    if(delevel == 2) {
        $("#"+deleteshow).removeClass('snav-show');
        $(".back-snav").removeClass('snabtnactive');
        $("#snav-index").addClass('snav-show');
    }
    else if(delevel = 3) {
        var selectedelement = document.querySelector('.snav-selected');
        var backlist_data = selectedelement.id;
        $("#"+deleteshow).removeClass('snav-show');
        $("#"+backlist_data).removeClass('snav-selected');
        $("#"+backlist_data).addClass('snav-show');
    }
    else {console.log("error::de_level out of lange")}
}
$(".back-snav").click(function() {
    var showelement = document.querySelector('.snav-show');
    var deshow_id = showelement.id;
    var de_level = $("#"+deshow_id).data('snavlevel');
    console.log("show:",deshow_id,"level",de_level);
    snavbackswich(deshow_id,de_level);
})
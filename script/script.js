var year = document.querySelector("#year");
var month = document.querySelector("#month");
var day = document.querySelector("#day");
var resBtn = document.querySelector("button");
var res = document.querySelector("#gapResult");

function result() {
    var now = new Date();
    var nowDate = now.getTime();

    var gap = new Date(year.value,(month.value-1),day.value);
    var gapDate = gap.getTime();

    var Dday = nowDate - gapDate;
    var DdayCal = Math.ceil(Dday / (24*60*60*1000));
}

resBtn.addEventListener('click',result);

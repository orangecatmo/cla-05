$(document).ready(setInterval(function() {
    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var h = myDate.getHours(); //获取当前小时数(0-23)
    var m = myDate.getMinutes(); //获取当前分钟数(0-59)
    var s = myDate.getSeconds(); //获取当前秒
    var week = myDate.getDay();
    var weeks = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    console.log(year, mon, date, weeks[week])
        // $("#demo").html("Thu Apr" + " " + date + " " + year);
    $("#demo").html("Thu Apr" + " " + date + " " + year);

    if (h >= 12) {
        $("#dd").html('PM' + ' ' + h + ":" + addZero(m) + ":" + addZero(s));
    } else {
        $("#dd").html('AM' + ' ' + h + ":" + addZero(m) + ":" + addZero(s));
    }
    $("#dd2").html(weeks[week]);

}, 1000))

function addZero(m) {
    return m < 10 ? ('0' + m) : m;
}
$(function() {

    var arr = ['あなたはこの世界で一番無二です', '好きなことができるたけていい', '絶望している暇あったら、うまいもの食べて寝るかな', '落胆するな'];
    var item = arr[Math.floor(Math.random() * arr.length)];
    $('.list_p').html(item);


})
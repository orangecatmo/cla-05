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

    ""

    var arr = [
        {
            auspicious: "小吉",
            sign: "あなたはこの世界で一番無二です"
        },{
            auspicious: "大吉",
            sign: "好きなことができるたけていい"
        },{
            auspicious: "中吉",
            sign: "絶望している暇あったら、うまいもの食べて寝るかな"
        },{
            auspicious: "小吉",
            sign: "明るく生きていこうって、そう決めてた人のような気がするんだ"
        },{
            auspicious: "大吉",
            sign: "そのまんまでいいんです"
        },{
            auspicious: "末吉",
            sign: "先のこと考えてたら、何もできないですよ"
        },{
            auspicious: "大吉",
            sign: "人が頑張ったのって、頑張って生きたのって、目に見えないかもしれないけど、心に残るんだと思います。"
        },{
            auspicious: "中吉",
            sign: "人生には、三つ坂があるんですって、上り坂、下り坂、まさか。"
        },{
            auspicious: "小吉",
            sign: "何をするかじゃなくて誰とするかだと思うけどな"
        },{
            auspicious: "大吉",
            sign: "どんなに幸せそうに見えても 、見えないところで みんな悩んでる"
        },{
            auspicious: "小吉",
            sign: "持ち物 あなたの笑顔"
        },{
            auspicious: "末吉",
            sign: "考えるという行為は、人間に与えられた最大の楽しみだ"
        },{
            auspicious: "大吉",
            sign: "人生短いだからね、好きなことしなさい"
        },{
            auspicious: "中吉",
            sign: "頑張りましょう、次から次に、手に入れたいものが増えてくるんですから"
        },{
            auspicious: "大吉",
            sign: "数学はいいわよ、迷いながらも、答えはひとつしかない"
        },{
            auspicious: "小吉",
            sign: "ずっと それ信じてやってきたわけじゃん"
        },{
            auspicious: "中吉",
            sign: "大事なものが後から遅れてくることもあるのよ。愛情だって生活だって"
        },{
            auspicious: "末吉",
            sign: "落胆するな"
        },{
            auspicious: "小吉",
            sign: "落胆するな"
            
        }];
        

    
	let omikuji = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];


    //动画
    $('.mian_back').click(function() {
        var item = arr[Math.floor(Math.random() * arr.length)];
        $(this).animate({ opacity: 0 }, 1000, function() {
            $('.mian_back').css('background-image', "none");
            $('.arrow').html(item.sign)
            $('.list_p').html(item.auspicious).css({"color": "#e9c000","fontSize":"2rem"})
            $('.mian_back').animate({ opacity: 1 }, 1000);
            
        });
        $('.main_list').css("backgroundColor", "#00629F");


    })

})
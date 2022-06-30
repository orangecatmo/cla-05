
// DATE ////////////////////////
var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();

// AOS /////////////
AOS.init({
    easing: 'ease',
    duration: 1000,
    offset: 200,
    once: true,
});


// MAP INIT //////////
function initMap() {
    createMap(); //创建地图
    setMapEvent(); //设置地图事件
    addMapControl(); //向地图添加控件
    addMapOverlay(); //向地图添加覆盖物
}

function createMap() {
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(130.4447392909592, 33.67062690540013), 25);
}

function setMapEvent() {
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}

function addClickHandler(target, window) {
    target.addEventListener("click", function () {
        target.openInfoWindow(window);
    });
}

function addMapOverlay() { }
//向地图添加控件
function addMapControl() {
    var scaleControl = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
    });
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: true
    });
    map.addControl(overviewControl);
}
var map;
initMap();


// mobile menu 
var menu_btn = document.querySelector('#menu_btn')
var mobile_menu = document.querySelector('#mobile_menu')
var mobile_mask = document.querySelector('#mobile_mask')

menu_btn.addEventListener('click', function(e) {
    e.preventDefault()
    mobile_menu.classList.remove('hide')
    mobile_menu.classList.add('show')
})

mobile_mask.addEventListener('click', function(e) {
    e.preventDefault()
    mobile_menu.classList.remove('show')
    mobile_menu.classList.add('hide')
})

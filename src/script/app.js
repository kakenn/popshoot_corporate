$(function () {
  /*
    スムーズスクロール
  */
  $("a").click(function () {
    if($(this).attr("href").match(/^#/) && $(this).attr("href") != "#"){
      let href = $(this).attr("href"),
        target = $(href === "#" || href === "" ? "html" : href);
      target.velocity("scroll", {offset: -50, duration: 500, easing: "ease" });
      $("#spMenu").removeClass("on");
      $(".menu-trigger").removeClass("active");
      return false;
    }
  });

  /*
    スクロール関係
  */
  let headerNav = document.querySelector("#mainHeader nav");
  let visionH3 = $("#vision h3").offset().top;
  $(window).scroll(() => {
    if(window.scrollY <= 0){
      headerNav.classList.add("top");
    }else{
      headerNav.classList.remove("top");
    }
    if(window.scrollY > visionH3 - window.innerHeight + 200){
      $("#vision h3").addClass("on");
    }else{
      $("#vision h3").removeClass("on");
    }
  });

  $(".menu-trigger").on("click", ()=>{
    $(".menu-trigger").toggleClass("active");
    $("#spMenu").toggleClass("on");
    $(".liAnime").removeClass("liAnime");
    if($("#spMenu").hasClass("on")){
      $("#spMenu a").each(function(i){
        setTimeout(()=>{
          $(this).addClass("liAnime");
        }, 1 + i*40);
      });
    }
    return false;
  });
  $(window).resize(function(){
    if($(window).width() < 700) {
      $("#whatWeDo h3").map(function(index, val){
        if(index == 0){
          $(this).height(~~($(this).width()/4.975));
        }else if(index == 1){
          $(this).height(~~($(this).width()/4.32));
        }else if(index == 2){
          $(this).height(156);
        }
      });
    }
  });
  $(window).trigger("resize");

});


/*
  google map
*/

let map, marker, infoWindow;
let center = {
  lat: 35.6658634,
  lng: 139.7283354,
};
function initMap() {
  map = new google.maps.Map(document.getElementById("gmap"), {
    center: center,
    zoom: 17
  });
  marker = new google.maps.Marker({
    position: center,
    map: map
  });
  infoWindow = new google.maps.InfoWindow({
    content: "<div class='sample'>株式会社Popshoot</div>"
  });
  infoWindow.open(map, marker);
}

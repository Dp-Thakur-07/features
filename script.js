var elem = document.querySelectorAll(".elem")

elem.forEach(function(val){

 val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity=1
 });
 val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity=0
 });
 val.addEventListener("mousemove",function(dets){
    var rect = val.getBoundingClientRect();
    val.childNodes[3].style.left = (dets.clientX - rect.left) + "px";
    val.childNodes[3].style.top = (dets.clientY - rect.top) + "px";

 });

});
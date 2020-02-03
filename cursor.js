$( document ).mousemove(function(e) {
$('#cursor').css({
left:e.pageX + 10,
top:e.pageY
});
});

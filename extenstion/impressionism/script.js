// insert local image file


var imgURL = chrome.extension.getURL( 'pointing-finger.png' );

var newImageElement = $( '<img>' );
newImageElement.attr( 'id', 'fingerPointer' );
newImageElement.attr( 'src', imgURL );
$( 'body' ).append( newImageElement );

// newImageElement.setAttribute( 'id', 'fingerPointer' );
// newImageElement.setAttribute( 'src', imgURL );
// document.body.appendChild( newImageElement );

$( document ).on('mousemove', function( event )
{
	var mouseX = event.pageX;
	var mouseY = event.pageY;
	newImageElement.css( "left", mouseX - 20 + "px" );
	newImageElement.css( "top", mouseY + "px" );
});

// document.onmousemove = function ( event )
// {
// 	mouseX = event.pageX;
// 	mouseY = event.pageY;
// 	newImageElement.style.left = mouseX - 20 + 'px';
// 	newImageElement.style.top = mouseY + 'px';
// }



// <img id="fingerPointer" src="pointing-finger.png">


var header = $('body');

var backgrounds = new Array(
    'url(https://i.imgur.com/OlkXIK4.jpg)'
  , 'url(https://i.imgur.com/09HEvHi.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 1000);

header.css('background-image', backgrounds[0]);

<script language="javascript">

	// hint: keep this file as template/example, and save it with a different name for every experiment

	// this script creates a series of dots when you move the mouse.

	// things to try:
	// change the color every time the pen is down

	// we need to know if the pen is down (user clicked) or up (user clicked again)
	var penIsDown = false;

	window.onload = function() {

		addEventListener("click", function(event) {

			if (penIsDown) {
				// we are drawing and want to stop, so stop listening to mouse moves
				removeEventListener("mousemove", drawDot);
				// now our pen is not down anymore
				penIsDown = false;
			}
			else {
				// we are not drawing but want to start, so start listening to mouse moves
				addEventListener("mousemove", drawDot);
				// now our pen is down
				penIsDown = true;
			}
		});


  		function drawDot() {
    		var dot = document.createElement("div");
		    dot.className = getURL('pointing-finger.png');
		    dot.style.left = (event.pageX - 4) + "px";
		    dot.style.top = (event.pageY - 4) + "px";
		    document.body.appendChild(dot);
  		}
  	}

</script>

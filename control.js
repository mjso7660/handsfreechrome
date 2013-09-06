function isScrolledIntoView(elem)
{
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
	  && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}

var speakToMe = function() {
	var n = 1;
	$('a').each(function(){
		if (isScrolledIntoView(this)){
			var id = n;
			var a = $(this).offset();
			$('body').append('<span class="numTag" id="' + id + '" style="background:white; position:absolute; z-index:999;">' + id + '</span>');
			$('#'+id).css({left: a.left, top: a.top});
			n++;
		}
	});
};
/*
append a buttom to the DOM--
when clicked, activate map.
*/
/*
if that works, messaging is next. background.js picks up the messages and
distributes them. try to establish communication between background.js
and the content script.
*/
/*once that works, try detecting what page we're on.
background.js needs to be in some sort of continuous event loop,
picking up messages from handsfree.com window and alerting them.
*/
/*
write handsfree.com
*/
/*
debug and polish
*/
/*
publish
*/

$(function() {
	$('body').prepend('<button id="speaker">CLICK ME</button>');
	
	$('#speaker').click(function(){
		speakToMe();
	});
});
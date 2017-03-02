


// Show/hide submenu display
$(".submenu").hide();
$("#menu li:nth-child(2)").on("click", function(){
	$(".submenu").toggle(400);
});

// Bold on hover
$("li").hover(function(){
	$(this).toggleClass("bold");
});

// Float in parallelogram
$(".parallelogram:nth-of-type(1)").fadeIn("800", function(){
	$(".parallelogram:nth-of-type(2)").fadeIn("800", function(){
		$(".parallelogram:nth-of-type(3)").fadeIn("800");
	});
});
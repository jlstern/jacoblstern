


// Show/hide submenu display
$(".submenu").hide();
$("#menu li:nth-child(2)").on("click", function(){
	$(".submenu").toggle(400);
});

// Bold on hover
$("li").hover(function(){
	$(this).toggleClass("bold");
});
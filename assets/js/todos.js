// check off all todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
})

// click on x to delete to-do

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(){
  if(event.which === 13){
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
})
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle()
})
$("h1").on("click",function()
    {
        $(this).css("color", "blue");
        console.log("hello");
    }
);

$("ul").on("click","li",function()
{
    $(this).toggleClass("completed");   

});

$("ul").on("click","span",function(event)
{   
    $(this).parent().remove();
    event.stopPropagation();
});

$("input[type='text'").on("keypress",function()
{
    if(event.which==13){

        var t=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+t+"</li>");
    }
});

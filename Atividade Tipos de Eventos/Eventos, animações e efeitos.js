$(document).ready(function () {
    $("button").first().click(function () {
        $(".filha").width("18%").height("25vh");
        $(".filha").eq(0).css("background-color", "#cad5e9f6");
        $(".filha").eq(1).css("background-color", "pink");
        $(".filha").eq(2).css("background-color", "white");
        $(".filha").eq(3).css("background-color", "orange");
        $(".filha").eq(4).css("background-color", "green");
        $(".filha").fadeOut(2000)
    })

    $("button").eq(1).click(function () {
        $(".filha").fadeIn(1000, () => {
            $(".filha").width("300px").height("150px");
            $(".filha").css({ backgroundColor: "#049DBF", border: "solid"});
        })
    })

    $("button").eq(2).dblclick(function () {
        $(".filha").eq(0).hide();
        $(".filha").eq(3).hide();
    })

    $("input").focus(function () {
        $(this).css("background-color", "#FF8C64");
    })

    $("input").blur(function () {
        $(this).css({ backgroundColor: "" });
        
    })

    $('input[type="button"]').click(function()
    {
        var nome = $("input").first().val()
        $("#result_form").append(nome,"<br>")
        
        var email = $("input").eq(3).val()
        $("#result_form").append(email)
    })

    $("#div_eventos :nth-child(1)").click(function()
    {
        $(this).hide()
    })
    
    $("#div_eventos :nth-child(2)").click(function()
    {
        $("#div_eventos :nth-child(1)").show()        
    })
    
    $("#div_eventos :nth-child(3)").click(function()
    {
        $("#div_eventos :nth-child(1)").toggle();
    })
    
    $("#div_eventos :nth-child(4)").click(function()
    {
        $(this).fadeOut(2000);
    })

    $("#div_eventos :nth-child(5)").click(function()
    {
        $("#div_eventos :nth-child(4)").fadeIn(2000);
    })

    $("#div_eventos :nth-child(6)").click(function()
    {
        $(this).fadeTo("slow",0.5);
    })
    
    $("#div_eventos :nth-child(7)").click(function()
    {
        $("#div_eventos :nth-child(2)").fadeToggle(3000);
    })

    $("#div_eventos :nth-child(8)").click(function()
    {
        $("#div_eventos :nth-child(7)").slideUp("slow");
    })

    $("#div_eventos :nth-child(9)").click(function()
    {
        $("#div_eventos :nth-child(7)").slideDown("slow");
    })
    
    $("#div_eventos :nth-child(10)").click(function()
    {
        $("#div_eventos :nth-child(7)").slideToggle("slow");
    })

    $("#div_eventos").children().mouseup(function()
    {
        $(this).css("background-color", "#FAB100");
    })

})

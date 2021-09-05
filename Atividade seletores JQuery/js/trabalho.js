
$(document).ready(function () {
    $("h2").css({ backgroundColor: "lightgreen" }); //questão1
    $(".buttons").parent().css({ backgroundColor: "red" }); //questão2
    $(".module").children().css({ backgroundColor: "lightblue" }); //questão3
    $(".module li:eq(2)").css({ backgroundColor: "green" }); //questão4
    $("#myList li").first().css({ backgroundColor: "yellow" }); //questão5
    $("#slideshow li").last().css({ backgroundColor: "black" }); //questão6

    if( $("#search").children().first().is("form")) //questão7
    {
        alert("O elemento form é filho de Search")
    }
    else  alert("O elemento form não é filho de Search")

    $("ul").not("#slideshow").css({ backgroundColor: "blue" }); //questão8
    $("ul: p").css({ backgroundColor: "pink" }); //questão9
    $(this).find("#myListItem").text("Este é um novo item de lista"); //questão10
    $(".selected").next().css({ backgroundColor: "gray" }); //questão11
    $(".input_text").prev().css({ backgroundColor: "gray" }); //questão12
    $("#listItem_2").siblings().css({ backgroundColor: "green" }); //questão13
    $("[src]").css({ backgroundColor: "yellow" }); //questão14
    $("#header,#nav").find("#selected")//questão15
    $("[type='text']")//questão16
    $("[value]")//questão17
    $("[type]").not("[type='submit']").css({ backgroundColor: "red" });//questão18
    $("[hef^='blog']").css({ backgroundColor: "green" });//questão19  
    $("[value$='a']").css({ backgroundColor: "red" });//questão20 
    $("[hef*='html]").css({ backgroundColor: "gray" });//questão21
})


     /*      option box      */  

     //animate switch box
     $(".options_box .cog").on('click', function () {

        $(".options_box").toggleClass("animate_options_box");

     });


     //select color
     $(".colors_box span").on('click', function () {

        var select_color = $(this).data("theme");

        $(".colors_box span").removeClass("c__check");
        $(this).addClass("c__check");

        if (select_color === "default"){

            $('.new_color').remove();

        }
        else{

            if ($(".new_color").length === 0){

                $('head').append('<link rel="stylesheet" href="css/'+select_color+'" class="new_color">');

            }
            else{

                $(".new_color").attr("href", "css/" + select_color);
            }

        }


     });
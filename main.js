       $(document).ready(function(){

            var count = 1;

            $("input[type='text']").on("focus", function(){
                $(this).siblings("hr").addClass("hr-focus");
                $(this).parent(".item-content").removeClass("b-bottom");
                count --;
            });
            $("input[type='text']").on("blur", function(){
                var a = this.value;
                if (a == 0) {
                    $(this).siblings("hr").removeClass("hr-focus");
                    $(this).parent(".item-content").addClass("b-bottom");
                    $(this).parent(".item-content").siblings(".item-status").children("span").removeClass("status-color-set");
                    count ++;
                } else {
                    $(this).parent(".item-content").siblings(".item-status").children("span").addClass("status-color-set");
                    count +=2;
                    if (count == 2) {
                     	$("#percentage").html("25%");
                     } else if (count == 3) {
                      	$("#percentage").html("50%");
                     } else if (count == 4) {
                      	$("#percentage").html("70%");
                     } else if (count >= 5) {
                      	$("#percentage").html("100%").css("background-color", "green");
                     }
                }
            });

            $("input[type='email']").on("focus", function(){
                $(this).siblings("hr").addClass("hr-focus");
                $(this).parent(".item-content").removeClass("b-bottom");
                count --;
            });
            $("input[type='email']").on("blur", function(){
                var a = this.value;
                if (a == 0) {
                    $(this).siblings("hr").removeClass("hr-focus");
                    $(this).parent(".item-content").addClass("b-bottom");
                    $(this).parent(".item-content").siblings(".item-status").children("span").removeClass("status-color-set");
                    count ++;
                } else {
                    $(this).parent(".item-content").siblings(".item-status").children("span").addClass("status-color-set");
                    count +=2;
                    if (count == 2) {
                     	$("#percentage").html("25%");
                     } else if (count == 3) {
                      	$("#percentage").html("50%");
                     } else if (count == 4) {
                      	$("#percentage").html("75%");
                     } else if (count >= 5) {
                      	$("#percentage").html("100%").css("background-color", "green");
                     }
                }
            });

            $('input[type="radio"]').change(function(){
                if ($(this).is(':checked')) {
                     $("#for-radio-check").addClass("status-color-set");
                     count++;
                     if (count == 2) {
                     	$("#percentage").html("25%");
                     } else if (count == 3) {
                      	$("#percentage").html("50%");
                     } else if (count == 4) {
                      	$("#percentage").html("75%");
                     } else if (count >= 5) {
                      	$("#percentage").html("100%").css("background-color", "green");
                     }
                } else {
                    $("#for-radio-check").removeClass("status-color-set");
                }
            });
            

        });
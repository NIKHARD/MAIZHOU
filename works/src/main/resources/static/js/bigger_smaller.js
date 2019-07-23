/*$(function () {

    var flag = true;

    var i = 1;
    var j = 2;
    var f = 0;

    $(document).on("click", ".item",function(){

        if (flag) {

            j = j + 1;
            f = f + 1;
            flag = false;

            $("#full_back").css({
                "width":"100%",
                "height":"100%",
                "position": "relative",
                "background": "rgb(255, 251, 240, 0.5)",
                "z-index": "1"
            });

            $("#"+this.id).css({
                "position": "absolute",
                "z-index": j,
                "transform": "scale(2)",
                "transform-origin": "left top"
            });

        } else {

            i = i + 1;

            flag = true;

            $("#"+this.id).css({
                "position": "relative",
                "z-index": j,
                "transform": "scale(1)",
                "transform-origin": "left top"
            });

            $("#navigation").css({
                "position": "relative",
                "z-index": i
            });

            $(".item").css({
                "position": "relative",
                "z-index": i
            });

            $("#full_back").css({
                "width":"100%",
                "height":"100%",
                "position": "relative",
                "background": "rgb(255, 251, 240, 0)",
                "z-index": "1"
            });

        }

    });

});*/

var flag = true;

var i = 1;
var j = 2;
var f = 0;
var k = 0;

if ($(window).width() > 1000) {

    function biggerSmaller(id, p1, p2) {

        if (flag) {

            flag = false;

            j = j + 1;
            f = f + 1;
            k = k + 1;

            $("#full_back").css({
                "width":"100%",
                "height":"100%",
                "position": "relative",
                "background": "rgb(255, 251, 240, 0.5)",
                "z-index": "1"
            });

            $("#"+id).css({
                "position": "absolute",
                "z-index": j,
                "transform": "scale(1.5)",
                "transform-origin": p1 + " " + p2
            });


            var appendStr = "<style>#full_back:after {\n" +
                "        content: '';\n" +
                "        width:100%;\n" +
                "        height:100%;\n" +
                "        position: absolute;\n" +
                "        left:0;\n" +
                "        top:0;\n" +
                "        background: inherit;\n" +
                "        z-index:" + k +";\n" +
                "    }</style>";
            $("#full_back").append(appendStr);

        } else {

            flag = true;

            i = i + 1;

            $("#"+id).css({
                "position": "relative",
                "z-index": j,
                "transform": "scale(1)",
                "transform-origin": p1 + " " + p2
            });

            $("#navigation").css({
                "position": "fixed",
                "z-index": i
            });

            $(".item").css({
                "position": "relative",
                "z-index": i
            });

            $("#full_back").css({
                "width":"100%",
                "height":"100%",
                "position": "relative",
                "background": "rgb(255, 251, 240, 0)",
                "z-index": "1"
            });

        }

    }

}












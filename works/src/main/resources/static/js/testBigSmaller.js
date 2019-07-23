/*window.onload = function () {

    //true: smaller false: bigger
    var flag = true;
    var biggerSmaller = document.getElementById("biggerSmaller");

    biggerSmaller.onclick = function () {

        var widthInt = parseInt(getComputedStyle(biggerSmaller,null).width);
        var heightInt = parseInt(getComputedStyle(biggerSmaller, null).height);

        if (flag) {

            flag = false;

            biggerSmaller.style.width = widthInt*2 + "px";
            biggerSmaller.style.height = heightInt*2 + "px";

        } else {

            flag = true;

            biggerSmaller.style.width = widthInt/2 + "px";
            biggerSmaller.style.height = heightInt/2 + "px";

        }

    }

};*/

$(function () {

    //true: smaller flase: bigger
    var flag = true;
    var biggerSmaller = $("#biggerSmaller");

    biggerSmaller.click(function () {

        var widthInt = parseInt(biggerSmaller.css("width"));
        var heightInt = parseInt(biggerSmaller.css("height"));

        if (flag) {

            flag = false;

            biggerSmaller.css("width", widthInt*2 + "px");
            biggerSmaller.css("height", heightInt*2 + "px");

        } else {

            flag = true;

            biggerSmaller.css("width", widthInt/2 + "px");
            biggerSmaller.css("height", heightInt/2 + "px");

        }

    });

});
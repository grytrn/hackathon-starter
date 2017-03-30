$(document).ready(function() {

    var changeColor = function(value) {
        switch (value) {
            case '0':
                color = "darkred";
                break;
            case '1':
                color = "red";
                break;
            case '2':
                color = "blue";
                break;
            case '3':
                color = "yellow";
                break;
            case '4':
                color = "green";
                break;
            case '5':
                color = "darkgreen";
                break;
        }
    }
});
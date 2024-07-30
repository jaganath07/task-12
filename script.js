document.addEventListener("DOMContentLoaded", function() {
    var countdownDiv = document.getElementById("countdown");

    setTimeout(function() {
        countdownDiv.innerHTML = "10";
        setTimeout(function() {
            countdownDiv.innerHTML = "9";
            setTimeout(function() {
                countdownDiv.innerHTML = "8";
                setTimeout(function() {
                    countdownDiv.innerHTML = "7";
                    setTimeout(function() {
                        countdownDiv.innerHTML = "6";
                        setTimeout(function() {
                            countdownDiv.innerHTML = "5";
                            setTimeout(function() {
                                countdownDiv.innerHTML = "4";
                                setTimeout(function() {
                                    countdownDiv.innerHTML = "3";
                                    setTimeout(function() {
                                        countdownDiv.innerHTML = "2";
                                        setTimeout(function() {
                                            countdownDiv.innerHTML = "1";
                                            setTimeout(function() {
                                                countdownDiv.innerHTML = "Happy Independence Day!";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});

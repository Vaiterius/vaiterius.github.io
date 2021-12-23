document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded.");

    // Animation for greeting my name in the homepage.
    var i = 0;
    const text1 = "hey, i'm gerard.";
    const speed1 = 100; // In milliseconds.
    typeWriter1();
    function typeWriter1() {
        if (i < text1.length) {
            document.querySelector("#name-greeting").innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter1, speed1);
        }
    }

    // Same thing but for the description at the bottom.
    var j = 0;
    const text2 = "Welcome to my homepage. This is where you'll find all about me.";
    const speed2 = 50; // In milliseconds.
    typeWriter2();
    function typeWriter2() {
        if (j < text2.length) {
            document.querySelector("#greeting-desc").innerHTML += text2.charAt(j);
            j++;
            setTimeout(typeWriter2, speed2);
        }
    }
});

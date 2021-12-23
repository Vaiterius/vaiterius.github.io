document.addEventListener("DOMContentLoaded", function() {
    var k = 0;
    const text3 = "get to know me.";
    const speed3 = 120; // In milliseconds.
    typeWriter3();
    function typeWriter3() {
        if (k < text3.length) {
            document.querySelector("#about-me-header").innerHTML += text3.charAt(k);
            k++;
            setTimeout(typeWriter3, speed3);
        }
    }
});
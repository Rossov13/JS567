function gfg(n) {
    remove();
    for (var i = 0; i < n; i++) {
        if (n == 1)
            cls = "one";
        else if (n == 2)
            cls = "two";
        else if (n == 3)
            cls = "three";
        else if (n == 4)
            cls = "four";
        else if (n == 5)
            cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

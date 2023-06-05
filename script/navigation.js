var res = window.matchMedia("(min-width: 650px)");

//open/close hamburger when icon is clicked
function hamburger() {
    var ham_btn = document.getElementById("ham");
    if (ham_btn.style.display === "block") {
        ham_btn.style.display = "none";
    } else {
        ham_btn.style.display = "block";
    }
}

//close hamburger if resolution exceeds "small"
function disableHam() {
    var ham_btn = document.getElementById("ham");
    if (res.matches) {
        ham_btn.style.display = "none";
    }
}

res.addListener(disableHam);

//disabling hover on touch devices
function watchForHover() {
    let lastTouchTime = 0

    function enableHover() {
        if (new Date() - lastTouchTime < 500) return
            document.body.classList.add('hasHover')
    }

    function disableHover() {
        document.body.classList.remove('hasHover')
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date()
    }

    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousemove', enableHover, true)

    enableHover()
}

watchForHover()
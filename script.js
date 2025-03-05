let cursor = document.getElementById("CustomCursor");

document.addEventListener("mousemove", function(e) {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
    });
});

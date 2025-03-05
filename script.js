let cursor = document.getElementById("CustomCursor");

document.addEventListener("mousemove", function(dest) {
    gsap.to(cursor, {
        x: dest.x,
        y: dest.y,
        duration: 0.2,
        ease: "power2.out"
    });
    
});

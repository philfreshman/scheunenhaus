document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".grid-img"));

    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("unvisible");
                    entry.target.classList.add("visible");
                    // lazyBackgroundObserver.unobserve(entry.target);
                }
                else{
                    entry.target.classList.remove("visible");
                    entry.target.classList.add("unvisible")
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    }
});
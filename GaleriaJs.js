document.addEventListener("DOMContentLoaded", function() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var closeBtn = document.getElementsByClassName("close")[0];
    var images = document.querySelectorAll(".columna img");
    var currentIndex = 0;

    function showImage(index) {
        lightbox.style.display = "block";
        lightboxImg.src = images[index].src;
        lightboxImg.style.width = "80%";
        currentIndex = index;
    }

    images.forEach(function(img, index) {
        img.onclick = function() {
            showImage(index);
        }
    });

    closeBtn.onclick = function() {
        lightbox.style.display = "none";
    }

    document.querySelector(".nav.prev").onclick = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    }

    document.querySelector(".nav.next").onclick = function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    }

    window.onclick = function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    }
});

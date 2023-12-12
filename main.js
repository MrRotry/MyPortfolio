document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('myCheckbox');
    var burgerSpans = document.querySelectorAll('.burger_span');
    
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                burgerSpans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                burgerSpans[1].style.opacity = '0';
                burgerSpans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                burgerSpans[0].style.transform = 'none';
                burgerSpans[1].style.opacity = '1';
                burgerSpans[2].style.transform = 'none';
            }
        });
    }
    
    var navbarLinks = document.querySelectorAll('.navbar_link');
    
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                navbarLinks.forEach(function(link, index) {
                    setTimeout(function() {
                        link.classList.add('show');
                    }, index * 300);
                });
            } else {
                navbarLinks.forEach(function(link) {
                    link.classList.remove('show');
                });
            }
        });
    }

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var link = document.getElementById("myLink");
    var div = document.getElementsByClassName("close")[0];
    
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    if (link) {
        link.onclick = function(event) {
            event.preventDefault();
            modal.style.display = "block";
        }
    }

    if (div) {
        div.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

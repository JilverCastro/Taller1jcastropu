function include(elementId, file) {
                fetch(file)
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById(elementId).innerHTML = data;
                    });
            }

            include("navbar", "/estructura/nav.html");
            include("footer", "/estructura/footer.html");
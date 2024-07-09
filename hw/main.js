document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("theme-toggle").addEventListener("click",function(){
        document.documentElement.classList.toggle("dark")
    })
})
document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                navbarContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Failed to load navbar.html');
            }
        }
    };
    xhr.send();
});

function searchResources() {
    const input = document.getElementById('searchInput').value;
    const resources = document.querySelectorAll('.resource');
    
    resources.forEach(res => {
        const title = res.querySelector('h3').innerText;
        if (title.indexOf(input) > -1) {
            res.style.display = "";
        } else {
            res.style.display = "none";
        }
    });
}

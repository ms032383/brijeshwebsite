function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    const menuIcon = document.querySelector('.menu-icon');
    if (drawer.style.width === "250px") {
        drawer.style.width = "0";
        menuIcon.innerHTML = '&#9776;';
    } else {
        drawer.style.width = "250px";
        menuIcon.innerHTML = '&times;';
    }
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const autoTypeElements = document.querySelectorAll('.auto-type');
    autoTypeElements.forEach((element, index) => {
        const text = element.getAttribute('data-text');
        element.style.animationDelay = `${index * 4}s`;
        element.innerHTML = '';
        let charIndex = 0;
        const typeText = () => {
            if (charIndex < text.length) {
                element.innerHTML += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100); // Adjust typing speed here
            }
        };
        setTimeout(typeText, index * 4000); // Adjust delay to match CSS animation
    });
});
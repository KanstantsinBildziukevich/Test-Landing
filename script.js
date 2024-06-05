function removeDottedClass() {
    const roadmapItem = document.querySelectorAll('.dotted');
    roadmapItem.forEach(component => {
        component.classList.remove('dotted');
    });
}

function addDottedClass() {
    const roadmapItem = document.querySelectorAll('.roadmap');
    roadmapItem.forEach(roadmap => {
        Array.from(roadmap.children).forEach(child => {
            child.classList.add('dotted');
        });
    });
}

function checkWindowSize() {
    if (window.innerWidth <= 1749) {
        removeDottedClass();
    }
    if (window.innerWidth >= 1750) {
        addDottedClass();
    }
}

checkWindowSize();

window.addEventListener('resize', checkWindowSize);

document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.getElementById('range');
    const rangeValue = document.getElementById('range__value');

    function updateRangeValue() {
        rangeValue.textContent = rangeInput.value + '%';
    }

    rangeInput.addEventListener('input', updateRangeValue);
    updateRangeValue();
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.header__nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            navLinks.forEach(link => link.classList.remove('active'));

            event.currentTarget.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > headerHeight) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});
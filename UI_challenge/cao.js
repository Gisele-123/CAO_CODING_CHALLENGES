const ids = ['deer', 'fox', 'whale', 'baboon'];

ids.forEach(id => {
    const element = document.getElementById(id);
    const moreInfo = element.querySelector('.more-info');

    element.style.transition = 'transform 0.5s ease';

    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.1)';
        element.classList.add('hovered');
    });

    element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
        element.classList.remove('hovered');
    });
});

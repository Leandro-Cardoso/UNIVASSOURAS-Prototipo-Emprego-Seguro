function updateIframeWidth() {
    const iframe = document.getElementById('iframe');
    const frameH = iframe.offsetHeight;
    iframe.style.width = (frameH / 2) + 'px';
    iframe.style.borderRadius = (frameH / 20) + 'px';
}

window.onload = function() {
    updateIframeWidth();
    window.addEventListener('resize', updateIframeWidth);
};

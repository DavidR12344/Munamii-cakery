if (window.location.href.endsWith('.html')) {
    const newUrl = window.location.href.replace('.html', '');
    window.history.replaceState({}, document.title, newUrl);
}

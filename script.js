// أيقونات SVG بسيطة للتواصل
const icons = {
    whatsapp: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#25D366" d="M12 2a10 10 0 0 0-8.5 15.5L2 22l4.7-1.2A10 10 0 1 0 12 2Zm5.6 14.2c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.2-3.6-.8-3-1.2-4.9-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1.1-2.5.3-.3.7-.4.9-.4.2 0 .4 0 .6.1.2.1.4.6.5.8.2.3.4.7.4.8.1.2.1.3 0 .5-.1.2-.2.4-.3.6-.1.2-.2.4 0 .7.2.3.4.6.7.9.3.3.6.5.9.7.3.2.5.2.7 0 .2-.2.3-.3.5-.4.2-.1.3-.1.5 0 .2.1.6.2.8.4.2.2.4.4.5.6.1.2.1.4.1.6 0 .2-.1.6-.2.8Z"/></svg>`,
    phone: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#42131B" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2c1.1.4 2.3.7 3.5.7a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.7 3.5a1 1 0 0 1-.2 1l-2.2 2.3Z"/></svg>`,
    facebook: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1877F3" d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z"/></svg>`
};

window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#contact-links li');
    if (links.length > 0) {
        links[0].insertAdjacentHTML('afterbegin', icons.whatsapp);
        links[1].insertAdjacentHTML('afterbegin', icons.phone);
        links[2].insertAdjacentHTML('afterbegin', icons.facebook);
    }
});

const cache = {};
const module = (url, options) => {
    if (!url) return Promise.resolve('');
    
    return cache[url] || (cache[url] = fetch(url, options)
    .then(r => r.text()))
    //.then(r => ({html: r, cleanup: el => (el && [...el.querySelectorAll(':scope > *')].forEach(e => e.remove()),r)}));
};
export default module;
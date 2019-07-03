const hbs = require('hbs');

module.exports = () => {
    let currentTime = new Date().toLocaleTimeString();
    let res = `<div>
    <i>Current time is:</i>
    <p>${currentTime}</p>
    </div>`;
    return new hbs.SafeString(res);
};
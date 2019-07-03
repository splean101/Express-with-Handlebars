const hbs = require('hbs');

module.exports = () => {
    let res = `
    <div>
        <h1>Title of site</h1>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </div>`;
    return new hbs.SafeString(res);
};
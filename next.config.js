const withNextra = require('nextra');

const config = withNextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
});

module.exports = config;

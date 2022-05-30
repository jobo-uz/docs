const withNextra = require("nextra");

const nextraConfig = withNextra("nextra-theme-docs", "theme.config.js");

const config = nextraConfig({
    i18n: {
        locales: ["en", "ru", "uz"],
        defaultLocale: "en",
    },
});

module.exports = config;

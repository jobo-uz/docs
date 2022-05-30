export default {
    github: "https://github.com/jobo-uz",
    projectLink: "https://github.com/jobo-uz",
    docsRepositoryBase: "https://github.com/jobo-uz/docs", // base URL for the docs repository
    titleSuffix: " | Jobo",
    nextLinks: true,
    prevLinks: true,
    search: true,
    darkMode: true,
    footer: true,
    footerText: `MIT ${new Date().getFullYear()} © INFORABOTA`,
    footerEditLink: `Edit this page on GitHub`,
    logo: <span>JOBO | documentation</span>,
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Nextra: the next docs builder" />
            <meta name="og:title" content="Nextra: the next docs builder" />
        </>
    ),
    i18n: [
        { locale: "en", text: "English" },
        { locale: "ru", text: "Русский" },
        { locale: "uz", text: "O'zbek" },
    ],
};

export default {
    projectLink: "https://github.com/jobo-uz", // GitHub link in the navbar
    docsRepositoryBase: "https://github.com/jobo-uz/docs", // base URL for the docs repository
    titleSuffix: " – Jobo",
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `MIT ${new Date().getFullYear()} © INFORABOTA`,
    footerEditLink: `Edit this page on GitHub`,
    logo: (
        <>
            <span>JOBO | documentation</span>
        </>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Nextra: the next docs builder" />
            <meta name="og:title" content="Nextra: the next docs builder" />
        </>
    ),
};

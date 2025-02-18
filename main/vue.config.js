const PrerenderSpaPlugin = require("prerender-spa-plugin");
const path = require("path");

module.exports = {
  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    },
    sitemap: {
      urls: [
        "https://dossierfacile.fr/",
        "https://dossierfacile.fr/faq",
        "https://dossierfacile.fr/blog",
        "https://dossierfacile.fr/blog/quelles-pieces-justificatives-fournir-pour-mon-dossier-de-location",
        "https://dossierfacile.fr/blog/constituer-votre-dossierFacile",
        "https://dossierfacile.fr/blog/pourquoi-dossierfacile-est-il-gratuit",
        "https://dossierfacile.fr/blog/locatio-devient-dossier-facile",
        "https://dossierfacile.fr/blog/5-astuces-pour-booster-votre-dossier-de-location",
        "https://dossierfacile.fr/blog/5-conseils-pour-trouver-l-appartement-de-ses-reves-en-region-parisienne",
        "https://dossierfacile.fr/blog/dossierfacile-fait-peau-neuve",
        "https://dossierfacile.fr/information",
        "https://dossierfacile.fr/securite-des-donnees"
      ]
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new PrerenderSpaPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, "dist"),
          // List of routes to prerender
          [
            "/",
            "/faq",
            "/blog",
            "/blog/quelles-pieces-justificatives-fournir-pour-mon-dossier-de-location",
            "/blog/constituer-votre-dossierFacile",
            "/blog/pourquoi-dossierfacile-est-il-gratuit",
            "/blog/locatio-devient-dossier-facile",
            "/blog/5-astuces-pour-booster-votre-dossier-de-location",
            "/blog/5-conseils-pour-trouver-l-appartement-de-ses-reves-en-region-parisienne",
            "/blog/dossierfacile-fait-peau-neuve",
            "/information",
            "/securite-des-donnees"
          ]
        )
      ]
    };
  }
};

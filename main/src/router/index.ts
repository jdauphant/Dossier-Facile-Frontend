import Vue from "vue";
import VueRouter, { Route, RouteConfig } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import store from "@/store";

Vue.use(VueRouter);

const TENANT_URL = `//${process.env.VUE_APP_TENANT_URL}`;
const OWNER_URL = `//${process.env.VUE_APP_OWNER_URL}`;

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
    meta: {
      title: "DossierFacile, le dossier de location numérique de l’État",
      description:
        "Constituez un dossier de location numérique clair, complet et cohérent pour augmenter vos chances de trouver un logement !"
    }
  },
  {
    path: "/blog",
    name: "Blog",
    meta: {
      title: "Blog - DossierFacile"
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/Blog.vue")
  },
  {
    path:
      "/blog/quelles-pieces-justificatives-fournir-pour-mon-dossier-de-location",
    name: "Article1",
    meta: {
      title:
        "Quelles pièces justificatives fournir pour mon dossier de location - Blog - DossierFacile",
      description:
        "A cause de l’augmentation de la demande immobilière, il devient de plus en plus difficile de trouver un bon appartement à louer."
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/Article1.vue")
  },
  {
    path: "/blog/constituer-votre-dossierFacile",
    name: "Article2",
    meta: {
      title: "Constituer votre DossierFacile - Blog - DossierFacile",
      description:
        "Mais comment constituer un dossier de location qui regroupe tous les documents nécessaires sans tomber dans le désordre d’un pdf de cinquante pages ? Existe-t-il un outil facile et gratuit ?"
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/Article2.vue")
  },
  {
    path: "/blog/pourquoi-dossierfacile-est-il-gratuit",
    name: "Article3",
    meta: {
      title: "Pourquoi Dossier Facile est-il gratuit - Blog - DossierFacile"
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/Article3.vue")
  },
  {
    path: "/blog/locatio-devient-dossier-facile",
    name: "Article0",
    meta: {
      title: "Locatio devient DossierFacile",
      description:
        "Locatio, le service d’Etat permettant de monter un dossier de location en ligne certifié clair, complet et cohérent,change de nom et devient DossierFacile.fr"
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/Article0.vue")
  },
  {
    path: "/blog/5-astuces-pour-booster-votre-dossier-de-location",
    name: "Article4",
    meta: {
      title: "5 astuces pour booster votre dossier de location",
      description:
        "Pour se distinguer des autres, un seul moyen : constituer un dossier de location clair, cohérent et complet"
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/Article4.vue")
  },
  {
    path:
      "/blog/5-conseils-pour-trouver-l-appartement-de-ses-reves-en-region-parisienne",
    name: "Article5",
    meta: {
      title:
        "5 conseils pour trouver l’appartement de ses rêves en région parisienne",
      description:
        "Trouver l’appartement de ses rêves à Paris ou en région parisienne est un vrai défi"
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/Article5.vue")
  },
  {
    path: "/blog/dossierfacile-fait-peau-neuve",
    name: "Article6",
    meta: {
      title: "DossierFacile fait peau neuve !",
      description:
        "Afin de mieux répondre aux besoins de nos locataires et propriétaires, le service DossierFacile fait peau neuve avec un nouveau site"
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/Article6.vue")
  },
  {
    path: "/information",
    name: "Information",
    meta: {
      title: "Qui sommes-nous ? - DossierFacile",
      description:
        "Remettre la confiance au centre de la relation entre propriétaire et locataire grâce à notre outil 100 % en ligne, simple et gratuit."
    },
    component: () =>
      import(/* webpackChunkName: "information" */ "../views/Information.vue")
  },
  {
    path: "/securite-des-donnees",
    name: "SecuriteDesDonnees",
    meta: {
      title: "Sécurité des données - DossierFacile"
    },
    component: () =>
      import(
        /* webpackChunkName: "security" */ "../views/SecuriteDesDonnees.vue"
      )
  },
  {
    path: "/faq",
    name: "Faq",
    meta: {
      title: "FAQ - DossierFacile",
      description:
        "Vous rencontrez des difficultés à monter votre dossier de location ? Découvrez toutes nos solutions pour vous aider dans votre démarche"
    },
    component: () => import(/* webpackChunkName: "faq" */ "../views/Faq.vue")
  },
  {
    path: "/info-proprietaire",
    redirect: () => {
      window.location.href = `${OWNER_URL}`;
      return "/info-proprietaire";
    }
  },
  {
    path: "/locataire",
    redirect: () => {
      window.location.href = `${TENANT_URL}/locataire`;
      return "/locataire";
    }
  },
  {
    path: "/source/:source",
    redirect: (to: Route) => {
      const source = to.params.source;
      const internalPartnerId = to.query.internalPartnerId?.toString() || "";
      const firstName = to.query.firstName?.toString() || "";
      const lastName = to.query.lastName?.toString() || "";
      const email = to.query.email?.toString() || "";
      window.location.href = `${TENANT_URL}/source/${source}?internalPartnerId=${internalPartnerId}&firstName=${firstName}&lastName=${lastName}&email=${email}`;
      return "/source";
    }
  },
  {
    path: "/tenants_files/:path/:token",
    redirect: (to: Route) => {
      const token = to.params.token;
      const path = to.params.path;
      window.location.href = `https://old.dossierfacile.fr/tenants_files/${path}/${token}`;
      return `https://old.dossierfacile.fr/tenants_files/${path}/${token}`;
    }
  },
  {
    path: "/dossier-locataire/:token",
    redirect: (to: Route) => {
      const token = to.params.token;
      window.location.href = `https://old.dossierfacile.fr/dossier-locataire/${token}`;
      return `https://old.dossierfacile.fr/dossier-locataire/${token}`;
    }
  },
  {
    path: "/visite-locataire/:token",
    redirect: (to: Route) => {
      const token = to.params.token;
      window.location.href = `https://old.dossierfacile.fr/visite-locataire/${token}`;
      return `https://old.dossierfacile.fr/visite-locataire/${token}`;
    }
  },
  {
    path: "/stats",
    name: "Statistiques",
    meta: {
      title: "Statistiques - DossierFacile",
      description: "Statistiques de DossierFacile"
    },
    component: () =>
      import(/* webpackChunkName: "statistics" */ "../views/Statistics.vue")
  },
  {
    path: "*",
    name: "404",
    meta: {
      title: "404 - DossierFacile"
    },
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app")?.scrollIntoView();
  }
});

router.beforeEach((to, from, next) => {
  if (to.query.lang) {
    const locale = to.query.lang === "en" ? "en" : "fr";
    store.dispatch("setLang", locale);
  }

  document.title = to.meta.title;
  if (to.meta.description) {
    const tag = document.querySelector('meta[name="description"]');
    tag?.setAttribute("content", to.meta.description);

    const prop = document.querySelector('meta[name="og:description"]');
    prop?.setAttribute("content", to.meta.description);
  }
  next();
});

export default router;

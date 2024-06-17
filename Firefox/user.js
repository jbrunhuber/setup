/** ANNOYANCES ***/

/* Adblock */
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.system.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.urlbar.shortcuts.tabs", false);
user_pref("browser.urlbar.shortcuts.history", false);
user_pref("browser.urlbar.shortcuts.bookmarks", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesPlacement.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);

user_pref(
  "services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites",
  false
);
user_pref(
  "browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts",
  false
);
user_pref(
  "services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored",
  false
);
user_pref(
  "browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines",
  "google"
);
/* Translations */
user_pref("browser.translations.enable", false);
user_pref("browser.translations.autoTranslate", false);

user_pref("browser.aboutwelcome.enabled", false); // disable Intro screens
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("extensions.pocket.enabled", false);

/* Fullscreen */
defaultPref("full-screen-api.transition-duration.enter", "0 0");
defaultPref("full-screen-api.transition-duration.leave", "0 0");
defaultPref("full-screen-api.warning.delay", 0);
defaultPref("full-screen-api.warning.timeout", 0);

/* AutoPlay */
user_pref("media.autoplay.default", 5);

/* Cookie Banners */
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);

/* Quit */
user_pref("browser.warnOnQuit", false);

/** PRIVACY ***/
user_pref("geo.provider.use_corelocation", false);

user_pref("datareporting.healthreport.uploadEnabled", false);

user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");

user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.discovery.enabled", false);

user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

defaultPref("permissions.default.geo", 2);
defaultPref("permissions.default.desktop-notification", 2);
defaultPref("dom.push.enabled", false);

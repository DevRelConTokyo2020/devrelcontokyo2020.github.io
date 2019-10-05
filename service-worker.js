                        importScripts("/build/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/build/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/assets/js/mc-validate.js","revision":"e33fb0ebcbbbae8d823fe377daf29219"},{"url":"/assets/js/url.min.js","revision":"41a8388349d34518989881fea1319c5d"},{"url":"/assets/js/app.js","revision":"671ce3713ec3c60454a17c21a341f794"},{"url":"/assets/css/DevRelCon-Tokyo2020.css","revision":"68858e41a0cfc220de30021897a1c978"},{"url":"/index.html","revision":"df64d7776c53052bbdf18df883e6dbe3"},{"url":"/jekyll/update/2019/10/03/welcome-to-jekyll.html","revision":"b098c993dbc47239681404ffe129983d"}];
            // service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'devrelcon-tokyo',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.staleWhileRevalidate()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/favicons/,
    workbox.strategies.cacheFirst()
);
workbox.routing.registerRoute(
    /^https?:\/\/fonts\.googleapis\.com\/css/,
    workbox.strategies.cacheFirst()
);



// third party files
workbox.routing.registerRoute(
  /^https?:\/\/stackpath\.bootstrapcdn\.com/,
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  /assets\/(css|js|img)/,
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  /^https?:\/\/cdn.staticfile.org/,
  workbox.strategies.staleWhileRevalidate()
);




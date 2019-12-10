                        importScripts("/build/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/build/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/assets/js/mc-validate.js","revision":"e33fb0ebcbbbae8d823fe377daf29219"},{"url":"/assets/js/url.min.js","revision":"41a8388349d34518989881fea1319c5d"},{"url":"/assets/js/app.js","revision":"c3d7c121f3ca70ec7fcc095215462b5c"},{"url":"/assets/css/DevRelCon-Tokyo2020.css","revision":"68858e41a0cfc220de30021897a1c978"},{"url":"/index.html","revision":"443dcbd2904e75a6357a46d3e3f03878"},{"url":"/information/2019/10/06/devrelcon-tokyo-is-back.html","revision":"42fb3ba849d40a375cb5df4324662dd5"},{"url":"/information/2019/10/06/devrelcon-tokyo-is-back-en.html","revision":"8b1b7e54118c6bf94a27bfcc23910ce8"}];
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




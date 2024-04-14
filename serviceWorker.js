import { APP_NAME } from "./js/constants.js";

const assets = [
    '/',
    '/templates/main.html',
    '/templates/settings.html',
    '/templates/table.html',
    '/img/english.png',
    '/img/german.png',
    '/img/italian.png',
    '/img/portugese.png',
    '/js/library.js',
    '/js/material.js',
    '/js/material_class.js',
    '/js/calculator_class.js',
    '/js/constants.js',
    '/style/style.css',
    '/style/controls.css',
    '/style/calculator.css'
]

const cacheTypes = [APP_NAME, 'font', 'image', 'style'];
const chacheVersion = '_v1.0';

// for further information see:
// https://www.youtube.com/watch?v=dhV4uJeBuGs

self.addEventListener('install', (evt) => {
    console.log(`Serviceworkder for ${APP_NAME} installed...`)
    self.skipWaiting();
    // make sure we have all assets in cache before continueing
    evt.waitUntil(
        caches.open(cacheTypes[0] + chacheVersion).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', (evt) => {
    console.log(`Serviceworkder for ${APP_NAME} activated...`);
    evt.waitUntil(
        // tell the browser to use the new service worker
        clearCache().then( () => clients.claim())
    );
});

async function clearCache() {
    let cachesToKeep = [];
    cacheTypes.forEach((cache) => {
        cachesToKeep.push(cache + chacheVersion);
    });

    const keys =  await caches.keys();
    let cachesToDelete = keys.filter((key) => !cachesToKeep.includes(key));

    await Promise.all(
        cachesToDelete.map(key => caches.delete(key))
    );    
}


self.addEventListener('fetch', (evt) => {
    let response = null;
    switch (evt.request.destination) {
        case 'font':
        case 'image':
            response = cacheFirst(evt.request);
            break;    
        default:
            response = networkFirst(evt.request);
            break;
    }
    evt.respondWith(response);
});


async function cacheFirst(request) {
    let responseFromCache = await caches.match(request);
    if (responseFromCache) return responseFromCache;

    let responseFromServer = await fetch(request);
    pushToCache(request, responseFromServer.clone());
    return responseFromServer;
}

function pushToCache(request, response) {
    const key = cacheTypes.includes(request.destination) ? request.destination : APP_NAME;
    caches.open(key + chacheVersion).then((cache) => {
        cache.put(request, response);
    })
}

async function networkFirst(request) {
    try {
        let responseFromServer = await fetch(request);
        pushToCache(request, responseFromServer.clone());
        return responseFromServer;
    } catch (error) {
        let responseFromCache = await caches.match(request);
        if (responseFromCache) return responseFromCache;
        return error;
    }
}
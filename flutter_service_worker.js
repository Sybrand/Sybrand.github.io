'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "543d899e661389745a7a268661074d21",
"index.html": "b407555e394436230793a2d934534b3f",
"/": "b407555e394436230793a2d934534b3f",
"main.dart.js": "15b08d0eaecaf06e1f8e8a9886957f5d",
"favicon.png": "9bb6f6d81ef4cb5a8c6b0c2ece953907",
"icons/Icon-192.png": "b9369e1c6a25e53f54333208b7bb8f54",
"icons/Icon-maskable-192.png": "5ee664c53fafc046a8b1589a3654b2e2",
"icons/Icon-maskable-512.png": "2e2d21d73108154a475d62e1fe16edb8",
"icons/Icon-512.png": "f550f730faa3eb096a30ad2eba767fc9",
"manifest.json": "9f61d4dfe2bfc9309caa227d74a1ae7a",
".git/config": "f3bd12abb3476857921a179a583b3e81",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/c51c569ca7fc3b0f12c664894cb0b61bf98fa0": "ae2b29eb337519fc2d916ada4c467d41",
".git/objects/3c/545e5311e988639259b9c734ab4594ea9fe305": "aaf7fd26ceb37d8b2e44cd0ef759b14e",
".git/objects/3d/4587c78c6483151c7b9ca7d605ef24e9e42bb3": "89da4df7c426fbffbbb330403d67f8ee",
".git/objects/94/d1e52a91458ca493d70d89376e4345921b2b03": "20ac01c3d0748a75a959ce9cce9c39b0",
".git/objects/9c/d893d64dfb9d0a8c3c788b74b558f4f13b5de3": "c572953cf35142fe9dcf176ae33f5435",
".git/objects/02/0ca904644054ea5305485c5fa874f03764658f": "61ae23866ccf2ddb01201b516cc54b06",
".git/objects/b2/6989174e010dce55a664ecd6b713d7c408c3d1": "390434de35b8e02d4bdf8818a7536483",
".git/objects/ad/b7b32478d616b68b94385d29a375750eb37c01": "0bac46b18033b8a318bea88dfdcc4a6e",
".git/objects/be/b14c9375fa6d9033729f4f84fecc02e5ec7e5d": "6ba4734dbf5abdd6442333d68dc10fb8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e4/2279f8dde51f1e4888ff112a8c4c55bc91c23b": "bee8a3b28e5b63542aa0d348646d8678",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/7d/58840a162c6808c66102176c33622843570cdb": "62b82c8c19859f4b8f6454c55ae164ff",
".git/objects/16/da4e53e19c8d3e44389d527918e55ee25df92f": "0b4401fa43f761c6cb1fa2bf7d6d1b59",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/0a/98ec0ff25a770509a048d2f9a3121c5c015f53": "bb9fc591c3a9cb2a10309ca4f3224fc5",
".git/objects/bf/ebd87a2c34503b4b19ef5591508d0aa9f81888": "d6d68c4dd9391f3ae4e3567578610238",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/3a49137787e756ea8f6c3d06e32a56de074933": "8d996ef7155b9307d1b671c835778bd7",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/f6/4a76c1bfb144c4a191b49429dd14cc9c5715d9": "894f7a645472ea3ff19730817facfb33",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/037954a36d5038127a67e738a6611514c5464f": "4a180a0f01a38df5fd7a24eeac57c973",
".git/objects/e7/62bb98b847ea1261bc8943cdb0be6cf0d31a6d": "dfbaf77a31db24c32a3dea0883876c80",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/c8d228df7a9b2ed8d82f653144380733f02192": "6e97658a17d2daead32ba915bbcfbfc8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/85/5a4f5d36b06e347f418e39eb116ccb1c5a02ed": "920d9b56aa9131411e6fa977416932b3",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "363d200934d87601895e8175f3e50b54",
".git/logs/refs/heads/main": "363d200934d87601895e8175f3e50b54",
".git/logs/refs/remotes/origin/main": "b6c4aad00addfb5cc8555ccaa5f444c5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "81fb7e2423047627bb94ac311b278b2d",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "e84f39a51fd189d6d27fd701e1a50e25",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4e7007f5d07f9feb483eb4374fef086d",
".git/refs/remotes/origin/main": "4e7007f5d07f9feb483eb4374fef086d",
".git/index": "72783d9d46a248f5e00d6fb1f4bec795",
".git/COMMIT_EDITMSG": "14607822426d690390607bb48a124f66",
"assets/LICENSE": "5dcdfe25f21119aa5435eab9d0256af7",
"assets/AssetManifest.json": "057f907bd708cfe1d8d304d9c4b881e8",
"assets/NOTICES": "50fc52135d41d64fae7fe322b4cad2ce",
"assets/ABOUT.txt": "b12a94308baa0d80f2edfa5b3e779d66",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/DISCLAIMER.txt": "cada41501f6eb9c0a549c04789d32099",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

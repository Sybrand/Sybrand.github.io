'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6819307b0974deea1c8c7baa8169b668",
"index.html": "149afd53703337a51d2d063075025cfc",
"/": "149afd53703337a51d2d063075025cfc",
"main.dart.js": "daa80bbf19da1f00bbb1a18257dba9fe",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "9bb6f6d81ef4cb5a8c6b0c2ece953907",
"icons/Icon-192.png": "b9369e1c6a25e53f54333208b7bb8f54",
"icons/Icon-maskable-192.png": "5ee664c53fafc046a8b1589a3654b2e2",
"icons/Icon-maskable-512.png": "2e2d21d73108154a475d62e1fe16edb8",
"icons/Icon-512.png": "f550f730faa3eb096a30ad2eba767fc9",
"manifest.json": "9f61d4dfe2bfc9309caa227d74a1ae7a",
".git/config": "f3bd12abb3476857921a179a583b3e81",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/c51c569ca7fc3b0f12c664894cb0b61bf98fa0": "ae2b29eb337519fc2d916ada4c467d41",
".git/objects/66/fadb4e6e018bbdd031192ce49800e012a6c436": "60d2ec8e53557fc5048241a1c49c26c4",
".git/objects/3c/545e5311e988639259b9c734ab4594ea9fe305": "aaf7fd26ceb37d8b2e44cd0ef759b14e",
".git/objects/3d/4587c78c6483151c7b9ca7d605ef24e9e42bb3": "89da4df7c426fbffbbb330403d67f8ee",
".git/objects/94/d1e52a91458ca493d70d89376e4345921b2b03": "20ac01c3d0748a75a959ce9cce9c39b0",
".git/objects/9c/d893d64dfb9d0a8c3c788b74b558f4f13b5de3": "c572953cf35142fe9dcf176ae33f5435",
".git/objects/02/0ca904644054ea5305485c5fa874f03764658f": "61ae23866ccf2ddb01201b516cc54b06",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b2/6989174e010dce55a664ecd6b713d7c408c3d1": "390434de35b8e02d4bdf8818a7536483",
".git/objects/ad/b7b32478d616b68b94385d29a375750eb37c01": "0bac46b18033b8a318bea88dfdcc4a6e",
".git/objects/be/b14c9375fa6d9033729f4f84fecc02e5ec7e5d": "6ba4734dbf5abdd6442333d68dc10fb8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/e0bdc387f18c2f7369d30fb8cadfac2ddb32d1": "5e708d7b9b214487bb6e5a61fd1350b3",
".git/objects/eb/5a3f27df0c574726ad9078b8f41a75c7a49680": "beab5dd2ac377d6fd28b9cdda02c8cfd",
".git/objects/eb/a00cf27bf9c5fac68b1aa97a011ea2c0a353ba": "472d54dc573d36fbbccc982182227a6f",
".git/objects/fd/8e81890f7f63b728b2d0b041d1c6ace22d31b9": "c27216a8947ae3523a51879df797ee30",
".git/objects/e4/2279f8dde51f1e4888ff112a8c4c55bc91c23b": "bee8a3b28e5b63542aa0d348646d8678",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/7d/58840a162c6808c66102176c33622843570cdb": "62b82c8c19859f4b8f6454c55ae164ff",
".git/objects/16/da4e53e19c8d3e44389d527918e55ee25df92f": "0b4401fa43f761c6cb1fa2bf7d6d1b59",
".git/objects/5c/f74bb23d6ff9a551eae83abb801605bddf7e53": "c1293e7fef90ff9cbb43d4f8d200f2f3",
".git/objects/54/1b11e85f5a2f8a24b6fb22bd41dbec06767a33": "77dcb6f96d30514b397d1f979afc697d",
".git/objects/01/c5b07edce568b8ff0cbc8416d34f297636ef24": "e042a44d658d927fe5aab07373813c1b",
".git/objects/52/fcc8e822be2d3a71c2995ddb81de8b206fbf2e": "50f2b822bcafaa88fb882348c8dff9d8",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/0a/98ec0ff25a770509a048d2f9a3121c5c015f53": "bb9fc591c3a9cb2a10309ca4f3224fc5",
".git/objects/90/56b4d3ab02bf4ca896a9a5c55229998199e82a": "a3658a713561bb8d2020a8e98794b2ef",
".git/objects/bf/ebd87a2c34503b4b19ef5591508d0aa9f81888": "d6d68c4dd9391f3ae4e3567578610238",
".git/objects/ba/a076c9fc7e4c4f41546ad5260633b6d69151f4": "93b36898bb098e3842b998b5b2dec24c",
".git/objects/a7/b72504b9f75d9e9ce0ff7e02aee511c7d2e539": "c4e60e117c573d8ce20e2adab920ea27",
".git/objects/a7/a9040ee4d2dcd40e607a9b8dbe700fcb0f3fa3": "2240bd378f137e4519fde355e654338e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/5019525ca715ef99c91fabeab280406b89b6f9": "344afb47b37158873ba10abfce8f67a9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/3a49137787e756ea8f6c3d06e32a56de074933": "8d996ef7155b9307d1b671c835778bd7",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/63e09e765c8f9643706aa973b38a9dc4a940ad": "0c0e2a194f53bbc42614271026291666",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/73fba4dcaf707bd4fdbd35cb72480686e611c3": "7d13a865ead088716d041cc55e51bc98",
".git/objects/f6/4a76c1bfb144c4a191b49429dd14cc9c5715d9": "894f7a645472ea3ff19730817facfb33",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/037954a36d5038127a67e738a6611514c5464f": "4a180a0f01a38df5fd7a24eeac57c973",
".git/objects/e7/62bb98b847ea1261bc8943cdb0be6cf0d31a6d": "dfbaf77a31db24c32a3dea0883876c80",
".git/objects/e0/2f68540d00fa38d71ff714cf6f53e92f1e2301": "825042e4306a589982a2a28fa4f3a7e5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/c8d228df7a9b2ed8d82f653144380733f02192": "6e97658a17d2daead32ba915bbcfbfc8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/b97a59f4618158d2d2ff17bccf5e39a8d16a17": "c90b35e8c1d318c12d22d099a0a0b6d8",
".git/objects/2d/f52b5ae6fc3bdfe939724b0e4d79470332ec1e": "434f0d2987aa25e13d1bae012214e0ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/85/5a4f5d36b06e347f418e39eb116ccb1c5a02ed": "920d9b56aa9131411e6fa977416932b3",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/fda00e0ec3e11091cec64a3f5fa1ee3c40eaac": "a1b482a724f9c8b2b22298b5fcf856d9",
".git/objects/14/103726fd58fefe00574a10e9a62642775c77fe": "4cd90948f6674a3aa92f9bc257afd0ec",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91f11f118664b3d674c9fc4edfdd9d27",
".git/logs/refs/heads/main": "91f11f118664b3d674c9fc4edfdd9d27",
".git/logs/refs/remotes/origin/main": "71e9403f10d65d26ad7050f5c90330b8",
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
".git/refs/heads/main": "3b5a79550107a99f1a7b17f91f25c629",
".git/refs/remotes/origin/main": "3b5a79550107a99f1a7b17f91f25c629",
".git/index": "49357548691e2518b3a68e3999cfb377",
".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
"assets/LICENSE": "de5abce472daa02456159cb479ef214c",
"assets/AssetManifest.json": "057f907bd708cfe1d8d304d9c4b881e8",
"assets/NOTICES": "c3ade53869f6872d227a5214d50d3a19",
"assets/ABOUT.txt": "34d5956bf88b1ae68434197c64ee0079",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7682f4627769aca2a7dd55a5c195956b",
"assets/fonts/MaterialIcons-Regular.otf": "e3adbaae9f4bdb99b9b855da43f72705",
"assets/assets/DISCLAIMER.txt": "bde60220ebde491ac91648171bc7d8f7",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

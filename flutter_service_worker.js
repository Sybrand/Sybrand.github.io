'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "960744c6ee21b7b07595d2111ac88fa0",
".git/config": "a4d7073d498b2d91b43bffa9558b749d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "870ae0d0899bfe27b0e071c7878807fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fcc80bbf017695b511df835ae3b83584",
".git/logs/refs/heads/main": "fcc80bbf017695b511df835ae3b83584",
".git/logs/refs/remotes/origin/main": "b01a08ae386461f97fc89e7850c0b01b",
".git/objects/0a/98ec0ff25a770509a048d2f9a3121c5c015f53": "bb9fc591c3a9cb2a10309ca4f3224fc5",
".git/objects/0b/a105002e81f5c82b3a8e99935bae03037b2ccb": "9bfebc39866ca66580ab4e6670c6d7d8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/12/fa21e48e01b80be5d4c83bb22ac8ef289622a2": "c5c79f1bb24bee2397070b4008caabad",
".git/objects/13/88b4ff77a3940ab45649c68235b5385370807e": "0494e5f9eb0f5383cb67cddaa2f958cb",
".git/objects/16/ca3847c5b5f8c642a71cb48819f9b2f0c3f92f": "f3be508d027a1ba8f121c350434584cd",
".git/objects/16/d42d62ed806d822803d6558bde52a0d4cb172d": "586211f2860e3b80e530402a9b8f2f45",
".git/objects/16/da4e53e19c8d3e44389d527918e55ee25df92f": "0b4401fa43f761c6cb1fa2bf7d6d1b59",
".git/objects/17/727adeae8d093d017c7cde0f9457bf7edff81f": "743f8432cf4cd2633c4801eb9080e476",
".git/objects/1a/9f737b530d141a8307ce8a709b2c4b473b656e": "fda0d40f7144cf8292e3a5bba43420ca",
".git/objects/1b/e5acaf8f12cfae2367652c64800705cb6c7cf0": "ba59e023af792d96629dc6219b7f31f7",
".git/objects/20/ca8b36c3fe3cfc01f65a2d5b47d9974d029bf0": "11642f8712a40bcbe0bd1f5addb89dcc",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/29/f259e7718cea643d0c04173d4afee33401f29c": "0de3397c04dce1c8b10a89fd77772f9b",
".git/objects/2c/c8d228df7a9b2ed8d82f653144380733f02192": "6e97658a17d2daead32ba915bbcfbfc8",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/986a018b811eff60591fc5b432dde1ebd7e7da": "a4739f2568849ff75244319a7875323e",
".git/objects/2f/051bba96b97c09b0b8f80d903ea02ea9631a35": "8abe9c428185f83a252c6cf2df2336ee",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b46379e4a682fee9f7f916a5029542554ba092": "8c1255e10e5dfde79ba40b2354eaf4b6",
".git/objects/3d/4587c78c6483151c7b9ca7d605ef24e9e42bb3": "89da4df7c426fbffbbb330403d67f8ee",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/05341b52d68e6adea667b562d70d183a856539": "131f8b5324568a0b8c8b0ab919ed9a21",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5a/aff02d2abf61521ebe611406aed5fcfa8aa785": "160513f02a3908d740be01492795f628",
".git/objects/5b/7be344d44585634132d846cf961b5f05b89da6": "0320aab1e2d594a8a6d5e765077f4c2c",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/63/bebcf2e982839045b034cc8db2c0e7eb9fe7f4": "52b8e32198f007760279f2105b71df44",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/58840a162c6808c66102176c33622843570cdb": "62b82c8c19859f4b8f6454c55ae164ff",
".git/objects/89/7684b535e065f1eb28a3b43901eaad4daa1d79": "a9005a33832eae3c79791f334978e837",
".git/objects/8a/a0592f8ba64d1c0065dc5dbfcff206c980e5e4": "0c6869ce94440d4dbe49a4402896bc5f",
".git/objects/8b/2eb2503729ba9c3c5c9029dc17fd4f85fd5051": "27d74bb442be638da34bc7cf97e93eec",
".git/objects/94/d1e52a91458ca493d70d89376e4345921b2b03": "20ac01c3d0748a75a959ce9cce9c39b0",
".git/objects/97/521f02bc50e92a2318d18708a3bfc5bf060c04": "f4ee756c745571f3da8380ec1c946c35",
".git/objects/9c/2dd0133e8b32d48d6874f2c14ed45e81870c3b": "4c44d27897720d5a5ecc225ca0c1e672",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/b7b32478d616b68b94385d29a375750eb37c01": "0bac46b18033b8a318bea88dfdcc4a6e",
".git/objects/b0/516b3477da405e69180a7f7b6ded5ff3c48c39": "ae375b74107aaa0d9d038a0b98f8c5ab",
".git/objects/b2/6989174e010dce55a664ecd6b713d7c408c3d1": "390434de35b8e02d4bdf8818a7536483",
".git/objects/b4/7660d1806077d2a0b8c8f9db2da9f9b325d407": "83e28f7da83f70224dae45177a4bbcb2",
".git/objects/be/77b1d727e099cec56f471650b7220fe3eed16c": "1828179f47178a5b8388cc48f216f135",
".git/objects/be/b14c9375fa6d9033729f4f84fecc02e5ec7e5d": "6ba4734dbf5abdd6442333d68dc10fb8",
".git/objects/c0/b2a7394d7080438719e34698753b28b54a97d3": "111457fc099fd30109a91a9016c021ab",
".git/objects/c3/2b954e38d90ed0fe8d3bd577ea1fc27744a93e": "d66917ea351402abe9d65bb25fed1331",
".git/objects/c3/3a49137787e756ea8f6c3d06e32a56de074933": "8d996ef7155b9307d1b671c835778bd7",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/d4/32aed95b5ea43895aa40776529720a8968a4fc": "eba2b1f77898b1d7eec7f3e014ba7e47",
".git/objects/d8/52db9d745071a83fe986b840bcacbcdbeffc77": "a41e866dac845073ec695a8bc6843394",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/62bb98b847ea1261bc8943cdb0be6cf0d31a6d": "dfbaf77a31db24c32a3dea0883876c80",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f4/099d4061fabef42dd39aca9317c189170f7f3a": "77aa25248804be9f29116fe43b7e4817",
".git/objects/f5/3b1294c5c15aeec22c7c06aec10cce8b514f13": "58c33061714a41c07ba12027b032eef5",
".git/objects/f6/4a76c1bfb144c4a191b49429dd14cc9c5715d9": "894f7a645472ea3ff19730817facfb33",
".git/objects/f8/a21848b650a3eeb5534185f5f0038aeb59bfa3": "06a583cb05c857a2d74da82686183544",
".git/objects/fb/168f8c57395db2fa5ef5b034aeb8e139440a40": "a95e4c2dad65e0407a635ad4785d2f44",
".git/refs/heads/main": "ba1a992b66e4f55cea119f88c56eb3e6",
".git/refs/remotes/origin/main": "ba1a992b66e4f55cea119f88c56eb3e6",
"assets/ABOUT.txt": "b12a94308baa0d80f2edfa5b3e779d66",
"assets/AssetManifest.json": "057f907bd708cfe1d8d304d9c4b881e8",
"assets/assets/DISCLAIMER.txt": "cada41501f6eb9c0a549c04789d32099",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/LICENSE": "5dcdfe25f21119aa5435eab9d0256af7",
"assets/NOTICES": "a0f7b624272aa53a162f9beaf92852d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "9bb6f6d81ef4cb5a8c6b0c2ece953907",
"icons/Icon-192.png": "b9369e1c6a25e53f54333208b7bb8f54",
"icons/Icon-512.png": "f550f730faa3eb096a30ad2eba767fc9",
"icons/Icon-maskable-192.png": "5ee664c53fafc046a8b1589a3654b2e2",
"icons/Icon-maskable-512.png": "2e2d21d73108154a475d62e1fe16edb8",
"index.html": "efa9d6daa8b8d93131d8efb23ca79530",
"/": "efa9d6daa8b8d93131d8efb23ca79530",
"main.dart.js": "696ffb8f18b495bc973c3e8c1e34dee1",
"manifest.json": "9f61d4dfe2bfc9309caa227d74a1ae7a",
"version.json": "956fefe192d2bbc2b7d1ed88422396a1"
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

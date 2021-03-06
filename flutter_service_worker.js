'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cea90d58a7497465895770add87babdf",
".git/config": "a4d7073d498b2d91b43bffa9558b749d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
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
".git/index": "ee2c349c4d47a700f3bbe902b1de4563",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a5151f18d99d9875f1f9aeda99ce2a7e",
".git/logs/refs/heads/main": "a5151f18d99d9875f1f9aeda99ce2a7e",
".git/logs/refs/remotes/origin/main": "336f645287255f24ff89cc1826418e9c",
".git/objects/01/c5b07edce568b8ff0cbc8416d34f297636ef24": "e042a44d658d927fe5aab07373813c1b",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/05/e88dc59f866fd65f7f584ae826266d1d9f7170": "e30e8d5844dff360bf0f3ae58b1f7416",
".git/objects/06/88655f1644fa63b31fffcdfb6bd1a20155b5d2": "011792040a6204a9988305fb13915bd0",
".git/objects/08/0ad2a71b9539d5d8b69dc2cdae5a0c2b8ae044": "0fa94977c1a37f7192b4a489b2af827b",
".git/objects/08/63ca5f0c287830452902ee01aba8e5535d0473": "15e30c1ea1afd88474715f5729a4f55e",
".git/objects/09/2e893292c45ac2dee37c68af197a406684000b": "acbe5df3f31e0016a682fc7cf671b4e2",
".git/objects/09/b0026733383866ad8d3db05a48e54bda026647": "bca016deabeaa5486ec7fb2c53fde3c7",
".git/objects/0a/0b75c3d598706807cff7bb1c870d3b456d47dc": "a261eb0b9ea45b26835a1ed0a81d7015",
".git/objects/0a/98ec0ff25a770509a048d2f9a3121c5c015f53": "bb9fc591c3a9cb2a10309ca4f3224fc5",
".git/objects/0b/a105002e81f5c82b3a8e99935bae03037b2ccb": "9bfebc39866ca66580ab4e6670c6d7d8",
".git/objects/0b/fcda839d94ee38731707c84990da38cb34fc79": "f962a57fd188fc152f3cc2fa19eb512f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/6404917ab368a7604c26803418410ed1a442fc": "a88c303b0ddbc7b25d4ca13ffec6edbc",
".git/objects/11/4b390ef77f4353a2a4aa4e20612b1c5948059f": "f2149ab8689aa6f9b7ca2c8467a4748f",
".git/objects/12/fa21e48e01b80be5d4c83bb22ac8ef289622a2": "c5c79f1bb24bee2397070b4008caabad",
".git/objects/13/88b4ff77a3940ab45649c68235b5385370807e": "0494e5f9eb0f5383cb67cddaa2f958cb",
".git/objects/13/d2e26436e1c2010560de9e47422f75dae22abc": "dc93b1d9dbc985a068a8ea9b239a6ace",
".git/objects/16/ca3847c5b5f8c642a71cb48819f9b2f0c3f92f": "f3be508d027a1ba8f121c350434584cd",
".git/objects/16/d42d62ed806d822803d6558bde52a0d4cb172d": "586211f2860e3b80e530402a9b8f2f45",
".git/objects/16/da4e53e19c8d3e44389d527918e55ee25df92f": "0b4401fa43f761c6cb1fa2bf7d6d1b59",
".git/objects/17/727adeae8d093d017c7cde0f9457bf7edff81f": "743f8432cf4cd2633c4801eb9080e476",
".git/objects/1a/9f737b530d141a8307ce8a709b2c4b473b656e": "fda0d40f7144cf8292e3a5bba43420ca",
".git/objects/1b/e5acaf8f12cfae2367652c64800705cb6c7cf0": "ba59e023af792d96629dc6219b7f31f7",
".git/objects/20/ca8b36c3fe3cfc01f65a2d5b47d9974d029bf0": "11642f8712a40bcbe0bd1f5addb89dcc",
".git/objects/22/aa70398532f0a6de419827b538b72630b789e7": "51c4b4ccdb518a27e92fe59f522faf04",
".git/objects/23/1a27f6a03b9489915fa02804482142436bf35b": "89c8c635b9b796975d3146983c81686a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/f259e7718cea643d0c04173d4afee33401f29c": "0de3397c04dce1c8b10a89fd77772f9b",
".git/objects/2b/5c36df2f2ef5e072e1726959014d2d157004ff": "b9248d82b444d2770396b3a11cb25461",
".git/objects/2c/c8d228df7a9b2ed8d82f653144380733f02192": "6e97658a17d2daead32ba915bbcfbfc8",
".git/objects/2d/b97a59f4618158d2d2ff17bccf5e39a8d16a17": "c90b35e8c1d318c12d22d099a0a0b6d8",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/986a018b811eff60591fc5b432dde1ebd7e7da": "a4739f2568849ff75244319a7875323e",
".git/objects/2f/051bba96b97c09b0b8f80d903ea02ea9631a35": "8abe9c428185f83a252c6cf2df2336ee",
".git/objects/30/1c6f5c7ef44c6740b99de4376b67c953dd90e1": "6136073c050679d289711edcae3b0ee7",
".git/objects/30/7a948a3f22bb7af710faceca3fdfea50563d93": "45125e5fcbab064c60abda9a11e1b96b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/1c37c98fca594b72f247c82ae8ba671ea56c53": "6e0e0192128c62b83f219283e5af99f4",
".git/objects/33/9e108d47845c7953d9cdd4695e9ad4111e7af8": "9b533bdf3db3f42cdffd590fe61bac70",
".git/objects/34/4cfe710be67d98c00ad4bad035d19aef7ff283": "696e94a436b2a0bd45e862c5fcc6b7ca",
".git/objects/35/56db7827516d7e783d37a5248de9effad36d2f": "6265f1d69e9bae7f9a06148d2ab69b08",
".git/objects/37/66998cb266cc6fbfcf3f113081ba3cee532c34": "abe1781a92f8ac49802a9c8cd9866051",
".git/objects/37/74157f2584da5dc158168e8a07294ee4d948d7": "f7f8904e4611a070325a2d169c62c679",
".git/objects/37/e66e2cc08a8569091a064e19efc67e117f372c": "23ca7b60bb2e0c6843e9c988da342942",
".git/objects/39/acb6381bdd41c737867c3a518d3bc9b22da763": "1c3f1d9c8ba4704aefd18692cfcdc701",
".git/objects/3b/4d5b9c0abdae4b76a931f40fb93daca14aeb6d": "ce48ad19e5be36886e67d314348c5774",
".git/objects/3c/b46379e4a682fee9f7f916a5029542554ba092": "8c1255e10e5dfde79ba40b2354eaf4b6",
".git/objects/3d/4587c78c6483151c7b9ca7d605ef24e9e42bb3": "89da4df7c426fbffbbb330403d67f8ee",
".git/objects/3f/3862714b282faab8e7b51b97d6a8e088527066": "dbcfe25128a3707b7002d1f491e291da",
".git/objects/40/85b30c82df9b2b64b86d3e12284cb2b9876a88": "4928296998479b0a17f469ac6157e24b",
".git/objects/46/35d61b2fc92346ec5463e475f9770ca50c60ad": "fcec1fce8d7f88b44ccf0d631416ec5a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/008180d83733189ce0fcb657e048c087fd97e2": "754d1a074cda779a458d2365a3a0fe45",
".git/objects/4d/4e17853f96b1fec518fc000e67d52d941b5166": "227443b97c6e9b423cb1cf481f90a799",
".git/objects/4e/05341b52d68e6adea667b562d70d183a856539": "131f8b5324568a0b8c8b0ab919ed9a21",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/438e73819eb065011ea5437f124f6a3aa3d07b": "a71f5b81bda3da568213ca6e56db0556",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/bd93454e3c1f68308a3912068a448c5077860c": "833775417b7b0297aaf9db5a8a56b1d4",
".git/objects/59/b2ee10484167e635fdab6e9edbf2c0ccefc3e7": "16d71b9de9f0e169590402ef5b84739d",
".git/objects/5a/aff02d2abf61521ebe611406aed5fcfa8aa785": "160513f02a3908d740be01492795f628",
".git/objects/5b/7be344d44585634132d846cf961b5f05b89da6": "0320aab1e2d594a8a6d5e765077f4c2c",
".git/objects/61/cf22eaf107a287250b3fff188bb35f54eb8cfb": "80dbb8e84e565c9599d50c84111049d2",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/63/7fa6f536f01d74a5a24f4b91c99f112a99eb96": "93105d0bb96d540531fb11bec3f99d10",
".git/objects/63/bebcf2e982839045b034cc8db2c0e7eb9fe7f4": "52b8e32198f007760279f2105b71df44",
".git/objects/64/6c54546fb01b4503389f02d659fadd0fe39b2e": "88a316313f1c38bf1096b5529cbe2812",
".git/objects/65/60e6b992117bc38e8093510aeca8146c701a9c": "7920cdc48a48baa66248d0647e91c77a",
".git/objects/66/f36bef6c7c7404bf8a780448327f20dc8436a1": "68c2ba8e32f5fe06d6a81f45302969e4",
".git/objects/67/1484bf0dab069e338b4c3f326d27935e06c318": "39573013ce480b0f855f61cadca1ce7a",
".git/objects/67/675c87469f0fe7b4e655f1af823109ddf82fd1": "3de6de73b10e25b8ed0f5f4c90862aa8",
".git/objects/68/b1ba5ff8f3f792bb2dceff6a4562a178a064d1": "dc6e3cc72bd4d0a6f8179b05c464c464",
".git/objects/6f/1bd92621e5f0df14fd113eceebfb9e73b00990": "91cad1761a35d2a82072396c96a864f3",
".git/objects/72/d3c36c9b4e9d7badf524675b2ed2ad63624815": "4f0db3ea16f0e547da444da9887d9ef0",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/3b667a03dfd27d198930257f04424a76d994c7": "db1ec16f62dafcc5274c15ad1f728d99",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/58840a162c6808c66102176c33622843570cdb": "62b82c8c19859f4b8f6454c55ae164ff",
".git/objects/81/7629f9384557f8764a94309c608ad38e6db3cb": "b4711c74b9248df3f3b3a695bb0fff48",
".git/objects/81/aa48defc94594724fc86fbc3aa9754a429f4a0": "4a13dfa5ba6a227b2651b47e0657e503",
".git/objects/81/fe7cdb2d56059edef76abacb2e9ba9d1eedbea": "b094ec0c2cf02065288ddafc7a7ca3fc",
".git/objects/81/fffa111798bd36f2eaaa756a5452194bc16697": "1c4ff5767add13ac489741eff73709b6",
".git/objects/84/60243a8fc785027fc27106e5a3d8a09ff02df8": "045d6b4dce58c35b28ba3fc0bc427e7c",
".git/objects/84/8467d89a402c620273aa229743a2e2b0781e33": "d6477a6e01a023946311030be0843d7b",
".git/objects/89/3ba4e0d5ead97e3f789df5cd7c4ebaa00020a4": "c1a09bcf48960dc49b811aaf5d842060",
".git/objects/89/7684b535e065f1eb28a3b43901eaad4daa1d79": "a9005a33832eae3c79791f334978e837",
".git/objects/8a/a0592f8ba64d1c0065dc5dbfcff206c980e5e4": "0c6869ce94440d4dbe49a4402896bc5f",
".git/objects/8b/2eb2503729ba9c3c5c9029dc17fd4f85fd5051": "27d74bb442be638da34bc7cf97e93eec",
".git/objects/8b/e2c10f17a9b95108b79d476a5b5c9e27716c8a": "d7f899fcd3a6a4e7f7c0702fbc853d12",
".git/objects/8d/09d52c2eab12d18d16f85403afabe82cae6835": "01ba36e30b02b45852f474081490cafc",
".git/objects/90/b0b6a5dadf757ab3e09864c96482b4ab2c82c7": "550b9c11ed23ca09a3b4bc632148c33e",
".git/objects/92/a6c002624aafb157a2b3793b181761ebcebd7c": "e0061980ab8ed3607771ca637b843259",
".git/objects/93/27d741ecad4b067e093eaf38831632b3aac43f": "7895d3a6ef76bb06c0fbae2e5c33d8cd",
".git/objects/94/a06abed335e44185c87d7640c91e8d408e2c00": "a3fd01688a297dec53c5282da87a569b",
".git/objects/94/d1e52a91458ca493d70d89376e4345921b2b03": "20ac01c3d0748a75a959ce9cce9c39b0",
".git/objects/95/f28ec7998dc5f258942558d2475b6d6f028ea8": "1409bfaf7a65b4d32693e5c1451aefab",
".git/objects/97/521f02bc50e92a2318d18708a3bfc5bf060c04": "f4ee756c745571f3da8380ec1c946c35",
".git/objects/98/9f9e8f043b2974b3f88cbb57e13f201f63ec47": "aadfba25f77c163194859ecf12d6f3a1",
".git/objects/99/3310c465fcac3b9aed95213314b17eee155f52": "fd94fbffdd7522c2ea69eaf0c10ab1ac",
".git/objects/9a/62d6e36e296f6250c6b1c1bf5f1bd97c1e4e5e": "1621d4d974bc0d32210879b85440b7f2",
".git/objects/9b/ad3e291e3eb5b4ef7dba17dbb3c649a0d938d9": "1edec4594a8a9338fbf430237f8046d6",
".git/objects/9c/2dd0133e8b32d48d6874f2c14ed45e81870c3b": "4c44d27897720d5a5ecc225ca0c1e672",
".git/objects/9e/45467cd6575c14dc0f4cae8bb4641826b29305": "4b033fd02f87e00ade5309005c053e3f",
".git/objects/9e/e0ae830991e10029734aa5e7fb67bc61722626": "dd1af1fa3f2fd1ee0acc1fd53ea67e66",
".git/objects/a0/40d45b5d0c388b34141f604f8b1727a88e848f": "5ed2c4bb848325b14ed71efc1a35739c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/4ada237d339146b1b73396d4b6091463fb6b51": "201f4f091eb954a4a50754ef6bee56f4",
".git/objects/a1/5019525ca715ef99c91fabeab280406b89b6f9": "344afb47b37158873ba10abfce8f67a9",
".git/objects/a7/bc7b1081d6d3934505d57ce8fe8fb3bf0d1a5a": "c2310b2589ad6f2b944cf05916b8a164",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/df7134b97dbc08461b1530a18a0366f18d1faa": "c707c1fbd0bd89091e41b3b15adfb2ff",
".git/objects/ad/b7b32478d616b68b94385d29a375750eb37c01": "0bac46b18033b8a318bea88dfdcc4a6e",
".git/objects/ae/c95146859c6b5585296c930e0a3ea827f44fcb": "954d24573018adf77fc9d06f51354e11",
".git/objects/b0/516b3477da405e69180a7f7b6ded5ff3c48c39": "ae375b74107aaa0d9d038a0b98f8c5ab",
".git/objects/b0/745dc97d39ac922ea3e2f8ebab29815f73a8c6": "93a19b95e249ee0bec4ac754ab7d9c09",
".git/objects/b1/3ba2c91d5897aedde8e2490888c5be8555cb26": "67b256f2983d0ef2d31597367e275995",
".git/objects/b2/6989174e010dce55a664ecd6b713d7c408c3d1": "390434de35b8e02d4bdf8818a7536483",
".git/objects/b4/7660d1806077d2a0b8c8f9db2da9f9b325d407": "83e28f7da83f70224dae45177a4bbcb2",
".git/objects/b5/79f1fecb34447e3dc8e41aa8dbaf3fe9e8b431": "6422a5e7eee9f2271f75ab506bc9bf56",
".git/objects/b5/c792318a2fc19978d70cbf8e8f9bc29a651fe5": "d9c35b799db68f6645b2a64a87be3558",
".git/objects/b5/d2bc01a45ed20ec933737fbb56a0fbbdbaeadc": "758e5a1f649d491831c585e1dd6f2aa7",
".git/objects/b8/427bdd5310f59da682c37b0667805124516f4c": "454d3632f6f42a1623e967595eaa4b1f",
".git/objects/be/77b1d727e099cec56f471650b7220fe3eed16c": "1828179f47178a5b8388cc48f216f135",
".git/objects/be/b14c9375fa6d9033729f4f84fecc02e5ec7e5d": "6ba4734dbf5abdd6442333d68dc10fb8",
".git/objects/c0/99f8d753fdb1ce6493707deebcfdc9eefb25ea": "e0abc45c60ab8dc9c725e6c5060221e1",
".git/objects/c0/b2a7394d7080438719e34698753b28b54a97d3": "111457fc099fd30109a91a9016c021ab",
".git/objects/c1/93e51ccac522f96c4b8ea941709d2d852eea56": "a5f93cebedd8aa15ed3303248c061243",
".git/objects/c3/2b954e38d90ed0fe8d3bd577ea1fc27744a93e": "d66917ea351402abe9d65bb25fed1331",
".git/objects/c3/3a49137787e756ea8f6c3d06e32a56de074933": "8d996ef7155b9307d1b671c835778bd7",
".git/objects/c3/63e09e765c8f9643706aa973b38a9dc4a940ad": "0c0e2a194f53bbc42614271026291666",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/9f56b96ec1856568d777b71a3f69a4fea3a8b9": "1768ef70855fc7150561c773fcdb2b1a",
".git/objects/c7/1ddbb400996695ae24cb46dcc88a8f4679e82b": "4a63738322f74b39195b43d1dad4f55a",
".git/objects/c7/b44130ba6358b4708f42c973850aa9d295366b": "0081adc4b56edb7ed015c56c0addadc9",
".git/objects/c8/52127610b11bcb02cd170a840c37819c0752a2": "e22f76af877bf67ff398c876c0da55ab",
".git/objects/cb/6b129ddc1377e4ba4550fd409fb42201170d4d": "aef2bbe1510548d411fefbac84127278",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/017d81a963fcd2288963b42b6be7bbe0490408": "67bae5b29255f671be7ff4c62cd3b1b6",
".git/objects/d4/32aed95b5ea43895aa40776529720a8968a4fc": "eba2b1f77898b1d7eec7f3e014ba7e47",
".git/objects/d5/36dd63b1df2d28f899dda0bcd3f79a9afd4771": "7056e5164a021ab7325364d502b623ad",
".git/objects/d8/52db9d745071a83fe986b840bcacbcdbeffc77": "a41e866dac845073ec695a8bc6843394",
".git/objects/dc/3d120723b79a1a5745cc725e23545c982ec0d8": "02815b77123e1d3a876b3446644ad7bb",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/fd15998fe790e78551f94d0dc0f44faf3b975c": "1eb4044ee287da59729ef82774279d8b",
".git/objects/e4/4bfd0d9318546a6f0014851c9d11bdd5c53c61": "d9d2a4339efa2d55fac7bc56f88a5965",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b89acae0b22f13a208fb9d9058c2ad02e8cedc": "490fe85216eb6f27ff1bc0fe9ec4a07b",
".git/objects/e7/0f6a21964684a02b4f9d7a8ce4d6b6fa73da7d": "b0550cb83cc3fa5398c7b9d97e342812",
".git/objects/e7/62bb98b847ea1261bc8943cdb0be6cf0d31a6d": "dfbaf77a31db24c32a3dea0883876c80",
".git/objects/e9/04ff287bdccdab62f64015b9b16b1398a62ebf": "867561f6a7061ef4a7856d6a48aa8663",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/d40ed3219e3a64410ad9250f67fb3bf3718a6e": "55bafa6bffbe687e80ee2fe1a7a2a4bb",
".git/objects/ec/4b23ec080740fc15107fdaa17bccc3e823e485": "f26293786b2167beca3939bcbc14b334",
".git/objects/ec/bc0593737be657aef92e3adcf3bcbd6fdb812e": "2ad139963099884bc3e008467db9bced",
".git/objects/ee/872314c4af4c45c77fec5c3481666f62e3dc45": "3b6c6db75871d38c8a67f6be7b8a3dfa",
".git/objects/f2/e47d92c99ac1d03989f8f3e29f55775fd48344": "c2c4bb61a0484b4a026096fd07947e25",
".git/objects/f4/00e8c02bcfc877f4647712f9d54665bcfbf8c2": "a13b98f350c80388f896a73d0517f3d2",
".git/objects/f4/099d4061fabef42dd39aca9317c189170f7f3a": "77aa25248804be9f29116fe43b7e4817",
".git/objects/f4/180025eb30344b5ac8b526b857f7d89262619f": "4e7458d6bcd36b0df09e45cf35b2656e",
".git/objects/f5/3b1294c5c15aeec22c7c06aec10cce8b514f13": "58c33061714a41c07ba12027b032eef5",
".git/objects/f6/4a76c1bfb144c4a191b49429dd14cc9c5715d9": "894f7a645472ea3ff19730817facfb33",
".git/objects/f7/265474bd9c9617ba6a770004d18a5db20df79c": "f5e54e143ca75a681183f25fefc9e2b8",
".git/objects/f8/a21848b650a3eeb5534185f5f0038aeb59bfa3": "06a583cb05c857a2d74da82686183544",
".git/objects/fa/627f4c56083fc1ea4acc36b3b147b84310df24": "b90fe1ca43464f659e531746fadcceeb",
".git/objects/fb/168f8c57395db2fa5ef5b034aeb8e139440a40": "a95e4c2dad65e0407a635ad4785d2f44",
".git/objects/fb/508c269e8ef26389589c7f0af6adba832978ac": "794f7bc5a6d03679a2e148461e9ea67e",
".git/objects/fd/8e81890f7f63b728b2d0b041d1c6ace22d31b9": "c27216a8947ae3523a51879df797ee30",
".git/objects/fd/a91c81d8c73201484f581a298c4b26f838ee07": "945289d6ac9813f1b1db9f95ae8f83fd",
".git/refs/heads/main": "cd78473cc8503f04a8a4274b73f5ff2b",
".git/refs/remotes/origin/main": "cd78473cc8503f04a8a4274b73f5ff2b",
"assets/ABOUT.txt": "34d5956bf88b1ae68434197c64ee0079",
"assets/AssetManifest.json": "057f907bd708cfe1d8d304d9c4b881e8",
"assets/assets/DISCLAIMER.txt": "bde60220ebde491ac91648171bc7d8f7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/LICENSE": "de5abce472daa02456159cb479ef214c",
"assets/NOTICES": "17127a8a144e6a74867b2502bac45916",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "9bb6f6d81ef4cb5a8c6b0c2ece953907",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "b9369e1c6a25e53f54333208b7bb8f54",
"icons/Icon-512.png": "f550f730faa3eb096a30ad2eba767fc9",
"icons/Icon-maskable-192.png": "5ee664c53fafc046a8b1589a3654b2e2",
"icons/Icon-maskable-512.png": "2e2d21d73108154a475d62e1fe16edb8",
"index.html": "f612a2b564cc20feccc25e237014054c",
"/": "f612a2b564cc20feccc25e237014054c",
"main.dart.js": "f3303517a3d7102eb7621f72b9f6e6a7",
"manifest.json": "9f61d4dfe2bfc9309caa227d74a1ae7a",
"version.json": "6819307b0974deea1c8c7baa8169b668"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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

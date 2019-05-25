importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'My-awesome-cache',
    precache: 'precache',
    runtime: 'runtime',
  });
  
// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-awesome-cache-Stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);
// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-awesome-cache-Images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

// 3. cache news articles result
workbox.routing.registerRoute(
    new RegExp('https://newsapi.org/v2/top-headlines'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'My-awesome-cache-news-headline',
        cacheExpiration: {
            maxAgeSeconds: 60 * 30 //cache the news content for 30mn
        }
    })
);
  
workbox.precaching.precacheAndRoute([
  {
    "url": "app.js",
    "revision": "681467dcc7f2ec5f458d69451a749927"
  },
  {
    "url": "components/Footer/Footer.js",
    "revision": "d07b79b53fbc50fdfa121feeabf8ab93"
  },
  {
    "url": "components/Footer/index.js",
    "revision": "e2d601cccc6bedb5d9924634e7694485"
  },
  {
    "url": "components/Footer/tests/index.test.js",
    "revision": "b76eee521a95ed6fc14bbc1720735ded"
  },
  {
    "url": "components/Header/Header.js",
    "revision": "c4a777d58490f9d9605dc7fe7c6694f6"
  },
  {
    "url": "components/Header/index.js",
    "revision": "648473a91362d49f8f85b3cff3659bae"
  },
  {
    "url": "components/Header/tests/index.test.js",
    "revision": "60f62cedfa6387adf93c846bfe8fdf05"
  },
  {
    "url": "components/Icons/index.js",
    "revision": "c337f6e8574b6615f5c8364f129ecf4d"
  },
  {
    "url": "components/Icons/IssueIcon/index.js",
    "revision": "415335693db940b53feff783664af607"
  },
  {
    "url": "components/Icons/IssueIcon/IssueIcon.js",
    "revision": "4ed408124d3adbacac5663d0b9d2bde1"
  },
  {
    "url": "components/Icons/IssueIcon/tests/index.test.js",
    "revision": "e32e1b64dc0b4999d91c2b3e1a6c577b"
  },
  {
    "url": "components/List/index.js",
    "revision": "8f83c507ef2c61cd5e5942043eaf6144"
  },
  {
    "url": "components/List/List.js",
    "revision": "582b9ce106c6d913985bee62461968e1"
  },
  {
    "url": "components/List/tests/index.test.js",
    "revision": "0f1bf0442c8e629f1aabeee08bd9a341"
  },
  {
    "url": "components/ListItem/index.js",
    "revision": "48e54ac29309259b998d7d512ad4ca02"
  },
  {
    "url": "components/ListItem/ListItem.js",
    "revision": "61081446643af727ced9819b087250c4"
  },
  {
    "url": "components/ListItem/tests/index.test.js",
    "revision": "b612b6f053b609155fe291f3567e6281"
  },
  {
    "url": "components/LoadingIndicator/index.js",
    "revision": "d93c02ddaaaad6a12b95fccbe6dc876d"
  },
  {
    "url": "components/LoadingIndicator/LoadingIndicator.js",
    "revision": "147e4b23d88e54f62b30e3b2191be8cf"
  },
  {
    "url": "components/LoadingIndicator/tests/index.test.js",
    "revision": "f4d79d66e0ae5590ea26a0776ea30b6a"
  },
  {
    "url": "components/ReposList/index.js",
    "revision": "d1c842b51e158fc5faa421f1fc6df4c6"
  },
  {
    "url": "components/ReposList/ReposList.js",
    "revision": "0b5fc35d9377370f41e86e02e4e26d35"
  },
  {
    "url": "components/ReposList/tests/index.test.js",
    "revision": "e388c6d74b3e9bc0ddea6f02d0e02ea9"
  },
  {
    "url": "configureStore.js",
    "revision": "a245806ff2e95cebdc8a92c3e3cf3615"
  },
  {
    "url": "containers/App/actions.js",
    "revision": "227c234268dfcfa5a9baf320e6200a45"
  },
  {
    "url": "containers/App/App.js",
    "revision": "61af56f6adce6ea12a582354e3ed6d01"
  },
  {
    "url": "containers/App/constants.js",
    "revision": "b713a9c4c30e423a37f6dce3cf4b77c2"
  },
  {
    "url": "containers/App/index.js",
    "revision": "42659f5029265364967e2300bbd0dd9f"
  },
  {
    "url": "containers/App/reducer.js",
    "revision": "8fff4432daa5181db57cfb939f74cbce"
  },
  {
    "url": "containers/App/selectors.js",
    "revision": "eb16872dcf8af97e39c5a096d8d69ca9"
  },
  {
    "url": "containers/App/tests/actions.test.js",
    "revision": "c57dc16389bf87080d0167315a3d3639"
  },
  {
    "url": "containers/App/tests/index.test.js",
    "revision": "410d1c71467bd4e587382585ab0c6380"
  },
  {
    "url": "containers/App/tests/reducer.test.js",
    "revision": "354597a9b8df7bc5ffef6f0900c2b351"
  },
  {
    "url": "containers/App/tests/selectors.test.js",
    "revision": "b1ca2c97302667d9adbdc0a3c07f33cb"
  },
  {
    "url": "containers/FeaturePage/FeaturePage.js",
    "revision": "ce26c58768f9bbef1ad688580db0dd72"
  },
  {
    "url": "containers/FeaturePage/index.js",
    "revision": "042f9073b2343451530facc312886d17"
  },
  {
    "url": "containers/FeaturePage/Loadable.js",
    "revision": "fb4fe6e57b382ca5786daba8aa23349e"
  },
  {
    "url": "containers/FeaturePage/tests/index.test.js",
    "revision": "bbc23b50814cc28c4058716d60e8af5b"
  },
  {
    "url": "containers/HomePage/actions.js",
    "revision": "5b1d14f13ad87cfc00cec0d281a4baae"
  },
  {
    "url": "containers/HomePage/constants.js",
    "revision": "a5baa6bbfc39273018e73441e0c230e9"
  },
  {
    "url": "containers/HomePage/HomePage.js",
    "revision": "2032ad43a4511a32d4a55d6677430ea3"
  },
  {
    "url": "containers/HomePage/index.js",
    "revision": "61dd48239c7b0e502cd783f8af0acec7"
  },
  {
    "url": "containers/HomePage/Loadable.js",
    "revision": "6a832b1028b67059df8da2f7c05de2d8"
  },
  {
    "url": "containers/HomePage/reducer.js",
    "revision": "ccde1ecaac96b7f6109366d375305b67"
  },
  {
    "url": "containers/HomePage/saga.js",
    "revision": "00fa9b761c15e3f21c7eb45ffb466752"
  },
  {
    "url": "containers/HomePage/selectors.js",
    "revision": "9343e2346cf893cb8f83c9be53b00bd1"
  },
  {
    "url": "containers/HomePage/tests/actions.test.js",
    "revision": "c48737e0365178f98159a47bc0c5e67c"
  },
  {
    "url": "containers/HomePage/tests/index.test.js",
    "revision": "918667bd33f80fd9fa8d3e896bb7c613"
  },
  {
    "url": "containers/HomePage/tests/reducer.test.js",
    "revision": "12c437d736d90f230745fb876bf1600c"
  },
  {
    "url": "containers/HomePage/tests/saga.test.js",
    "revision": "59c8e9a2fc8dd1c1086f3afc19f8bdf6"
  },
  {
    "url": "containers/HomePage/tests/selectors.test.js",
    "revision": "189b5e66212eb892bf5f255d8a35785f"
  },
  {
    "url": "containers/NotFoundPage/index.js",
    "revision": "b4291635eeb4d61a3ca08461f2730db7"
  },
  {
    "url": "containers/NotFoundPage/Loadable.js",
    "revision": "2d48a39aceea1fae5fd82e5fd4777f93"
  },
  {
    "url": "containers/NotFoundPage/NotFoundPage.js",
    "revision": "2434c4c486180a0de3b8c0d8c9060491"
  },
  {
    "url": "containers/NotFoundPage/tests/index.test.js",
    "revision": "60ae246c4b6d06efd82fd64a95dc8b4f"
  },
  {
    "url": "containers/RepoListItem/index.js",
    "revision": "b0c43e9800e29e8a522109f9eddcd713"
  },
  {
    "url": "containers/RepoListItem/RepoListItem.js",
    "revision": "05b8e34ddb0c10e5cc5de708b9fa61b8"
  },
  {
    "url": "containers/RepoListItem/tests/index.test.js",
    "revision": "fa6078cef743643912e76ef083e652ed"
  },
  {
    "url": "containers/Test/actions.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "containers/Test/index.js",
    "revision": "ccf64e6be0b2b3c4b5c84d8ffc15a3b2"
  },
  {
    "url": "containers/Test/Loadable.js",
    "revision": "6a832b1028b67059df8da2f7c05de2d8"
  },
  {
    "url": "containers/Test/reducer.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "containers/Test/saga.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "containers/Test/Test.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "index.html",
    "revision": "af535023ae2e3dee4a62a442aa861541"
  },
  {
    "url": "reducers.js",
    "revision": "341a5e516e0775f30da2ff8c50ba2c92"
  },
  {
    "url": "tests/store.test.js",
    "revision": "a0a5231125d5bbe3bd40356efff86256"
  },
  {
    "url": "utils/checkStore.js",
    "revision": "70dae819e5998d883921044a0deb49fa"
  },
  {
    "url": "utils/constants.js",
    "revision": "8d4307fe88039db420b5d752da60ee82"
  },
  {
    "url": "utils/injectReducer.js",
    "revision": "110743095f41dfd44485fb379c2d55ed"
  },
  {
    "url": "utils/injectSaga.js",
    "revision": "7397c649d7fe58f4a1b3af4bf9fb678f"
  },
  {
    "url": "utils/reducerInjectors.js",
    "revision": "101d37b89e1ce434f660757120616009"
  },
  {
    "url": "utils/request.js",
    "revision": "c2cb12e051941995a68c7bff5dedeb23"
  },
  {
    "url": "utils/sagaInjectors.js",
    "revision": "c76164db7e08d6169be754c8bbd05b19"
  },
  {
    "url": "utils/tests/checkStore.test.js",
    "revision": "dac2a86eaa47a647dc65559e0bad6325"
  },
  {
    "url": "utils/tests/injectReducer.test.js",
    "revision": "419ce7d4306689af1971dd2054513a50"
  },
  {
    "url": "utils/tests/injectSaga.test.js",
    "revision": "1ea007ff0bd4fc62b34b995d3741fc12"
  },
  {
    "url": "utils/tests/reducerInjectors.test.js",
    "revision": "b0f4043d1ef9ee5847eec11a2fd388cb"
  },
  {
    "url": "utils/tests/request.test.js",
    "revision": "f39200c3eac7a583553bb5d02cae6ef4"
  },
  {
    "url": "utils/tests/sagaInjectors.test.js",
    "revision": "00c7a4efde1b19631452ea93276e6eb2"
  }
]);
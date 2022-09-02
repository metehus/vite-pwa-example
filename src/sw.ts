/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope
import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'

const manifest = self.__WB_MANIFEST

console.log('Manifest:', manifest)

precacheAndRoute(manifest)

self.skipWaiting()
clientsClaim()

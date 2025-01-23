importScripts('https://uladzislaupapliouka.github.io/web-push-redirect-ui/firebase-messaging-sw.js')

async function getClientList() {
    return self.clients.claim().then(() =>
        self.clients.matchAll({
            type: 'window'
        })
    );
}

self.addEventListener('push', function(event) {
    if (event.data) {
        console.log('This push event has data: ', event.data.json());
    } else {
        console.log('This push event has no data.');
    }
});
self.notificationclick =null

self.addEventListener('notificationclick', async function(event) {
   const [client] = await getClientList()
    console.log('Notification clicked: ', event.notification.data.deeplink);
    console.log('Window',this)
    console.log("Clients", client)
    // client.location.fre
    // client.navigate(event.notification.data.deeplink)
    // clients.openWindow(event.notification.data.deeplink)
    client.postMessage({deeplink: event.notification.data.deeplink});
})
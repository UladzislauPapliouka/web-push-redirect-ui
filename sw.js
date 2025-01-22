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
    event.preventDefault();
    console.log(self)
    console.log(event)
   const [client] = await getClientList()
    console.log('Notification clicked: ', event.notification.data.deeplink);
    console.log('Window',this)
    console.log("Clients", client)

    var promise = new Promise(function(resolve) {
        setTimeout(resolve, 3000);
    }).then(function() {
        // return the promise returned by openWindow, just in case.
        // Opening any origin only works in Chrome 43+.
        return self.clients.openWindow(event.notification.data.deeplink)
    });

    // Now wait for the promise to keep the permission alive.
    event.waitUntil(()=>{
        client.focus()
    })
    event.waitUntil(promise);
    // client.location.fre
    // waitUntil(()=>{
    //     client.navigate(event.notification.data.deeplink)
    // })
})
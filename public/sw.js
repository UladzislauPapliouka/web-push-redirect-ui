importScripts('https://uladzislaupapliouka.github.io/web-push-redirect-ui/firebase-messaging-sw.js')

async function getClientList() {
    return self.clients.claim().then(() =>
        self.clients.matchAll({
            type: 'window'
        })
    );
}
self.addEventListener('install', (event) => {
    console.log('service-worker install');
})
self.addEventListener("activate", (event) => {
    console.log('service-worker activated');
});

self.addEventListener('push', function(event) {
    if (event.data) {
        console.log('This push event has data: ', event.data.json());
    } else {
        console.log('This push event has no data.');
    }
});
self.notificationclick =null

self.addEventListener('notificationclick', async function(event) {
   //  console.log('Notification clicked before');
   // const [client] = await getClientList()
   //  console.log('Notification clicked: ', event.notification.data.deeplink);
   //  console.log('Window',this)
   //  console.log("Clients", client)
   //  // client.location.fre
   //  // client.navigate(event.notification.data.deeplink)
    event.waitUntil(
        self.clients.matchAll({type: 'window', includeUncontrolled: true}).then( windowClients => {
            console.log('opening window', windowClients.length, 'windows')
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];

                //if the page url contains a #, remove it and everything after it

                // if the cleaned URLs match
                if ('focus' in client) {
                    //focus and reload the window that has this page open
                    client.focus();
                    console.log("focus")
                    //if the url had a # in it, first navigate to the cleaned url (otherwise it wont refresh)

                    if(event.notification.data.deeplink){
                        console.log(event.notification.data.deeplink)
                        client.postMessage({
                            action: 'redirect-from-notificationclick',
                            url: event.notification.data.deeplink,
                        })
                    }

                    return;
                }
            }
            // If not, then open the target URL in a new window/tab.
            // if (self.clients.openWindow) {
            //     return self.clients.openWindow(event.notification.data.deeplink);
            // }
        })
    );
})
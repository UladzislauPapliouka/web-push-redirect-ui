importScripts('./firebase-messaging-sw.js')

const channel = new BroadcastChannel('sw-messages');

self.addEventListener('install', (event) => {
    self.skipWaiting();
    channel.postMessage({type:'BASIC-LOG',msg:'service-worker install'});
})

self.addEventListener("activate", (event) => {
    channel.postMessage({type:'BASIC-LOG',msg:'service-worker activated'});
    if ('permissions' in navigator) {
        navigator.permissions.query({name: 'notifications'})
            .then(permissionStatus => {
                channel.postMessage({type:'BASIC-LOG',msg:'Initial permission state: ' +permissionStatus.state});

                // Добавляем слушатель изменений
                permissionStatus.onchange = function() {
                    channel.postMessage({type:'BASIC-LOG',msg:'Permission state changed to:' +permissionStatus.state});
                };
            })
            .catch(error => {
                channel.postMessage({type:'ERROR-LOG',msg:'Error querying permissions',error});

            });
    }
});
self.addEventListener('push', function(event) {
    if (event.data) {
        channel.postMessage({type:'BASIC-LOG',msg:'This push event has data' , data:event.data.json()});

    } else {
        channel.postMessage({type:'BASIC-LOG',msg:'This push event has no data.'});
    }
});

self.addEventListener('notificationclick', function(event) {
    event.waitUntil(
        self.clients.matchAll({type: 'window', includeUncontrolled: true}).then( windowClients => {
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if ('focus' in client) {
                    client.focus();
                    if(event.notification.data.deeplink){
                        channel.postMessage({type:'BASIC-LOG',msg:'Push deeplink: '+event.notification.data.deeplink});
                        channel.postMessage({
                            type: 'redirect-from-notificationclick',
                            url: event.notification.data.deeplink,
                            source:'push'
                        })
                    }
                    return;
                }
            }
        })
    );
})
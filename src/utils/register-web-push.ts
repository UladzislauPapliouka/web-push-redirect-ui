import {Workbox} from "workbox-window";

export const registerWebPush = async ()=>{
    if(Notification.permission==="denied"){
        console.error("Notification denied");
        return
    }
    if(Notification.permission==="granted"){
        console.log("BEFORE initFirebaseApp")
        window.ednaWidget.publicMethods.initFirebaseApp(
            {
                apiKey: 'AIzaSyCRc7DZ4zEr_zFnse6FQcX2ucbBatA4nNI',
                authDomain: 'api-project-425647879232.firebaseapp.com',
                projectId: 'api-project-425647879232',
                storageBucket: 'api-project-425647879232.appspot.com',
                messagingSenderId: '425647879232',
                appId: '1:425647879232:web:7dcd3c280b6bc01b2b9ba5',
            },
            'BEmw-lZklHnkeHS-rrFu40Yj82cMxL-jnttYjBKm4ye68tUvZXDsVeYxyeab6ucvxBMtjfTtDYaKBLv-I9L_njU',
        );
        console.log("AFTER initFirebaseApp")
    }

    if(!("serviceWorker" in navigator))  {
        console.log("Service worker is not supported");
        return;
    }
    const workbox = new Workbox("/web-push-redirect-ui/sw.js", {scope: '/web-push-redirect-ui/'})

    try {
        await workbox.register()
        workbox.addEventListener("message", (event) => {
            console.log(event.data.action)
            if (!event.data.action) {
                return
            }

            switch (event.data.action) {
                case 'redirect-from-notificationclick':
                    window.location.href = event.data.url
                    break
                // no default
            }
        })
    }
    catch(error){
        console.error("SERVICE WORKER REGISTRATION ERROR",error)
    }

    window.ednaWidget.publicMethods.showAskingPopup =()=> {
        console.log('showAskingPopup');
    }
    window.ednaWidget.publicMethods.showPermissionDeniedPopup =()=> {
        console.log('showPermissionDeniedPopup');
    }
    window.ednaWidget.Emitter.subscribe(
        'onDeviceAddressChanged',
        ({deviceAddress}) => {
            const deviceUid = window.ednaWidget.publicMethods.getDeviceUid();
            console.log('SUCCESS REGISTRATION EDNA', deviceAddress, deviceUid);
            // eslint-disable-next-line no-restricted-globals
            location.href = 'kittycash://'
        },
    );
    window.ednaWidget.Emitter.subscribe('onError', (error) => {
        console.error('WEB-PUSH ERROR', error);
    })
}

export const askToEnableNotification =  ()=>{

}
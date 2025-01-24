interface Window {
    ednaWidget:{
        publicMethods: {
            showAskingPopup: ()=>void
            showPermissionDeniedPopup:()=>void
            getDeviceUid: ()=>string
            initFirebaseApp:(TFirebaseConfig,vapidKey:string)=>void
            checkPermitAndAsk:()=>void
        }
        Emitter: {
            subscribe:(event:'onDeviceAddressChanged'|'onError',callback:({deviceAddress:string})=>void)=>void
        }
    }
}
interface Navigator {
    standalone?: boolean
}
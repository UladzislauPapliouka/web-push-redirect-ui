import './App.css';
import {Typography} from "@alfalab/core-components/typography";
import {List} from "@alfalab/core-components/list";
import { IoShareOutline } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import {Button} from "@alfalab/core-components/button";
// import {SystemMessage} from "@alfalab/core-components/system-message";
// import {SuperEllipse} from "@alfalab/core-components/icon-view/components";
// import { IoIosAlert } from "react-icons/io";
import {Workbox} from "workbox-window";
import {useEffect} from "react";

function App() {
    localStorage.setItem('appPackage', 'web-test.alfabank.ru');
    localStorage.setItem('providerUid', 'PH5HQGI1OEZDZk44L24mUi5AOkVZX0NHJ1hNfj4=');
    localStorage.setItem('isWorkerManualRegistration', 'true');
    localStorage.setItem('firebaseWorkerPath', 'web-push-redirect-ui/sw.js');
    localStorage.setItem('customWorkerScope', '/web-push-redirect-ui/');
    useEffect(() => {
        if("serviceWorker" in navigator){
        // @ts-ignore
        if(!window.navigator.standalone){
            console.log("Website opened not in PWA")
            window.addEventListener("beforeinstallprompt",()=>{
                console.log("anything")
                // const elem = document.createElement('button')
                // elem.addEventListener('click',async ()=>{
                //   const promptEvent = window.deferredPrompt;
                //   if (!promptEvent) {
                //     // The deferred prompt isn't available.
                //     console.log("unable to prompt prompt")
                //     return;
                //   }
                //   // Show the install prompt.
                //   promptEvent.prompt();
                //   // Log the result
                //   const result = await promptEvent.userChoice;
                //   console.log('👍', 'userChoice', result);
                // })
                // elem.innerText='install'
                // document!.getElementById('root')!.append(elem)

            })
        }
        const newRegistration = new Workbox(
            "sw.js",
            {
                scope:'/web-push-redirect-ui/'
            }
        )

        newRegistration.register().then(()=>{
            // @ts-ignore
            window.ednaWidget.publicMethods.showAskingPopup =()=>{
                console.log('showAskingPopup');
                // @ts-ignore
                document.getElementById('enable-push')?.addEventListener('click',()=>{
                    window.Notification.requestPermission().then((permission) => {
                        if (permission !== 'granted') {
                            // @ts-ignore
                            window.ednaWidget.publicMethods.showPermissionDeniedPopup();
                            // BrowserLog.sendInfo("Notification permission isn't grated");
                            // dispatchEdnaWidgetError();
                        } else {
                            // @ts-ignore
                            window.ednaWidget.publicMethods.initFirebaseApp(
                                {
                                    apiKey: 'AIzaSyCRc7DZ4zEr_zFnse6FQcX2ucbBatA4nNI' ,
                                    authDomain:  'api-project-425647879232.firebaseapp.com',
                                    projectId:  'api-project-425647879232',
                                    storageBucket:  'api-project-425647879232.appspot.com',
                                    messagingSenderId:  '425647879232',
                                    appId:  '1:425647879232:web:7dcd3c280b6bc01b2b9ba5',
                                },
                                'BEmw-lZklHnkeHS-rrFu40Yj82cMxL-jnttYjBKm4ye68tUvZXDsVeYxyeab6ucvxBMtjfTtDYaKBLv-I9L_njU',
                            );
                        }
                    });

                })
            }
            // @ts-ignore
            window.ednaWidget.publicMethods.checkPermitAndAsk()
            // @ts-ignore
            const deviceUid = window.ednaWidget.publicMethods.getDeviceUid();
            // @ts-ignore
            window.ednaWidget.Emitter.subscribe(
                'onDeviceAddressChanged',
                // @ts-ignore
                ({ deviceAddress }) => {
                    console.log('DATA',deviceAddress,deviceUid);
                },
            );
            // @ts-ignore
            window.ednaWidget.Emitter.subscribe('onError', (error) => {
                console.log('WEB-PUSH ERROR',error);
            });


        }).catch(error => {console.log("SW ERROE",error)})
    } else  {
        console.log("Service worker is not supported");
    }},[])
  // if (!window.navigator.userAgent.match(/iPhone/i)) {
  //     return <div style={{
  //         display:"flex",
  //         alignItems:"center",
  //         justifyContent:"center",
  //         height:'100dvh'
  //     }}>
  //         <SystemMessage>
  //             <SystemMessage.Graphic>
  //                 <SuperEllipse size={80} backgroundColor='var(--color-light-neutral-translucent-100)'>
  //                     <IoIosAlert color='var(--color-light-neutral-translucent-1300)' />
  //                 </SuperEllipse>
  //             </SystemMessage.Graphic>
  //             <SystemMessage.Title>Недоступно на данном устройстве</SystemMessage.Title>
  //             <SystemMessage.Subtitle>
  //                 Приноси извинения. Данное приложение доступно только на iOS.
  //             </SystemMessage.Subtitle>
  //         </SystemMessage>
  //     </div>
  // }
  // @ts-ignore
  const isPWA = window.navigator.standalone
  if (!isPWA) {
      return <div
          style={{
              boxSizing: 'border-box',
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"space-between",
              height:'100dvh',
              padding:'10px'
          }}>
          <Typography.Title tag={"h1"} weight={"bold"} style={{textAlign: 'center'}}>Подключение web-push
              уведомлений</Typography.Title>
         <div> <Typography.Text style={{textAlign: 'center'}}>Инструкция:</Typography.Text>
             <List tag={'ol'}>
                 <List.Item>Нажать на кнопку поделиться <IoShareOutline/></List.Item>
                 <List.Item>Нажать на кнопку Добавить на экран домой <CgAddR/></List.Item>
                 <List.Item>Нажать на кнопку Добавить</List.Item>
                 <List.Item>Перейти в появившееся приложение на экране домой</List.Item>
             </List></div>
      </div>
  }
  return (
      <div
          style={{
            boxSizing: 'border-box',
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-between",
            height:'100dvh',
            padding:'10px'
          }}>
        <Typography.Title tag={"h1"} weight={"bold"} style={{textAlign: 'center'}}>Подключение web-push
          уведомлений</Typography.Title>
        <div>
          <Typography.Text style={{textAlign: 'center'}}>Инструкция:</Typography.Text>
          <List tag={'ol'}>
            <List.Item>Нажать на включить уведомления</List.Item>
            <List.Item>Выдать системное разрешение</List.Item>
            <List.Item>Нажать на кнопку перейти в Альфа-Мобайл</List.Item>
          </List>
        </div>
        <Button id={'enable-push'} block view={'primary'}>Включить уведомления</Button>
      </div>
  );
}

export default App;

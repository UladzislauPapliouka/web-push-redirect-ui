import {Typography} from "@alfalab/core-components/typography";
import {List} from "@alfalab/core-components/list";
import {Button} from "@alfalab/core-components/button";
import {useEffect} from "react";
import {registerWebPush} from "../utils/register-web-push";

export const InPWA = () => {
    localStorage.setItem('appPackage', 'web-test.alfabank.ru');
    localStorage.setItem('providerUid', 'PH5HQGI1OEZDZk44L24mUi5AOkVZX0NHJ1hNfj4=');
    localStorage.setItem('isWorkerManualRegistration', 'true');
    localStorage.setItem('firebaseWorkerPath', 'web-push-redirect-ui/sw.js');
    localStorage.setItem('customWorkerScope', '/web-push-redirect-ui/');
    useEffect(() => {
        registerWebPush().then(()=>{
            console.log('AFTER WEB-PUSH REGISTRATION')
        })
    }, []);
    return <div
        style={{
            boxSizing: 'border-box',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: '100dvh',
            padding: '10px'
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
        {!(Notification.permission ==='granted') && <Button onClick={() => {
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
            console.log("BEFORE checkPermissionAndAsk")
            window.ednaWidget.publicMethods.checkPermitAndAsk()
            console.log("AFTER checkPermissionAndAsk")
        }} id={'enable-push'} block view={'primary'}>Включить уведомления</Button>}
    </div>
}
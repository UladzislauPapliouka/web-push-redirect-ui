import {Typography} from "@alfalab/core-components/typography";
import {List} from "@alfalab/core-components/list";
import {Button} from "@alfalab/core-components/button";
import {useEffect, useMemo, useState} from "react";
import {askToEnableNotification, registerWebPush} from "../utils/register-web-push";

export const InPWA = () => {
    localStorage.setItem('appPackage', 'web-test.alfabank.ru');
    localStorage.setItem('providerUid', 'PH5HQGI1OEZDZk44L24mUi5AOkVZX0NHJ1hNfj4=');
    localStorage.setItem('isWorkerManualRegistration', 'true');
    localStorage.setItem('firebaseWorkerPath', 'web-push-redirect-ui/sw.js');
    localStorage.setItem('customWorkerScope', '/web-push-redirect-ui/');
    const [loginReason, setLoginReason] = useState<string>('click');
    const channel = useMemo(()=>new BroadcastChannel('sw-messages'),[]);
    useEffect(() => {
        registerWebPush().then(()=>{
            console.log('AFTER WEB-PUSH REGISTRATION')
        })
        const callback = (event:any)=>{
            if(event.data.source){
                console.log('pushhhh')
                // eslint-disable-next-line no-restricted-globals
                setLoginReason('push')
                setTimeout(()=>{setLoginReason('click');
                    console.log('timeout')},1000)
            }
        }
        channel.addEventListener("message", callback)
        return ()=>{
            channel.removeEventListener("message", callback)
        }
    }, [channel]);
    if (loginReason ==='push') {
        return null; // Открыто через пуш
    }
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
        {!(Notification.permission ==='granted') && <Button onClick={askToEnableNotification} id={'enable-push'} block view={'primary'}>Включить уведомления</Button>}
    </div>
}
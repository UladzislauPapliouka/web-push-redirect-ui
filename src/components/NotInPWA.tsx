import {Typography} from "@alfalab/core-components/typography";
import {List} from "@alfalab/core-components/list";
import {IoShareOutline} from "react-icons/io5";
import {CgAddR} from "react-icons/cg";

export const NotInPWA = () => {
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
        <div><Typography.Text style={{textAlign: 'center'}}>Инструкция:</Typography.Text>
            <List tag={'ol'}>
                <List.Item>Нажать на кнопку поделиться <IoShareOutline/></List.Item>
                <List.Item>Нажать на кнопку Добавить на экран домой <CgAddR/></List.Item>
                <List.Item>Нажать на кнопку Добавить</List.Item>
                <List.Item>Перейти в появившееся приложение на экране домой</List.Item>
            </List></div>
    </div>
}
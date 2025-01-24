import {SystemMessage} from "@alfalab/core-components/system-message";
import {SuperEllipse} from "@alfalab/core-components/icon-view/components";
import {IoIosAlert} from "react-icons/io";

export const NotAllowed = () => {
     return <div style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:'100dvh'
}}>
    <SystemMessage>
        <SystemMessage.Graphic>
            <SuperEllipse size={80} backgroundColor='var(--color-light-neutral-translucent-100)'>
                <IoIosAlert color='var(--color-light-neutral-translucent-1300)' />
            </SuperEllipse>
        </SystemMessage.Graphic>
        <SystemMessage.Title>Недоступно на данном устройстве</SystemMessage.Title>
        <SystemMessage.Subtitle>
            Приноси извинения. Данное приложение доступно только на iOS.
        </SystemMessage.Subtitle>
    </SystemMessage>
</div>
}
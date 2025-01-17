import { useState } from 'react'
import { BsGearFill } from 'react-icons/bs'
import SettingsModal from './SettingsModal'

/* eslint-disable @next/next/no-img-element */
function Link({func = () => {}, text}) {
    return (<a className={"self-center ml-3 text-lg font-normal cursor-pointer"} onClick={func}>{text}</a>)
}

export default function Header() {
    const [settingsVisible, setSettingsVisible] = useState(false)

    return (
        <header className={"my-5 flex justify-between"}>
            <img src={"logo.png"} alt="Logo" className={"h-16"} />
            <div className={"flex items-center"}>
                <Link func={() => {document.getElementById('header').scrollIntoView()}} text={"Today"}></Link>
                <Link func={() => {document.getElementById('lunch').scrollIntoView()}} text={"Food"}></Link>
                <Link func={() => {document.getElementById('schedule').scrollIntoView()}} text={"Events"}></Link>
                <BsGearFill className='ml-3 cursor-pointer' onClick={() => setSettingsVisible(true)} />
            </div>
            <SettingsModal visible={settingsVisible} setVisible={setSettingsVisible} />
        </header>
    )
}

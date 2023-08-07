import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'

const Header = () => {

    const {user} = useTelegram()

    return (
        <div className={'header'}>
            <h3>Авторский парфюм от Neroli</h3>
            <span className={'username'}> Добро пожаловать {user?.username}!
            </span>
        </div>
    );
};

export default Header;
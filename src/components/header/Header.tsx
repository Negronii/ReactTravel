import styles from './Header.module.css'
import React from "react";
import logo from '../../assets/logo.svg';
import {Layout, Typography, Input, Menu, Button, Dropdown} from 'antd'
import {GlobalOutlined} from '@ant-design/icons'
import {useParams, useLocation, useNavigate} from "react-router-dom";
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { LanguageActionTypes, changeLanguageActionCreator } from '../../redux/language/languageActions';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const language = useSelector((state) => state.language)
    const languageList = useSelector((state) => state.languageList)
    const dispatch = useDispatch()
    const {t} = useTranslation()

    const menuClickHandler = (e) => {
        dispatch(changeLanguageActionCreator(e.key))
    }
    
    return (
        <div>{/* top-header */}
            <div className={styles["top-header"]}>
                <div className={styles.inner}>
                    <Typography.Text>{t("header.slogan")}</Typography.Text>
                    <Dropdown.Button
                            style={{marginLeft: 15, display: "inline"}}
                            menu={{
                                items: languageList.map(l => {
                                    return {key: l.code, label: l.name}
                                }), onClick: menuClickHandler}
                            }
                            icon={<GlobalOutlined/>}
                        >
                            {language==="en" ? "English" : "中文"}
                        </Dropdown.Button>
                    <Button.Group className={styles["button-group"]}>
                        <Button onClick={() => navigate('/register')}>{t("header.register")}</Button>
                        <Button onClick={() => navigate('/login')}>{t("siginin")}</Button>
                    </Button.Group>
                </div>
            </div>
            <div className={styles["app-header"]}>
                <Layout.Header className={styles["main-header"]}>
                    <span onClick={() => navigate('/')} onMouseOver={e => e.currentTarget.style.cursor = 'pointer'}>
                        <img src={logo} alt="logo" className={styles["App-logo"]}/>
                        <Typography.Title level={3} className={styles.title}>
                            慕课旅游网
                        </Typography.Title>
                    </span>
                    <Input.Search
                        placeholder="请输入旅游目的地、主题、或关键字"
                        className={styles["search-input"]}
                    />
                </Layout.Header>
                <Menu
                    mode={"horizontal"}
                    className={styles["main-menu"]}
                    items={[
                        {key: "1", label: t("header.home_page")},
                        {key: "2", label: t("header.weekend")},
                        {key: "3", label: t("header.group")},
                        {key: "4", label: t("header.backpack")},
                        {key: "5", label: t("header.private")},
                        {key: "6", label:  t("header.cruise")},
                        {key: "7", label: t("header.hotel")},
                        {key: "8", label: t("header.local")},
                        {key: "9", label: t("header.theme")},
                        {key: "10", label: t("header.custom")},
                        {key: "11", label: t("header.study")},
                        {key: "12", label: t("header.visa")},
                        {key: "13", label: t("header.enterprise")},
                        {key: "14", label: t("header.high_end")},
                        {key: "15", label: t("header.outdoor")},
                        {key: "16", label: t("header.insurance")},
                    ]}
                />
            </div>
        </div>
    )
}

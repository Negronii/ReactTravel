import React from 'react'
// import styles from './BusinessPartner.module.css'
import {Col, Divider, Image, Row, Typography} from "antd";
import microSoftLogo from '../../assets/images/microsoft-80658_640.png'
import youtubeLogo from '../../assets/images/icon-720944_640.png'
import igLogo from '../../assets/images/follow-826033_640.png'
import facebookLogo from '../../assets/images/facebook-807588_640.png'

const images = [microSoftLogo, youtubeLogo, igLogo, facebookLogo]

export const BusinessPartner: React.FC = () => {
    return (
        <div>
            <Divider orientation={'left'}>
                <Typography.Title level={3}>
                    {'Business Partner'}
                </Typography.Title>
            </Divider>
            <Row>
                {images.map((element, index) => (
                        <Col span={6} key={index}>
                            <Image src={element}
                                   alt={''}
                                   style={{width: '80%'}}
                            />
                        </Col>
                    )
                )}
            </Row>
        </div>

    )
}

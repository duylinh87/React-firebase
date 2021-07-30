import React from 'react';
import { Col, Row, Button, Typography, } from 'antd';
import firebase, { auth } from '../../firebase/config';
// import style from 'styled-components';


const fbProvider = new firebase.auth.FacebookAuthProvider();
const { Title } = Typography;
export default function Login() {

    const handleFbLogin = () => {
        console.log("chay duoc roi")
        auth.signInWithPopup(fbProvider)
    }
    auth.onAuthStateChanged((use) => {
        console.log({ use })
    })

    return (
        <div>
            <Row style={{
                justifly: 'center',
                height: '800px',
                maxWidth: '600px',
                margin: "auto",
                marginTop: '50px',
            }}>
                <Col span={24}>
                    <Title style={{ textAlign: 'center' }} level={3}>CHAT ROOM</Title>
                    <Button style={{ width: '100%', marginBottom: '5px' }}>
                        Đăng nhập bằng Google
                    </Button>
                    <Button style={{ width: '100%' }} onClick={handleFbLogin}>
                        Đăng nhập bằng Facbook
                    </Button>
                </Col>

            </Row>
        </div>
    );
}


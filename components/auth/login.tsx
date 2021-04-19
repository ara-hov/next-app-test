import React, {useState, useEffect} from 'react';
import {Button, Checkbox, Form, Input, Modal, Typography} from 'antd';
import SocialIconList from './social-icon-list';
import MailIcon from '@/ui-kit/icons/mail-icon';
import KeyIcon from '@/ui-kit/icons/key-icon';

const {Paragraph} = Typography;

const Login = ({opened,close,changeView}) => {
    const [visible, setVisible] = useState(opened);
    const handleLogin = (values) => {

    }
    const handleCancel = () => {
        close(false)
    }
    useEffect(() => {
        setVisible(opened)
    }, [opened])
    return (
        <Modal
            className="auth"
            visible={visible}
            title={null}
            onCancel={handleCancel}
            footer={null}
        >
            <Form
                name="login"
                initialValues={{remember: false}}
                onFinish={handleLogin}
            >
                <h3 className="auth-title">Login</h3>
                <Form.Item
                    name="email"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input placeholder="Email" addonBefore={<MailIcon/>} size="large"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password placeholder="Password" addonBefore={<KeyIcon/>} size="large" visibilityToggle={false}/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" className="form-btn" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
                <Paragraph className="social-text">Or use social network</Paragraph>
                <SocialIconList/>
                <Paragraph className="go-to">Don't you have account yet ? <span onClick={() => {
                    handleCancel();
                    setTimeout(() => {
                        changeView(true)
                    },1000)

                }}>Register</span></Paragraph>
            </Form>
        </Modal>
    );
};

export default Login;

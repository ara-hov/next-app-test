import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Form, Input, Modal, Typography} from 'antd';
import MailIcon from '@/ui-kit/icons/mail-icon';
import KeyIcon from '@/ui-kit/icons/key-icon';
import SocialIconList from './social-icon-list';
import UserIcon from '@/ui-kit/icons/user-icon';
import Link from 'next/link';

const {Paragraph} = Typography;

const Register = ({opened,close,changeView}) => {
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
                name="register"
                initialValues={{remember: false}}
                onFinish={handleLogin}
            >
                <h3 className="auth-title">Register</h3>
                <Form.Item
                    name="name"
                    rules={[{required: true,  message: 'Please input your name!'}]}
                >
                    <Input placeholder="Name" addonBefore={<UserIcon color="grey"/>} size="large"/>
                </Form.Item>
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
                <Form.Item
                    name="confirm_password"
                    rules={[{required: true, message: 'Please confirm your password!'}]}
                >
                    <Input.Password placeholder="Confirm password" addonBefore={<KeyIcon/>} size="large" visibilityToggle={false}/>
                </Form.Item>

                <Form.Item name="agree" valuePropName="checked">
                    {/*target="_blank"*/}
                    <Checkbox>I agree terms of <Link href="/" ><a className="user-terms">user conditions</a></Link></Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" className="form-btn" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
                <Paragraph className="social-text">Or use social network</Paragraph>
                <SocialIconList/>
                <Paragraph className="go-to">You already have account ? <span onClick={() => {
                    handleCancel();
                    setTimeout(() => {
                        changeView(true)
                    },300)
                }}>Login</span></Paragraph>
            </Form>
        </Modal>
    );
};

export default Register;

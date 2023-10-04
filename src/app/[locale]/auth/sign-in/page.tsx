'use client';

import React from "react"
import {Button, Form, Input} from "antd"

import styled from '@emotion/styled'

const ButtonA = styled(Button)`
  width: 100%
`

type FieldType = {
    email?: string;
    password?: string;
};

const SignInPage : React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            //background-image: url("/background.svg");
            // background-size: cover
        }}>
            <Form
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
                style = {{
                    width: "350px",
                    margin: "0 auto",
                    borderRadius: "8px",
                    background: "#ffffff",
                    padding: "20px",
                    boxShadow: "0px 4px 49px -10px rgba(0, 0, 0, 0.5)",
                    WebkitBoxShadow: "0px 4px 49px -10px rgba(0, 0, 0, 0.5)",
                    MozBoxShadow:" 0px 4px 49px -10px rgba(0, 0, 0, 0.5)"
                }}
            >
                <div style={{
                    textAlign: "center",
                    margin: "16px 0 32px 0"
                }}>
                    <h1>Sign In</h1>
                    <p>Sign in to access your dashboard</p>
                </div>
                <Form.Item<FieldType>
                    style={{
                        marginBottom: "16px",
                        textAlign: "center"
                    }}
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!"
                        }
                    ]}
                >
                    <Input style={{ padding: "12px", width: "100%" }} type='email' placeholder='Email' />
                </Form.Item>
                <Form.Item<FieldType>
                    style={{
                        marginBottom: "16px",
                        textAlign: "center"
                    }}
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!"
                        }
                    ]}
                >
                    <Input.Password style={{ padding: "12px", width: "100%" }} type='password' placeholder='password' />
                </Form.Item>
                <Form.Item>
                    <ButtonA type="primary" htmlType="submit">
                        Submit
                    </ButtonA>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignInPage
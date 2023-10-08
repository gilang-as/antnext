'use client';

import React, {useState} from "react";
import {Button, Form, Input, Modal, Radio} from "antd";

export const FormAdd = () => {
    const [form] = Form.useForm();

    const [open, setOpen] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setOpen(false);
    };

    const onCancel = () => {
        setOpen(false);
    }

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setOpen(true);
                }}
            >
                Add Data
            </Button>

            <Modal
                open={open}
                title="Create a new data"
                okText="Create"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{ modifier: 'public' }}
                >
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please input the title of collection!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <Input type="textarea" />
                    </Form.Item>
                    <Form.Item name="modifier" className="collection-create-form_last-form-item">
                        <Radio.Group>
                            <Radio value="public">Public</Radio>
                            <Radio value="private">Private</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

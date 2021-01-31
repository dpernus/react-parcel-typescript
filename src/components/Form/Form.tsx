import React from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';
import { DynamicFieldSet } from './DynamicFieldSet';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export const FormExample: React.FunctionComponent = () => {
  const onFinish = (values) => {
    const { user: userInfo, keyTerms } = values
    userInfo.age = userInfo.age.toString()
    const bodyRequest = { ...userInfo, keyTerms }
    console.log(bodyRequest);
    fetch('http://localhost:3000/user', {
      method: 'post', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(bodyRequest)
    })
      .then(response => {
        console.log(response)
        window.location.href = 'http://localhost:1234'
      })
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'address']} label="Address">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'social']} label="Social">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'git']} label="Git">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'picture']} label="Picture">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'summary']} label="Summary">
        <Input.TextArea />
      </Form.Item>
      <DynamicFieldSet fieldName='Key Terms'/>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

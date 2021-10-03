import React, { useState } from 'react';
import {
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import styles from './SignUp.module.css';
import cn from 'classnames';

const { Option } = Select;

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const SignUp = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={ { width: 70 } }>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select style={ { width: 70 } }>
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    const onWebsiteChange = (value: string) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${ value }${ domain }`));
        }
    };

    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
    }));

    return (
        <div className={cn(styles.formContainer)}>
            <Form
                { ...formItemLayout }
                form={ form }
                name="register"
                onFinish={ onFinish }
                initialValues={ {
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                } }
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={ [
                        {
                            type: 'email',
                            message: 'Введен некорректный E-mail!',
                        },
                        {
                            required: true,
                            message: 'Пожалуйста введите E-mail!',
                        },
                    ] }
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={ [
                        {
                            required: true,
                            message: 'Пожалуйста введите пароль!',
                        },
                    ] }
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Повторите пароль"
                    dependencies={ ['password'] }
                    hasFeedback
                    rules={ [
                        {
                            required: true,
                            message: 'Пожалуйста введите пароль!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Введенные вами пароли не совпадают!'));
                            },
                        }),
                    ] }
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="Nickname"
                    tooltip="Как вы хотите, чтобы вас называли?"
                    rules={ [{ required: true, message: 'Пожалуйста введите ваш никнейм!', whitespace: true }] }
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="residence"
                    label="Habitual Residence"
                    rules={ [
                        { type: 'array', required: true, message: 'Please select your habitual residence!' },
                    ] }
                >
                    <Cascader options={ residences }/>
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={ [{ required: true, message: 'Пожалуйста введите ваш номер телефона!' }] }
                >
                    <Input addonBefore={ prefixSelector } style={ { width: '100%' } }/>
                </Form.Item>

                <Form.Item
                    name="donation"
                    label="Donation"
                    rules={ [{ required: true, message: 'Пожалуйста введите размер пожертвований!' }] }
                >
                    <InputNumber
                        // addonAfter={ suffixSelector }
                        style={ { width: '100%' } }/>
                </Form.Item>

                <Form.Item
                    name="website"
                    label="Website"
                    rules={ [{ required: true, message: 'Пожаулуйста введите ваш вебсайт!' }] }
                >
                    <AutoComplete options={ websiteOptions } onChange={ onWebsiteChange } placeholder="website">
                        <Input/>
                    </AutoComplete>
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={ [{ required: true, message: 'Пожалуйста выберите пол!' }] }
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Мужской</Option>
                        <Option value="female">Женский</Option>
                        <Option value="other">Другой</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Captcha" extra="Мы должны убедиться, что вы не робот">
                    <Row gutter={ 8 }>
                        <Col span={ 12 }>
                            <Form.Item
                                name="captcha"
                                noStyle
                                rules={ [{ required: true, message: 'Пожалуйста введите капчу!' }] }
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={ 12 }>
                            <Button>Поулчить капчу</Button>
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={ [
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Примите пользовательское соглашение')),
                        },
                    ] }
                    { ...tailFormItemLayout }
                >
                    <Checkbox>
                        Я прочитал <a href="">пользовательское соглашение</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item { ...tailFormItemLayout }>
                    <Button type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default SignUp;

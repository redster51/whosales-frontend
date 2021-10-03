import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import cn from 'classnames';
import styles from './SignIn.module.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className={cn(styles.formContainer)}>
            <Form
                name="normal_login"
                className={ cn(styles.loginForm) }
                initialValues={ { remember: true } }
                onFinish={ onFinish }
                size={'large'}
            >
                <Form.Item
                    name="username"
                    rules={ [{ required: true, message: 'Пожалуйста введите имя ользователя!' }] }
                >
                    <Input prefix={ <UserOutlined className={ cn('site-form-item-icon') }/> }
                           placeholder="Имя пользователя"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={ [{ required: true, message: 'Пожалуйста введите пароль!' }] }
                >
                    <Input
                        prefix={ <LockOutlined className={ cn('site-form-item-icon') }/> }
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Link className={ cn(styles.loginFormForgot) } to="/sign-in">
                        Забыли пароль?
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={ cn(styles.loginFormButton) }>
                        Войти
                    </Button>
                    или <Link to="/sign-up">зарегистрироваться сейчас!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignIn;

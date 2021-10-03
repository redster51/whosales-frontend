import { Layout, Menu } from 'antd';
import styles from './Header.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const WhosalesHeader = () => (
    <Header className={ classNames(styles.header) }>
        <div className={ classNames(styles.logo) }>Whosales</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ['2'] }>
            <Menu.Item key="1">
                <Link to="/sign-in">Sign In</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/sign-up">Sign Up</Link>
            </Menu.Item>
        </Menu>
    </Header>
);

export default WhosalesHeader;

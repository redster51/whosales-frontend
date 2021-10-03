import { Layout } from 'antd';
import cn from 'classnames/bind';
import { VFC } from 'react';
import styles from './Footer.module.css';

const { Footer } = Layout;
const currentDate = new Date();
const WhosalesFooter: VFC = () => (
    <Footer className={cn(styles.footer)}>
        <div className={cn(styles.brand)}>Whosales</div>
        <div>Copyright © Whosales. { currentDate.getFullYear() }</div>
    </Footer>
);

export default WhosalesFooter;

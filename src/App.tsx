import React from 'react';
import styles from './App.module.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from './components/Header';
import cn from 'classnames';
import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from './routes';
import Footer from './components/Footer';

const { Content } = Layout;

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Header/>
                <Content className={ cn(styles.content) }>
                    <RootRouter/>
                </Content>
                <Footer/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

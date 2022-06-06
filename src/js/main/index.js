/* 엔트리 파일 (모듈의 시작점) */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import './style.css';


const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
        <App/>
);

/*
import tapMenuToggle from '../main'
import searchMenuToggle from '../main'
import searchMenuClose from '../main'
import LoginToggle from '../main'
import SendRedirect from '../main'
import userSessionCheck from '../main'
import text1 from '../main'
import text2 from '../main'
import text3 from '../main'
import text4 from '../main'
import text1_1 from '../main'
import text2_1 from '../main'
import text3_1 from '../main'
import text4_1 from '../main'
import slider1 from '../main'
import slider2 from '../main'
*/
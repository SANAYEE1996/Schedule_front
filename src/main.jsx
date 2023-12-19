import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './config/AppRouter';

createRoot(document.getElementById('root')).render(
    <AppRouter tab="home"/>
);

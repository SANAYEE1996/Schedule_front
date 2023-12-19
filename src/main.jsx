import React from 'react'
import './index.css'
import AppRouter from './config/AppRouter';

createRoot(document.getElementById('root')).render(
    <AppRouter tab="home"/>
);

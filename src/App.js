import React from 'react';
import { QuestionsProvider } from './context/Questions';
import { Routes } from './routes'
import './style.css'

export const App = () => {
  return (
    <>
      <QuestionsProvider >
        <Routes />
      </QuestionsProvider>
    </>
  );
}

import React from 'react';
import { QuestionsProvider } from './context/Questions';
import { Routes } from './routes'

export const App = () => {
  return (
    <>
      <QuestionsProvider >
        <Routes />
      </QuestionsProvider>
    </>
  );
}

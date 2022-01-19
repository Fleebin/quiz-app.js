import React from 'react';
import { Routes as Router, Route } from 'react-router';

import { Home } from './views/Home/Home';
import { Amount } from './views/Amount/Amount';
import { Quest } from './views/Quest/Quest';
import { Result } from './views/Result/Result';

export const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/amount" element={<Amount />} />
            <Route path="/quest" element={<Quest />} />
            <Route path="/result" element={<Result />} />
        </Router>
    );
}
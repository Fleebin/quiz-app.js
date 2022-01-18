import React from 'react';
import { Routes as Router, Route } from 'react-router';

import { Home } from './views/Home';
import { Amount } from './views/Amount';
import { Quest } from './views/Quest';
import { Result } from './views/Result';

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
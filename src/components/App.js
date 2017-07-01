import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Terminal from 'react-bash';
import {history, structure, extensions, prefix} from './SkamTerm';
import {s} from '../styles/skamterm.style';

export default function App() {
  return (
    <Terminal style={s} history={history}
        structure={structure} extensions={extensions}
        prefix={prefix}
      />
  );
}

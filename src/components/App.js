import React, { Component } from 'react';

import '../index.css'
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';

const App=()=>(
    <div>
        <Counter></Counter>
        <AddCounter></AddCounter>
        <RemoveCounter></RemoveCounter>
    </div>
)

export default App;
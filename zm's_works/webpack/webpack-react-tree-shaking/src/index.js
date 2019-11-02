import { includes } from 'lodash'
// import groupBy from 'lodash/groupBy'
import React from 'react'
import reactDom from 'react-dom'
import { add, sub } from './utils';
import App from './App'

reactDom.render(<App />, document.getElementById('app'))
console.log(add(1, 2));
console.log(add(3, 4));
console.log(includes([1, 2, 3], 1));
import React from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment';
import _ from 'lodash';

console.log('moment & lodash are HUGE:', moment, _);

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <div style={{ padding: '3rem', fontFamily: 'system-ui', lineHeight: 1.6 }}>
    <h1>Webpack Bundle Analyzer Demo</h1>
    <p>Open <strong>http://127.0.0.1:8888</strong> to see the treemap.</p>
    <p>
      You&apos;ll see <code>moment</code> and <code>lodash</code> eating almost the
      entire bundle.
    </p>
  </div>
);

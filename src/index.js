import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Suspense } from "react";
import { AppLoader } from './component/loader/AppLoader';
import ErrorBoundary from './component/error-boundary/ErrorBoundary';
import { ErrorPage } from './component/error-boundary/ErrorPage';
const App = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={ <ErrorPage /> }>
      <Suspense fallback={ <AppLoader /> }>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StyleSheetManager } from 'styled-components';
import { Normalize } from 'styled-normalize';
import App from './App';
import { GlobalStyle } from './styles';

const queryClient = new QueryClient({ staleTime: 1000 * 60 });

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager disableVendorPrefixes={true}>
        <App />
      </StyleSheetManager>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

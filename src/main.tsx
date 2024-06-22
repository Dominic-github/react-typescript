import ReactDOM from 'react-dom/client'
import App from '~/App.tsx'
import { Provider } from 'react-redux'
import { store } from '~/stores/store'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { ToastContainer } from 'react-toastify' // Cấu hình react-toastify

import theme from './theme'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
      <ToastContainer position="bottom-left" theme="colored" />
    </CssVarsProvider>
  </Provider>
)

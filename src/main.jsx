import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { globalState } from './store/index.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={globalState}>

    <App />
  </Provider>
)

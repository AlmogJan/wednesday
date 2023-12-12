import ReactDOM from 'react-dom/client'
import { RootCmp } from './RootCmp'
import './styles/main.scss'
import { Provider } from 'react-redux'
import { store } from './stores/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RootCmp></RootCmp>
  </Provider>
)

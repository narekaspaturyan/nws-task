import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import ErrorBoundary from 'components/error-boundary/index'
import Layout from 'components/layout'
import Routes from 'routes'

import { store } from './store'

import './styles/index.css'

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

export default App

import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Loading from 'components/loading'

const Login = lazy(() => import('pages/login'))
const Home = lazy(() => import('pages/home'))

const privateRoutes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/home',
    Component: Home,
  },
]

const publicRoutes = [
  {
    path: '/login',
    Component: Login,
  },
]

const CustomRoutes = () => {
  const user = true

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {user
          ? privateRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          : publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Suspense>
  )
}

export default CustomRoutes

import { FC, ReactNode, useState, useEffect } from 'react'

import { getCategories } from 'features/categorie-slice'
import { useAppDispatch } from 'store/hooks'
import Sidebar from './sidebar'

import './styles.css'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [toggle, setToggle] = useState(true)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <div className="logo">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="hamburger"
          >
            <div />
            <div />
            <div />
          </button>
        </div>
      </header>

      <Sidebar toggle={toggle} />

      <div className={`body ${toggle ? 'body-toggle' : ''}`}>{children}</div>
    </>
  )
}

export default Layout

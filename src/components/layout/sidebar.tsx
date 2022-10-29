import { FC } from 'react'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import {
  clearCategorieById,
  getCategoriesById,
} from 'features/category-by-id-slice'

import Loading from 'components/loading'

import './styles.css'

interface AppProps {
  toggle: boolean
}

const App: FC<AppProps> = ({ toggle }) => {
  const dispatch = useAppDispatch()
  const { categories, status } = useAppSelector((state) => state.categories)

  const getPhotos = (id: string) => {
    dispatch(clearCategorieById())
    dispatch(getCategoriesById({ id, limit: 10, page: 1 }))
  }

  return (
    <div className={`l-navbar ${toggle ? 'l-show-sidebar' : 'l-show-mobile'}`}>
      <>
        {status === 'loading' ? (
          <Loading />
        ) : (
          <nav className="l-nav">
            <div className="l-categories-wrapper">
              {categories.map((category) => (
                <li onClick={() => getPhotos(category.id)} key={category.id}>
                  {category.name}
                </li>
              ))}
            </div>
          </nav>
        )}
      </>
    </div>
  )
}

export default App

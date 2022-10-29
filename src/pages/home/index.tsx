import { FC } from 'react'

import { useAppSelector, useAppDispatch } from 'store/hooks'
import { getCategoriesById } from 'features/category-by-id-slice'

import Loading from 'components/loading'
import ImageWrapper from 'components/image-wrapper'
import Button from 'components/button'

import './styles.css'

interface AppProps {}

const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch()

  const {
    categoriesById,
    status,
    id,
    limit: storeLimit,
    page: storePage,
  } = useAppSelector((state) => state.categoriesById)

  const handleLoadMore = () => {
    const limit = storeLimit
    const page = storePage + 1
    dispatch(getCategoriesById({ id, page, limit }))
  }

  return (
    <div className="home-wrapper">
      {status === 'loading' ? (
        <Loading />
      ) : (
        <>
          {categoriesById?.length ? (
            <>
              <div className="images-main-wrapper">
                {categoriesById.map((category) => (
                  <ImageWrapper
                    key={category.id}
                    src={category.url}
                    alt="cat"
                  />
                ))}
              </div>
              <div className="custom-button-wrapper">
                <Button onClick={handleLoadMore} name="Load more" />
              </div>
            </>
          ) : null}
        </>
      )}
    </div>
  )
}

export default App

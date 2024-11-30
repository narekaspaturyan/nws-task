import { store } from '../../store'
import { setCount, setOrder, setOrderSum, setCountSum } from '.'

store.subscribe(() => {
  store.getState()
})

const ctrl = {
  addCount(cnt: number) {
    const dispatch = store.dispatch

    dispatch(setCount(cnt))
    dispatch(setCountSum(cnt + 2))
  },
  addOrder(ord: number) {
    const dispatch = store.dispatch

    dispatch(setOrder(ord))
    dispatch(setOrderSum(ord + 2))
  },
}

export default ctrl

import { FC } from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import {
  countSelector,
  countSumSelector,
  orderSelector,
  orderSumSelector,
} from 'features/test-slice/test-selecors'
import ctrl from 'features/test-slice/test-ctrl'

interface Props {}

const App: FC<Props> = ({}) => {
  const count = useSelector(countSelector)
  const order = useSelector(orderSelector)
  const orderSum = useSelector(orderSumSelector)
  const countSum = useSelector(countSumSelector)

  console.log('object')

  return (
    <div>
      <div>
        <button onClick={() => ctrl.addCount(2)} className="count">
          add count
        </button>
        <span>{count}</span>
        <span>sum {countSum}</span>
      </div>

      <div>
        <button onClick={() => ctrl.addOrder(10)} className="order">
          add order
        </button>
        <span>{order}</span>
        <span> sum {orderSum}</span>
      </div>
    </div>
  )
}

export default App

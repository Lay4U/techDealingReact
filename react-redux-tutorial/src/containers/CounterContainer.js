import Counter from '../components/Counter';
import { connect} from 'react-redux';
import { increase, decrease} from '../modules/counter';
import { bindActionCreators} from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

const CounterContainer = () =>{
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  )
  // return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

export default CounterContainer

// const mapStateToPros = state => ({
//   number: state.counter.number,
// })

// const mapDispatchToProps = dispatch => ({
  // increase: () => {
  //   dispatch(increase());
  // },
  // decrease: () => {
  //   dispatch(decrease());
  // },
// });

// export default connect(
  // mapStateToPros,
  // mapDispatchToProps
  // state => ({
  //     number: state.counter.number
  //   }),
  // dispatch =>
    // bindActionCreators(
    //   {
    //     increase,
    //     decrease,
    //   },
    //   dispatch,
    // ),
  // {
  //   increase,
  //   decrease,
  // }
// )(CounterContainer);

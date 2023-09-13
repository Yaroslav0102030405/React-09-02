import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

// 6 шаг - добавдянм такие пропсы
function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

// используем аргументы коннекта чтобы привязать кусочки стейта к пропам компонента
const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

// используем аргументы коннекта и делаем диспат экшина чтобы привязать к пропам компонента
const mapDispatchToProps = dispatch => ({
  // возращаем эти обьекты которые распыляються как пропсы
  onIncrement: value => dispatch(action.increment(value)),
  onDecrement: value => dispatch(action.decrement(value)),
});

// 7 шаг - мы экспортируем коннект
// вызываем конект и передаем настройки
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

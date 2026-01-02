import ClassInput from './components/ClassInput';
import FunctionalInput from './components/FunctionalInput';
import './style.css';

export default function App() {
  return (
    <>
      <FunctionalInput name='Functional component!' />
      <div className='divider' />
      <ClassInput name='Class based component!' />
    </>
  );
}

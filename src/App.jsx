import ClassInput from './components/Class-Input';
import FunctionalInput from './components/Functional-Input';

export default function App() {
  return (
    <main className='flex flex-col gap-4 m-6'>
      <FunctionalInput name='Functional component!' />
      <ClassInput name='Class based component!' />
    </main>
  );
}

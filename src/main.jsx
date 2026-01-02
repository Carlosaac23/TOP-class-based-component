import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ClassInput from './components/Class-Input';
import FunctionalInput from './components/Functional-Input';
import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FunctionalInput />
    <ClassInput />
  </StrictMode>
);

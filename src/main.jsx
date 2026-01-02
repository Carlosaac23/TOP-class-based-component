import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ClassInput from './Class-Input';
import FunctionalInput from './Functional-Input';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FunctionalInput />
    <ClassInput />
  </StrictMode>
);

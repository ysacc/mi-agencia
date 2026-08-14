import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import App from './App.tsx';

/**
 * Animaciones de scroll.
 * - `once: true` evita que se repitan al subir y bajar (distrae y cuesta CPU).
 * - Se desactivan por completo si el usuario pide menos movimiento.
 */
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

AOS.init({
  duration: 700,
  easing: 'ease-in-out-quad',
  once: true,
  disable: prefersReducedMotion,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

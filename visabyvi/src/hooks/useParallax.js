import { useEffect, useRef } from 'react';

/**
 * useParallax(speed)
 * Move o elemento verticalmente conforme o scroll, criando profundidade.
 * speed: 0 a 1 — quanto maior, mais o elemento "atrasa" em relação ao scroll.
 * Ex: useParallax(0.15) é um efeito sutil; useParallax(0.4) é mais forte.
 */
export default function useParallax(speed = 0.2) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let ticking = false;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const offset = rect.top * speed;
      node.style.transform = `translate3d(0, ${offset * -1}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}
import { useEffect, useRef } from 'react';

/**
 * Intersection Observer for reveal animations
 */
export function useRevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    const els = document.querySelectorAll(
      '.reveal, .reveal-slow, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .text-reveal-word'
    );
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/**
 * Parallax effect tied to scroll position
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const offset = (center - viewCenter) * speed;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}

/**
 * Scroll progress (0 to 1) for the entire page
 */
export function useScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

/**
 * Scroll-linked opacity: fades element based on scroll position
 */
export function useScrollFade(start = 0, end = 400) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(0, Math.min(1, 1 - (scrollY - start) / (end - start)));
      el.style.opacity = opacity;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [start, end]);

  return ref;
}

/**
 * Scroll-linked blur: blurs element as user scrolls
 */
export function useScrollBlur(maxBlur = 20, distance = 500) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const blur = Math.min(maxBlur, (scrollY / distance) * maxBlur);
      el.style.filter = `blur(${blur}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [maxBlur, distance]);

  return ref;
}

/**
 * Scroll-linked scale
 */
export function useScrollScale(minScale = 0.95, distance = 600) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewH - rect.top) / (viewH + rect.height)));
      const scale = minScale + (1 - minScale) * progress;
      el.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [minScale, distance]);

  return ref;
}

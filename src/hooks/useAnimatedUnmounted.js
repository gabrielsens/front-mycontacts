import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';

export default function useAnimatedUnmounted(visible) {
  const [shouldRender, setShouldRender] = useState(visible);

  const animationRef = useRef(null);

  function onAnimationEnd() {
    setShouldRender(false);
  }

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    const elementRef = animationRef.current;
    if (!visible && elementRef) {
      elementRef.addEventListener('animationend', onAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', onAnimationEnd);
      }
    };
    // Método com timeOut - navegadores antigos
    // if (visible) {
    //   setShouldRender(true);
    // }
    // let timeOutId;
    // if (!visible) {
    //   timeOutId = setTimeout(() => {
    //     setShouldRender(false);
    //   }, 300);
    // }

    // return () => {
    //   clearTimeout(timeOutId);
    // };
  }, [visible]);

  return {
    shouldRender,
    animationRef,
  };
}

useAnimatedUnmounted.propTypes = {
  visible: PropTypes.bool.isRequired,
};

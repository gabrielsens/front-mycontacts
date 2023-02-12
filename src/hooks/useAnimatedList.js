import {
  createRef, useCallback, useEffect, useRef, useState,
} from 'react';

export default function useAnimatedList(initialValues = []) {
  const [pendingRemovalIds, setPendingRemovalIds] = useState([]);
  const [items, setItems] = useState(initialValues);

  const animatedRefs = useRef(new Map());
  const animatiosEndListeners = useRef(new Map());

  const handleRemoveItem = useCallback((id) => {
    setPendingRemovalIds((prevState) => [...prevState, id]);
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    const removeListener = animatiosEndListeners.current.get(id);
    removeListener();

    animatiosEndListeners.current.delete(id);
    animatedRefs.current.delete(id);

    setPendingRemovalIds((prevState) => prevState.filter((idMessage) => idMessage !== id));
    setItems((prevState) => prevState.filter((message) => message.id !== id));
  }, []);

  useEffect(() => {
    pendingRemovalIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const animatedElement = animatedRef?.current;
      const alreadyHasListener = animatiosEndListeners.current.has(itemId);

      if (animatedElement && !alreadyHasListener) {
        const onAnimationEnd = () => handleAnimationEnd(itemId);
        const removeListener = () => {
          animatedElement.removeEventListener('animationend', onAnimationEnd);
        };

        animatedElement.addEventListener('animationend', onAnimationEnd);
        animatiosEndListeners.current.set(itemId, removeListener);
      }
    });
  }, [pendingRemovalIds, handleAnimationEnd]);

  useEffect(() => {
    const removeListener = animatiosEndListeners.current;
    return () => {
      removeListener.forEach((ref) => {
        ref.removeEventListener('animationend', removeListener());
      });
    };
  }, []);

  const getAnimatedRef = useCallback((id) => {
    let animatedRef = animatedRefs.current.get(id);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(id, animatedRef);
    }
    return animatedRef;
  }, []);

  const renderList = useCallback((renderItem) => (
    items.map((item) => {
      const isLeaving = pendingRemovalIds.includes(item.id);
      const animatedRef = getAnimatedRef(item.id);

      return renderItem(item, {
        isLeaving,
        animatedRef,
      });
    })
  ), [items, pendingRemovalIds, getAnimatedRef]);

  return {
    setItems,
    handleRemoveItem,
    renderList,
  };
}

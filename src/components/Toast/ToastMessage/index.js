import PropTypes from 'prop-types';

import { memo, useEffect } from 'react';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircle from '../../../assets/images/icons/check-circle.svg';

function ToastMessage({
  message,
  onRemoveMessage,
  isLeaving,
  animatedRef,
}) {
  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        onRemoveMessage(message.id);
      },
      message.duration || 7000,
    );
    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      type={message.type}
      isLeaving={isLeaving}
      ref={animatedRef}
      tabIndex={0}
      role="button"
      onClick={handleRemoveToast}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="Error" /> }
      {message.type === 'success' && <img src={checkCircle} alt="Success" /> }
      <strong>{message.text}</strong>
    </Container>
  );
}

export default memo(ToastMessage);

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};

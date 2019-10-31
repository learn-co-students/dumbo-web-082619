import React from 'react';

const Message = props => (<p>
      { props.message.text }
      <button onClick={ event => props.incrementEyes(props.message.id) }>
       👁{ props.message.eyes }
      </button>
    </p>)

export default Message
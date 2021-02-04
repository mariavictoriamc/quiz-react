import React from 'react';
import Widget from '../Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>Preparando o board...</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
        src="https://media.giphy.com/media/wJrKOhVr9QRIv8QL0k/giphy.gif"
      />
    </Widget>
  );
}

export default LoadingWidget;

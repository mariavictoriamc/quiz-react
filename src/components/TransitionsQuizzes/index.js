import React from 'react';
import Widget from '../Widget';

function TransitionsQuizzes({ projectName, gitHubUser }) {
  return (
    <Widget>
      <Widget.Header>
        <h2>
          {`Hackeando ${projectName} de ${gitHubUser}...`}
        </h2>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
        src="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"
      />
    </Widget>
  );
}

export default TransitionsQuizzes;

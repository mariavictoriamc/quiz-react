import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({
  dbExterno, urlUserGit, projectName, gitHubUser,
}) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
        urlUserGit={urlUserGit}
        projectName={projectName}
        gitHubUser={gitHubUser}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');
  const urlUserGit = `https://github.com/${gitHubUser}`;

  const dbExterno = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha ao pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((errServer) => {
      throw new Error(errServer);
    });

  return {
    props: {
      dbExterno,
      projectName,
      gitHubUser,
      urlUserGit
    }
  };
}

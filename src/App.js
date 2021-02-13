import styled from 'styled-components';

import useScoreBoard from './utils/useScoreBoard';
import Match from './components/Match';
import Summary from './components/Summary';

const AppStyles = styled.div`
  text-align: center;
`;

const App = () => {
  const {scores, startMatch, updateMatch, finishMatch, summary, getSummary} = useScoreBoard();
  
  return (
    <>
      <AppStyles>
        <h1>Football Live Score Board</h1>
        {scores && scores.map((match, index) => 
          <Match key={index} match={{...match, index}} startMatch={startMatch} updateMatch={updateMatch} finishMatch={finishMatch} />
        )}
        {summary && <Summary summary={summary} getSummary={getSummary} />}
      </AppStyles>
    </>
  );
}

export default App;

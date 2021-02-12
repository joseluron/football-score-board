import styled from 'styled-components';

import useScoreBoard from './utils/useScoreBoard';
import Match from './components/Match';

const AppStyles = styled.div`
  text-align: center;
`;

const App = () => {
  const {scores, startMatch} = useScoreBoard();
  
  return (
    <>
      <AppStyles>
        <h1>Football Live Score Board</h1>
        {scores && scores.map((match, index) => 
          <Match key={index} match={{...match, index}} startMatch={startMatch} />
        )}
      </AppStyles>
    </>
  );
}

export default App;

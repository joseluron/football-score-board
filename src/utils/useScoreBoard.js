import { useState } from 'react';

const useScoreBoard = () => {
    const [scores, setScores] = useState([
        {homeTeam: 'Spain', awayTeam: 'Poland', started: false, homeTeamScore: 0, awayTeamScore: 0},
        {homeTeam: 'Mexico', awayTeam: 'Canada', started: false, homeTeamScore: 0, awayTeamScore: 0},
        {homeTeam: 'Argentina', awayTeam: 'Italy', started: false, homeTeamScore: 0, awayTeamScore: 0}
    ]);

    const startMatch = (matchIndex) => {
        const allScores = [...scores];
        const startedMatch = {
            ...allScores[matchIndex],
            started: true
        };
        allScores[matchIndex] = startedMatch;
        setScores(allScores);
    }

    return {scores, startMatch};
}

export default useScoreBoard;
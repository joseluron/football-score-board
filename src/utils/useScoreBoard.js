import { useState } from 'react';

const useScoreBoard = () => {
    const [scores, setScores] = useState([
        {homeTeam: 'Spain', awayTeam: 'Poland', started: false, homeTeamScore: 0, awayTeamScore: 0},
        {homeTeam: 'Mexico', awayTeam: 'Canada', started: false, homeTeamScore: 0, awayTeamScore: 0},
        {homeTeam: 'Argentina', awayTeam: 'Italy', started: false, homeTeamScore: 0, awayTeamScore: 0},
        {homeTeam: 'Brazil', awayTeam: 'Peru', started: false, homeTeamScore: 0, awayTeamScore: 0},
        {homeTeam: 'Germany', awayTeam: 'France', started: false, homeTeamScore: 0, awayTeamScore: 0},
        {homeTeam: 'Japan', awayTeam: 'Portugal', started: false, homeTeamScore: 0, awayTeamScore: 0}
    ]);
    const [summary, setSummary] = useState([]);

    const startMatch = (matchIndex) => {
        const allScores = [...scores];
        const startedMatch = {
            ...allScores[matchIndex],
            started: true,
            timestamp: Date.now()
        };
        allScores[matchIndex] = startedMatch;
        setScores(allScores);
    }

    const updateMatch = (matchIndex, scoredTeam) => {
        const allScores = [...scores];
        const updatedMatch = {
            ...allScores[matchIndex],
            [`${scoredTeam}TeamScore`]: allScores[matchIndex][`${scoredTeam}TeamScore`] + 1,
            timestamp: Date.now()
        }
        allScores[matchIndex] = updatedMatch;
        setScores(allScores);
    }

    const finishMatch = (matchIndex) => {
        setScores([
            ...scores.slice(0, matchIndex),
            ...scores.slice(matchIndex +1),
        ]);
    }

    const getSummary = () => {
        
        const summary = [...scores].filter(match => match.started).sort((a, b) => ((b.homeTeamScore + b.awayTeamScore) - (a.homeTeamScore + a.awayTeamScore)) || (b.timestamp - a.timestamp));
        setSummary(summary);
    }

    return {scores, startMatch, updateMatch, finishMatch, summary, getSummary};
}

export default useScoreBoard;
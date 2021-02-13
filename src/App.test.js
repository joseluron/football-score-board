import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app title', () => {
  render(<App />);
  const appTitle = screen.getByText(/Football Live Score Board/i);
  expect(appTitle).toBeInTheDocument();
});

test('Starts a match', () => {
    render(<App />);
    const allStartButtons = screen.getAllByText(/Start Match/i);
    allStartButtons[0].click();
    
    const matchScores = screen.getAllByText(/0/);

    expect(matchScores.length).toBe(2);
});

test('Starts all matches', () => {
    render(<App />);
    const allStartButtons = screen.getAllByText(/Start Match/i);
    allStartButtons.forEach(button => button.click());
    
    const matchScores = screen.getAllByText(/0/);

    expect(matchScores.length).toBe(12);
});

test('Gets a summary of a started match', () => {
    render(<App />);
    const allStartButtons = screen.getAllByText(/Start Match/i);
    allStartButtons[0].click();

    const homeTeamGoalButton = screen.getByText(/Home Team Goal/i);
    homeTeamGoalButton.click();
    const getSummaryButton = screen.getByText(/Get Summary/i);
    getSummaryButton.click();

    const spainScores = screen.getAllByText(/Spain/i);
    expect(spainScores.length).toBe(2);
})
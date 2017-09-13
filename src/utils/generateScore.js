export default function generateScore(currentScore, scoreType) {
    let todo = (scoreType === "upVote") ? 1 : -1;
    let newScore = (currentScore + todo);
    return newScore === 0 ? todo : newScore;
}
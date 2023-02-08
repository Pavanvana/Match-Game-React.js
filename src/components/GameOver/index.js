import './index.css'

const GameOver = props => {
  const {score, playAgain} = props
  return (
    <div className="score-card">
      <img
        className="trophy-image"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="text">YOUR SCORE</p>
      <p className="result-score">{score}</p>
      <button className="reset-button" type="button" onClick={playAgain}>
        <img
          className="reset-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default GameOver

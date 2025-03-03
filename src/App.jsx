import Player from "./components/Player.jsx";
import TargetChallenge from "./components/TargetChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TargetChallenge title="Easy" targetTime={1} />
        <TargetChallenge title="Not Easy" targetTime={5} />
        <TargetChallenge title="Getting Tough" targetTime={10} />
        <TargetChallenge title="Pro's only" targetTime={15} />
      </div>
    </>
  );
}

export default App;

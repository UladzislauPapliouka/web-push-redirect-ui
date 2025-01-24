import './App.css';
import {NotAllowed} from "./components/NotAllowed";
import {NotInPWA} from "./components/NotInPWA";
import {InPWA} from "./components/InPWA";
import {isPWA} from "./utils/is-pwa";
import {isIPhone} from "./utils/is-iphone";

function App() {
  if (!isIPhone()) {
    return <NotAllowed/>
  }

  if (!isPWA()) {
    console.error('App opened not in standalone mode');
    return <NotInPWA/>
  }

  return (
    <InPWA/>
  );
}

export default App;

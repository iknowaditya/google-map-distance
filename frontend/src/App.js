import React from "react";
import BingMapsReact from "bingmaps-react";

// const [pushPins, setPushPins] = useState([]);
//   const [mapReady, setMapReady] = useState(false);

function App() {
  return (
    <div className="App">
      <BingMapsReact
        credentialsKey="AtPuXmGqFEabIB2JA0gZGbMHt7pHthng0jCC3R50-IAc-rmIKr-747EOclNaY1SR"
        center={[13.0827, 80.2707]}
      />
    </div>
  );
}

export default App;

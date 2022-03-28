import SearchField from './SearchField.js';
import SumType from './SumType';
import SampleGraph from './SampleGraph';
import background from './MathBackground.jpeg';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <header className="App-header">
        <h1>RiemannCalculator</h1>
        <p>
          Version 2.0; new and improved!
        </p>
        <p>
          The RiemannCalculator allows you to enter a function of your choice (limited to polynomials at the moment) and graph the chosen Riemann sum for the given equation. You can choose from left-hand, right-hand, and midpoint sums!
        </p>
      </header>
      <SearchField />
      <SumType />
      <SampleGraph />
    </div>
  );
}

export default App;

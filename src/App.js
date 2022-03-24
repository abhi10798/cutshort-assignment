import './App.css';
import Header  from './components/Header/Header';
import TimeLineBar from './components/TimelineBar/TimelineBar';
import FormOne from './components/Forms/FormOne/FormOne';
import FormTwo from './components/Forms/FormTwo/FormTwo';
import FormThree from './components/Forms/FormThree/FormThree';
import FormFour from './components/Forms/FormFour/FormFour';

import { useState } from 'react';

function App() {
  const [steps, setSteps] = useState(1);

  const handleStepChange = () => {
    if (steps < 4) {
      setSteps((prev) => (prev += 1));
    } else {
      window.alert("Uh Oh. That's the last step. Reload to start over");
    }
  };

  return (
    <div className="App">
       <div className="flex flex-col items-center justify-center min-h-screen w-full">
          <Header />
          <TimeLineBar onChange={setSteps} step={steps} />
          <main className="w-full">
            {
              {
                1: <FormOne onChange={() => handleStepChange()} />,
                2: <FormTwo onChange={() => handleStepChange()} />,
                3: <FormThree onChange={() => handleStepChange()} />,
                4: <FormFour onChange={() => handleStepChange()} />,
              }[steps.toString()]
            }
          </main>
       </div>
    </div>
  );
}

export default App;

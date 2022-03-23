import './App.css';
import Header  from './components/Header/Header';
import TimeLineBar from './components/TimelineBar/TimelineBar';
import TemplateOne from './components/Templates/TemplateOne/TemplateOne';
import TemplateTwo from './components/Templates/TemplateTwo/TemplateTwo';
import TemplateThree from './components/Templates/TemplateThree/TemplateThree';
import TemplateFour from './components/Templates/TemplateFour/TemplateFour';

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
                1: <TemplateOne onChange={() => handleStepChange()} />,
                2: <TemplateTwo onChange={() => handleStepChange()} />,
                3: <TemplateThree onChange={() => handleStepChange()} />,
                4: <TemplateFour onChange={() => handleStepChange()} />,
              }[steps.toString()]
            }
          </main>
       </div>
    </div>
  );
}

export default App;

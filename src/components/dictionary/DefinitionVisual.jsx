import { useState } from 'react';
import FrequencyInfo from '../dictionary/FrequencyInfo';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import 'chart.js/auto';

export default function DefinitionVisual({ barData, graphOptions }) {
  const [isInfo, setIsInfo] = useState(false);

  Chart.defaults.font.size = 20;
  Chart.defaults.color = '#ffffff';

  return (
    <div className="rounded border border-secondary my-5">
      <div
        className="d-flex rounded px-3"
        style={{ maxWidth: '768', backgroundColor: 'var(--bs-darkest)' }}
      >
        <div>
          <h4 className="mt-2">Word Frequency</h4>
        </div>
        <div className="ml-auto align-items-center">
          <button
            type="button"
            className="btn btn-dark btn-sm mt-2"
            onClick={() => {
              isInfo ? setIsInfo(false) : setIsInfo(true);
            }}
          >
            Explain
          </button>
        </div>
      </div>
      {isInfo ? <FrequencyInfo /> : <></>}
      <Bar className="p-4" data={barData} options={graphOptions}></Bar>
    </div>
  );
}

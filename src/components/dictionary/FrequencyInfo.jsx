export default function FrequencyInfo() {
  return (
    <div className="p-3" style={{ backgroundColor: 'var(--bs-dark)' }}>
      <h3>Zipf</h3>
      <p className="mt-2">
        The Zipf scale is a standardized frequency measure scale. The scale is
        logarithmic and roughly goes from 1 to 7. A Zipf value of 1 corresponds
        to a very low frequency word, while a Zipf value of 7 corresponds to a
        very high frequency word. The calculation of Zipf values is simply log
        <sub>10</sub>(frequency per billion words).
      </p>
      <table style={{ minWidth: '300px' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--bs-darkest)' }}>
            <th className="px-3 pb-1">Zipf</th>
            <th className="pb-1">Frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pl-4">1</td>
            <td>1 / 100 million</td>
          </tr>
          <tr style={{ backgroundColor: 'var(--bs-darker)' }}>
            <td className="pl-4">2</td>
            <td>1 / 10 million</td>
          </tr>
          <tr>
            <td className="pl-4">3</td>
            <td>1 / 100,000</td>
          </tr>
          <tr style={{ backgroundColor: 'var(--bs-darker)' }}>
            <td className="pl-4">4</td>
            <td>1 / 10,000</td>
          </tr>
          <tr>
            <td className="pl-4">5</td>
            <td>1 / 1,000</td>
          </tr>
          <tr style={{ backgroundColor: 'var(--bs-darker)' }}>
            <td className="pl-4">6</td>
            <td>1 / 1,000</td>
          </tr>
          <tr>
            <td className="pl-4">7</td>
            <td>1 / 100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

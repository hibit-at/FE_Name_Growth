import React, { useState } from 'react'; // 追加: useStateをインポート
import NameForm from './NameForm';
import RadarChartComponent from './RadarChartComponent';
import './App.css';

function App() {
  const [submittedName, setSubmittedName] = useState(''); // 追加: 送信された名前を保持する状態

  const handleNameSubmit = (name) => { // 追加: 送信された名前を受け取る関数
    setSubmittedName(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ファイアーエムブレムっぽい名前から成長率を推定するやつ</h1>
        <NameForm onNameSubmit={handleNameSubmit} /> {/* 変更: handleNameSubmitをpropsとして渡す */}
        {submittedName && <RadarChartComponent />} {/* 変更: 送信された名前がある場合にRadarChartComponentを表示 */}
      </header>
    </div>
  );
}

export default App;

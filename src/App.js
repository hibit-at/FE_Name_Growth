import React, { useState } from 'react'; // 追加: useStateをインポート
import NameForm from './NameForm';
import RadarChartComponent from './RadarChartComponent';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import './App.css';

function App() {
  const [submittedName, setSubmittedName] = useState(''); // 追加: 送信された名前を保持する状態
  const [showChart, setShowChart] = useState(false); // 追加: チャートの表示状態を管理


  const handleNameSubmit = (name) => { // 追加: 送信された名前を受け取る関数
    setSubmittedName(name);
  };

  const handleClear = () => {
    setShowChart(false); // 追加: チャートを非表示にする
    setSubmittedName(''); // 追加: 送信された名前をリセットする
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ファイアーエムブレムっぽい名前から成長率を推定するやつ</h1>
        <NameForm onNameSubmit={handleNameSubmit} /> {/* 変更: handleNameSubmitをpropsとして渡す */}
        {submittedName && <div>入力された名前：{submittedName}</div>}
        {submittedName && <RadarChartComponent />} {/* 変更: 送信された名前がある場合にRadarChartComponentを表示 */}
        {submittedName && ( // 追加: チャートが表示されている場合に「消去」ボタンを表示
            <>
            <div>
            <TwitterShareButton
              url={window.location.href}
              title={`ファイアーエムブレムっぽい名前から成長率を推定するやつで、${submittedName}の成長率を推定しました！`}
              hashtags={['ファイアーエムブレム', '成長率']}
              className="mr-2"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <button onClick={handleClear} className="btn btn-danger">
            結果を消去
          </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

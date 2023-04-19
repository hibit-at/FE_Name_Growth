import React, { useState } from "react";
import NameForm from "./NameForm";
import RadarChartComponent from "./RadarChartComponent";
import BarChartComponent from "./BarChartComponent";
import { TwitterIcon, TwitterShareButton } from "react-share";
import { disclaimer } from "./disclaimer";
import { Tab, Tabs } from "react-bootstrap"; // 追加: TabsとTabをインポート
import axios from "axios";
import "./App.css";
import TextComponents from "./TextComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faChartPie } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [submittedName, setSubmittedName] = useState("");
  const [chartData, setChartData] = useState([]); // 追加: chartDataを管理する状態
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sex, setSex] = useState("");

  const handleNameSubmit = async (name) => {
    setLoading(true); // 追加: APIリクエスト前にloadingをtrueに設定

    try {
      // 追加: データ取得ロジック
      const response = await axios.post(
        "https://3e8ydcjiwe.execute-api.us-east-2.amazonaws.com/fe-name/fe-name",
        { name: name },
      );
      const data = response.data;
      setSex(data.sex);
      setChartData([
        { name: "HP", value: data.HP },
        { name: "力", value: data.POW },
        { name: "魔力", value: data.MAG },
        { name: "速さ", value: data.TEC },
        { name: "技", value: data.SPD },
        { name: "幸運", value: data.LUC },
        { name: "防御", value: data.DEF },
        { name: "魔防", value: data.RES },
      ]);
      setErrorMessage("");
      setSubmittedName(name); // 変更: 成功した場合にのみ提出された名前を設定
    } catch (error) {
      console.error("リクエストに失敗しました:", error);
      setErrorMessage("データ取得に失敗しました。お手数ですが、もう一度お試しください");
    } finally {
      setLoading(false); // 追加: APIリクエスト後にloadingをfalseに設定
    }
  };

  const handleClear = () => {
    setSubmittedName("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>名前からファイアーエムブレムっぽい成長率を推定するやつ</h1>
        <NameForm onNameSubmit={handleNameSubmit} loading={loading} />
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        {submittedName && <div>ユニット名：{submittedName}　性別：{sex}</div>}
        {submittedName && (
          <Tabs defaultActiveKey="radar" id="chart-tabs">
            <Tab eventKey="radar" title={<FontAwesomeIcon icon={faChartPie} />}>
              <div style={{ minHeight: "500px" }}>
                {/* 最小高さを設定 */}
                <RadarChartComponent
                  name={submittedName}
                  chartData={chartData}
                />
              </div>
            </Tab>
            <Tab eventKey="bar" title={<FontAwesomeIcon icon={faChartBar} />}>
              <div style={{ minHeight: "500px" }}>
                {/* 最小高さを設定 */}
                <BarChartComponent name={submittedName} chartData={chartData} />
              </div>
            </Tab>
          </Tabs>
        )}
        {submittedName && <TextComponents data={chartData} />}
        {/* 変更: submittedNameを渡す */}
        {submittedName && (
          <>
            <div>
              <TwitterShareButton
                url={window.location.href}
                // title={`「名前からファイアーエムブレムっぽい成長率を推定するやつ」で、ユニット名「${submittedName}」の成長率を推定しました！ 合計: ${total} %`} // totalを追加
                title={`${submittedName}（${sex}）の成長率：\n${
                  chartData.map((item) => `${item.name}: ${item.value}%`).join(
                    ", ",
                  )
                } `}
                hashtags={["FEっぽく成長率を推定"]}
                className="mr-2"
              >
                <TwitterIcon size={128} round />
              </TwitterShareButton>
            </div>
            <button onClick={handleClear} className="btn btn-danger">
              結果を消去
            </button>
          </>
        )}
        {!submittedName && ( // 変更: 名前が提出されていない場合にdisclaimerを表示する
          <p className="disclaimer-text">
            {disclaimer.map((item, index) => <li key={index}>{item}</li>)}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;

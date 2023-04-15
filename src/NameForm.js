import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./NameForm.css";
import { Spinner } from "react-bootstrap";

const NameForm = ({ onNameSubmit, loading }) => { // 追加: onNameSubmitをpropsとして受け取る
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [result, setResult] = useState(""); // 追加: 結果表示用の状態

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
    setIsValid(isValidName(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      onNameSubmit(name); // 変更: 送信された名前を親コンポーネントに渡す
    } else {
      setResult("名前は1文字以上6文字以内の全角カタカナで入力してください。");
    }
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const isValidName = (input) => {
    const regex = /^[\u30A1-\u30F4ー]{1,6}$/;
    return regex.test(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="名前（例：マルス）"
          />
        </label>
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid}
          className="popButton"
        >
          送信
        </Button>
        {loading && ( // 追加: loadingステートがtrueのときにスピナーを表示
          <div className="ml-2 d-inline-block">
            <Spinner animation="border" size="sm" />
          </div>
        )}
      </form>
      <p>{result}</p> {/* 結果表示用の要素を追加 */}
    </div>
  );
};

export default NameForm;

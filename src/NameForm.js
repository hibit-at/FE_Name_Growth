import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const NameForm = ({ onNameSubmit }) => { // 追加: onNameSubmitをpropsとして受け取る
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [result, setResult] = useState(''); // 追加: 結果表示用の状態

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
      setResult('名前は1文字以上6文字以内の全角カタカナで入力してください。');
    }
  };

  const isValidName = (input) => {
    const regex = /^[\u30A1-\u30F4ー]{1,6}$/;
    return regex.test(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          名前：
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <Button type="submit" variant="primary" disabled={!isValid}>
          送信
        </Button>
      </form>
      <p>{result}</p> {/* 結果表示用の要素を追加 */}
    </div>
  );
};

export default NameForm;

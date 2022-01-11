import "./styles.css";
import React, { useState } from "react";

const InputRadio = () => {
  //現在選択されているラジオボタンの状態とそれを更新する関数
  const [checkedValue, setCheckedValue] = useState("赤");

  //onChangeハンドラー配下でcheckedValueを変更する関数
  const handleChange = (e) => setCheckedValue(e.target.value);

  return (
    <div className="App">
      <p>
        現在選択されている値 :<b>{checkedValue}</b>
      </p>

      <label>
        <input
          type="radio"
          value="赤"
          onChange={handleChange}
          checked={checkedValue === "赤"}
        />
        赤
      </label>

      <label>
        <input
          type="radio"
          value="青"
          onChange={handleChange}
          checked={checkedValue === "青"}
        />
        青
      </label>

      <label>
        <input
          type="radio"
          value="黄"
          onChange={handleChange}
          checked={checkedValue === "黄"}
        />
        黄
      </label>
    </div>
  );
};

export default function App() {
  return <InputRadio />;
}

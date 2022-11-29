import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export const CharacterCounter = function () {
  return (
    <div>
      <h2 className="headingCounter">Character Counter</h2>
      <div className="characterCount">
        <TextInput />
        <CharacterCount />
      </div>
    </div>
  );
};

export const TextInput = function () {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        <br />
        Echo: {text}
      </div>
    </div>
  );
};

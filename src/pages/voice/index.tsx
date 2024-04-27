"use client"
import classes from './index.module.scss';
import { useState } from "react";

type InputFields = {
  messageText: string;
}

const updateInputFields = (
  inputFields: InputFields,
  messageText: string
): InputFields => {
  return {
    ...inputFields,
    messageText: messageText,
  };
}

export default function Voice() {
  const [inputFields, setInputFields] = useState<InputFields>({
    messageText: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputFields((prevInputFields) => updateInputFields(prevInputFields, value));
  };

  const playText = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`/api/textvoice?text=${encodeURIComponent(inputFields.messageText)}`);

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
    } else {
      console.error("Error fetching audio:", response.statusText);
    }
  }

  return (
    <div className={classes.inputText}>
      <form onSubmit={playText}>
        <input
          type="text"
          name="messageText"
          placeholder="Enter a message"
          value={inputFields.messageText}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
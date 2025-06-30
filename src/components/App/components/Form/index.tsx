import { useState, type ChangeEvent } from 'react';

import { convertText } from './index.helpers';
import css from './index.module.scss';
import type { FormProps } from './index.types';

const Form = ({ onChangeResult }: FormProps) => {
  const [text, setText] = useState('');

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);

    const newText = convertText(value);
    onChangeResult(newText);
  };

  return (
    <textarea
      placeholder="Write some text here..."
      rows={10}
      className={css.textarea}
      value={text}
      onChange={handleChangeText}
    />
  );
};

export default Form;

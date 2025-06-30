import { useCallback, useEffect, useState, type ChangeEvent } from 'react';

import { convertText } from './index.helpers';
import css from './index.module.scss';
import type { FormProps } from './index.types';

const Form = ({ onChangeResult }: FormProps) => {
  const [text, setText] = useState('');

  const handleConvert = useCallback(
    (value: string) => {
      setText(value);
      const newText = convertText(value);
      onChangeResult(newText);
    },
    [onChangeResult]
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    const text = url.searchParams.get('t') || '';
    if (text) {
      handleConvert(text);
    }
  }, [handleConvert]);

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    handleConvert(value);
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

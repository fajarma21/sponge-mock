import { useState } from 'react';

import copyBtn from '@/assets/copy.svg';

import css from './index.module.scss';
import type { CopyBtnProps } from './index.types';

const CopyBtn = ({ text }: CopyBtnProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copied) {
      navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };
  return (
    <button
      type="button"
      className={css.copyBtn}
      data-copied={copied || undefined}
      onClick={handleCopy}
    >
      {copied ? (
        'Copied!'
      ) : (
        <>
          <img src={copyBtn} alt="Copy Text" />
          <p>Copy</p>
        </>
      )}
    </button>
  );
};

export default CopyBtn;

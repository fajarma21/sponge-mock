import spbob from '@/assets/spbob-meme.png';

import { SPBOB_LINK } from './index.constants';
import css from './index.module.scss';
import type { ResultProps } from './index.types';

const Result = ({ children, text }: ResultProps) => {
  return (
    <div className={css.resultContainer}>
      <div className={css.bubbleContainer}>
        <div className={css.result} data-text={text} />
        {children}
      </div>
      <div className={css.image}>
        <a href={SPBOB_LINK} target="_blank">
          <img src={spbob} alt="Spongebob meme" width={300} />
        </a>
      </div>
    </div>
  );
};

export default Result;

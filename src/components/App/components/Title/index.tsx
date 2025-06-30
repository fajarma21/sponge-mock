import { useState } from 'react';

import mockText from '@/helpers/mockText';

import { TITLE } from './index.constants';
import css from './index.module.scss';

const Title = () => {
  const [title, setTitle] = useState(TITLE);

  const handleMouseHover = () => {
    const newTitle = mockText(title);
    setTitle(newTitle);
  };

  const handleMouseLeave = () => {
    setTitle(TITLE);
  };

  return (
    <h1
      className={css.title}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
    >
      {title}
    </h1>
  );
};

export default Title;

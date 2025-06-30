import { useState } from 'react';

import CopyBtn from './components/CopyBtn';
import Form from './components/Form';
import Result from './components/Result';
import Title from './components/Title';
import css from './index.module.scss';

const App = () => {
  const [result, setResult] = useState('');

  return (
    <div className={css.root}>
      <Title />
      <Form onChangeResult={setResult} />
      {result && (
        <Result text={result}>
          <CopyBtn text={result} />
        </Result>
      )}
    </div>
  );
};

export default App;

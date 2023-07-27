import React from 'react';
import MyParadraph from './MyParadraph';

function DemoOutput(props) {
  console.log('Demo')
  return (
    <MyParadraph>{props.show ? 'This is new!' : ''}</MyParadraph>
  );
}

export default React.memo(DemoOutput);
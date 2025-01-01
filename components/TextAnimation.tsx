import React from 'react'
import { TypeAnimation } from 'react-type-animation';

interface  TextProp {
  text1: string
  text2:  string
}

const TextAnimation = ({ text1, text2 }: TextProp) => {
  return (
    <TypeAnimation
      sequence={[
        text1,
        2000, 
        '',
        500, 
        text2,
        2000, 
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TextAnimation
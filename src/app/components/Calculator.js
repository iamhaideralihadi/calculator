// components/Calculator.js
import { useState } from 'react';
import Calculator from '@/components/Calculator';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Simple calculator app using Next.js and Tailwind CSS" />
      </Head>
      <Calculator />
    </div>
  );
};

export default Calculator;

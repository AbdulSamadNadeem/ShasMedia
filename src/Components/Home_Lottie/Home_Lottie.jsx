import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home_Lottie = () => {
  return (
    <div style={containerStyle}>
      <DotLottieReact
        style={lottieStyle}
        src="https://lottie.host/999f44fa-c5fe-4a34-b074-616bd3e82b1d/PIaJLEsdSP.lottie"
        loop
        autoplay
      />
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  padding: '20px',
  boxSizing: 'border-box',
};

const lottieStyle = {
  width: '100%',
  maxWidth: '600px',
  height: 'auto',
};

export default Home_Lottie;

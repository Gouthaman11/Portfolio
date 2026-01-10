import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  
  const texts = [
    'Initializing...',
    'Loading components...',
    'Preparing portfolio...',
    'Almost ready...',
    'Welcome!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 20) setLoadingText(texts[0]);
    else if (progress < 40) setLoadingText(texts[1]);
    else if (progress < 60) setLoadingText(texts[2]);
    else if (progress < 90) setLoadingText(texts[3]);
    else setLoadingText(texts[4]);
  }, [progress]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* Animated Code Logo */}
        <div className="loader-code-block">
          <div className="code-line">
            <span className="code-keyword">const</span>
            <span className="code-variable"> portfolio</span>
            <span className="code-operator"> = </span>
            <span className="code-keyword">await</span>
            <span className="code-function"> load</span>
            <span className="code-bracket">()</span>
            <span className="code-cursor">|</span>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="loader-circle-wrapper">
          <svg className="loader-circle" viewBox="0 0 100 100">
            <circle className="circle-bg" cx="50" cy="50" r="45" />
            <circle 
              className="circle-progress" 
              cx="50" 
              cy="50" 
              r="45"
              style={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
            />
          </svg>
          <div className="loader-percentage">{progress}%</div>
        </div>

        {/* Loading Text */}
        <p className="loader-message">{loadingText}</p>

        {/* Animated Dots */}
        <div className="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Background Effects */}
      <div className="loader-bg">
        <div className="loader-grid"></div>
        <div className="loader-orb orb-1"></div>
        <div className="loader-orb orb-2"></div>
        <div className="loader-orb orb-3"></div>
        <div className="loader-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;

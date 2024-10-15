import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [spaceImageIndex, setSpaceImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const spaceImageInterval = setInterval(() => {
      setSpaceImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(spaceImageInterval);
    };
  }, []);

  const skyOpacity = Math.min(scrollPosition / 1000, 1);

  return (
    <div className="App">
      <div 
        className="background space-background"
        style={{
          backgroundImage: `url(${spaceImageIndex === 0 ? 'https://i.imgur.com/0Eu7KFa.png' : 'https://i.imgur.com/EcI90S9.png'})`,
          opacity: 1 - skyOpacity,
        }}
      />
      <div 
        className="background sky-background"
        style={{
          backgroundImage: `url('https://i.imgur.com/O0e464q.png')`,
          opacity: skyOpacity,
        }}
      />

      <div className="content">
        <header>
          <h1>Hopdog</h1>
          <nav>
            <button className="nav-button">Home</button>
            <button className="nav-button">Telegram</button>
          </nav>
        </header>
        
        <main>
          <section className="welcome-section">
            <img src="https://imgur.com/gbVwxYb" alt="Hopdog Logo" className="logo" />
            <h2 className="text-shadow">Welcome to Hopdog</h2>
            <p className="text-shadow description">The next generation meme coin on the blockchain.</p>
            <button className="buy-button">Buy Hopdog</button>
          </section>

          <section className="info-section">
            <div className="animate-float">
              <h2 className="text-shadow">How to Buy</h2>
              <div className="content-box">
                <ol>
                  <li>Connect your wallet to the Ethereum network</li>
                  <li>Visit our official swap page (link coming soon)</li>
                  <li>Enter the amount of ETH you want to swap for HOPDOG</li>
                  <li>Confirm the transaction in your wallet</li>
                  <li>Once confirmed, you'll receive your HOPDOG tokens</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="info-section">
            <div className="animate-float-delayed">
              <h2 className="text-shadow">Tokenomics</h2>
              <div className="grid">
                <div className="content-box">
                  <h3>Total Supply</h3>
                  <p>1,000,000,000 HOPDOG</p>
                </div>
                <div className="content-box">
                  <h3>Initial Distribution</h3>
                  <p>50% Liquidity Pool</p>
                  <p>30% Community Rewards</p>
                  <p>20% Team & Development</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="dog-container">
        <img src="https://i.imgur.com/UicMZyy.png" alt="Hopdog mascot" className="dog-image" style={{ opacity: 1 - skyOpacity }} />
        <img src="https://i.imgur.com/ZiCFTwK.png" alt="Hopdog mascot alternate" className="dog-image" style={{ opacity: skyOpacity }} />
      </div>
    </div>
  );
}

export default App;
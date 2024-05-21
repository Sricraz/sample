import React from 'react';
import backgroundImage from './background.jpg'; // Import the background image
const styles = {
  container: {
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '100vh', // Adjust the height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    fontSize: '2rem',
  },
};

function Home() {
  return (
    <div style={styles.container}>
      <h3>Welcome to Routing</h3>
    </div>
  );
}

export default Home;

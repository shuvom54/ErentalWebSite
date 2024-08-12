import React, { useState } from 'react';

const NewLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); 
  };

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setIsSubscribed(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', width: '80%', margin: '0 auto' }}>
      {isSubscribed ? (
        <button style={{ backgroundColor: '#abddea', border: 'none', padding: '15px 20px', borderRadius: '5px', cursor: 'not-allowed', width: '100%' }}>
          You are already subscribed
        </button>
      ) : (
        <>
          <h1>Get Exclusive Offers On your Email</h1>
          <p style={{ marginLeft:'95px', fontWeight:'bold',fontSize:'17px',paddingTop:'30px'}}>Subscribe to our newsletter.......... </p>
          {/* <p style={{ marginLeft:'70px'}}>And stay updated </p> */}
          <div>
            <input
              type="email"
              placeholder='Your Email Id'
              value={email}
              onChange={handleEmailChange}
              style={{ padding: '10px', marginRight: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '65%' }}
            />
            <button onClick={handleSubscribe} style={{fontSize:'20px', padding: '10px 20px', backgroundColor: '#abddea', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Subscribe
            </button>
          </div>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </>
      )}
    </div>
  );
}

export default NewLetter;

import React from 'react';

function HomePage() {
  return (
    <div className='container'>
      <div className='content'>

      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>🚍 Kerala Bus API 🚍</h1>
        <p>Your gateway to managing Kerala bus information.</p>
      </header>

      <section>
        <h2>Base URL</h2>
        <p>
          <strong>🔗</strong> <a href="https://kerala-bus.onrender.com/api/owner" target="_blank" rel="noopener noreferrer">https://kerala-bus.onrender.com/api/owner</a>
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Endpoints</h2>

        <div style={{ marginBottom: '20px' }}>
          <h3>📝 Register</h3>
          <p>
            <strong>Route:</strong> /register<br />
            <strong>Method:</strong> POST<br />
            <strong>Fields:</strong> emailOrPhone, password
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>🔑 Login</h3>
          <p>
            <strong>Route:</strong> /login<br />
            <strong>Method:</strong> POST<br />
            <strong>Fields:</strong> emailOrPhone, password
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>🚌 Add Bus</h3>
          <p>
            <strong>Route:</strong> /add-bus<br />
            <strong>Method:</strong> POST<br />
            <strong>Fields:</strong> busName, busNumber, busColor, busType, ownerName, ownerPhone, assistentPhone<br />
            <strong>Authorization:</strong> Pass token in Authorization header
          </p>
        </div>

        <div>
          <h3>🔍 Get Bus Details</h3>
          <p>
            <strong>Route:</strong> /get-bus/<code>&#123;busId&#125;</code><br />
            <strong>Method:</strong> GET<br />
            <strong>Params:</strong> busId (req.params)<br />
            <strong>Authorization:</strong> Pass token in Authorization header
          </p>
        </div>
      </section>

      <footer style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        <p>Powered by Kerala Bus API</p>
      </footer>
      </div>
    </div>
  );
}

export default HomePage;
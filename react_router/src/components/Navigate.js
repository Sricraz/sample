import React from 'react';
import { Navigate } from 'react-router-dom';

function MyComponent() {
  // Some condition for redirection
  const shouldRedirect = true;

  // Redirect to a specific route if the condition is met
  return shouldRedirect ? <Navigate to="/new-route" /> : <div>Normal content</div>;
}

export default MyComponent;

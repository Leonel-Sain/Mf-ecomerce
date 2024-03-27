import React from 'react'

const Login = ({ onLogin }) => {
  const handleLoginSubmit = (event) => {
    
    event.preventDefault();
    onLogin(); 
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="submit" className="btn btn-primary me-2">Login</button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => onLogin()}>Continuar sin registrarse</button>
      </form>
    </div>
  );
};
export default Login
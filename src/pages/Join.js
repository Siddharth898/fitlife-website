import React, { useState } from 'react';
import './Join.css';

const Join = () => {
  const [activeTab, setActiveTab] = useState('signin');
  
  // Form states
  const [signinForm, setSigninForm] = useState({
    email: '',
    password: ''
  });
  
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    fitnessGoal: '',
    agreeTerms: false
  });
  
  // Error states
  const [signinErrors, setSigninErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  
  // Success states
  const [signinSuccess, setSigninSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  
  // Handle signin form changes
  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    setSigninForm({
      ...signinForm,
      [name]: value
    });
  };
  
  // Handle register form changes
  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // Validate signin form
  const validateSigninForm = () => {
    const errors = {};
    
    if (!signinForm.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(signinForm.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!signinForm.password) {
      errors.password = 'Password is required';
    }
    
    return errors;
  };
  
  // Validate register form
  const validateRegisterForm = () => {
    const errors = {};
    
    if (!registerForm.fullName) {
      errors.fullName = 'Full name is required';
    }
    
    if (!registerForm.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!registerForm.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(registerForm.phone.replace(/[^0-9]/g, ''))) {
      errors.phone = 'Phone number must be 10 digits';
    }
    
    if (!registerForm.password) {
      errors.password = 'Password is required';
    } else if (registerForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (!registerForm.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (registerForm.password !== registerForm.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    if (!registerForm.fitnessGoal) {
      errors.fitnessGoal = 'Please select a fitness goal';
    }
    
    if (!registerForm.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    return errors;
  };
  
  // Handle signin form submission
  const handleSigninSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateSigninForm();
    setSigninErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      // In a real app, you would handle authentication here
      console.log('Signin form submitted:', signinForm);
      setSigninSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setSigninSuccess(false);
      }, 3000);
    }
  };
  
  // Handle register form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateRegisterForm();
    setRegisterErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      // In a real app, you would handle registration here
      console.log('Register form submitted:', registerForm);
      setRegisterSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setRegisterSuccess(false);
        setActiveTab('signin');
      }, 3000);
    }
  };
  
  return (
    <main>
      <section className="join section">
        <div className="container">
          <h2 className="section-title">Join <span>Royal Fitness</span></h2>
          
          <div className="form-container">
            <div className="form-tabs">
              <button 
                className={`form-tab ${activeTab === 'signin' ? 'active' : ''}`}
                onClick={() => setActiveTab('signin')}
              >
                Sign In
              </button>
              <button 
                className={`form-tab ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>
            
            {activeTab === 'signin' ? (
              <div className="form-content">
                {signinSuccess && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    Successfully signed in!
                  </div>
                )}
                
                <form onSubmit={handleSigninSubmit}>
                  <div className="form-group">
                    <label htmlFor="signin-email">Email</label>
                    <input
                      type="email"
                      id="signin-email"
                      name="email"
                      value={signinForm.email}
                      onChange={handleSigninChange}
                      className={signinErrors.email ? 'error' : ''}
                    />
                    {signinErrors.email && <span className="error-message">{signinErrors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="signin-password">Password</label>
                    <input
                      type="password"
                      id="signin-password"
                      name="password"
                      value={signinForm.password}
                      onChange={handleSigninChange}
                      className={signinErrors.password ? 'error' : ''}
                    />
                    {signinErrors.password && <span className="error-message">{signinErrors.password}</span>}
                  </div>
                  
                  <div className="form-group">
                    <button type="submit" className="btn btn-filled form-btn">Sign In</button>
                  </div>
                  
                  <div className="form-footer">
                    <p>Don't have an account? <button type="button" className="switch-form" onClick={() => setActiveTab('register')}>Register</button></p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="form-content">
                {registerSuccess && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    Registration successful! You can now sign in.
                  </div>
                )}
                
                <form onSubmit={handleRegisterSubmit}>
                  <div className="form-group">
                    <label htmlFor="register-name">Full Name</label>
                    <input
                      type="text"
                      id="register-name"
                      name="fullName"
                      value={registerForm.fullName}
                      onChange={handleRegisterChange}
                      className={registerErrors.fullName ? 'error' : ''}
                    />
                    {registerErrors.fullName && <span className="error-message">{registerErrors.fullName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="register-email">Email</label>
                    <input
                      type="email"
                      id="register-email"
                      name="email"
                      value={registerForm.email}
                      onChange={handleRegisterChange}
                      className={registerErrors.email ? 'error' : ''}
                    />
                    {registerErrors.email && <span className="error-message">{registerErrors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="register-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="register-phone"
                      name="phone"
                      value={registerForm.phone}
                      onChange={handleRegisterChange}
                      placeholder="e.g., 123-456-7890"
                      className={registerErrors.phone ? 'error' : ''}
                    />
                    {registerErrors.phone && <span className="error-message">{registerErrors.phone}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="register-password">Password</label>
                    <input
                      type="password"
                      id="register-password"
                      name="password"
                      value={registerForm.password}
                      onChange={handleRegisterChange}
                      className={registerErrors.password ? 'error' : ''}
                    />
                    {registerErrors.password && <span className="error-message">{registerErrors.password}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="register-confirm-password">Confirm Password</label>
                    <input
                      type="password"
                      id="register-confirm-password"
                      name="confirmPassword"
                      value={registerForm.confirmPassword}
                      onChange={handleRegisterChange}
                      className={registerErrors.confirmPassword ? 'error' : ''}
                    />
                    {registerErrors.confirmPassword && <span className="error-message">{registerErrors.confirmPassword}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="register-goal">Fitness Goal</label>
                    <select
                      id="register-goal"
                      name="fitnessGoal"
                      value={registerForm.fitnessGoal}
                      onChange={handleRegisterChange}
                      className={registerErrors.fitnessGoal ? 'error' : ''}
                    >
                      <option value="">Select your goal</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="strength">Strength Training</option>
                      <option value="endurance">Endurance</option>
                      <option value="general">General Fitness</option>
                    </select>
                    {registerErrors.fitnessGoal && <span className="error-message">{registerErrors.fitnessGoal}</span>}
                  </div>
                  
                  <div className="form-group checkbox-group">
                    <input
                      type="checkbox"
                      id="register-terms"
                      name="agreeTerms"
                      checked={registerForm.agreeTerms}
                      onChange={handleRegisterChange}
                      className={registerErrors.agreeTerms ? 'error' : ''}
                    />
                    <label htmlFor="register-terms">I agree to the terms and conditions</label>
                    {registerErrors.agreeTerms && <span className="error-message">{registerErrors.agreeTerms}</span>}
                  </div>
                  
                  <div className="form-group">
                    <button type="submit" className="btn btn-filled form-btn">Register</button>
                  </div>
                  
                  <div className="form-footer">
                    <p>Already have an account? <button type="button" className="switch-form" onClick={() => setActiveTab('signin')}>Sign In</button></p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Join;
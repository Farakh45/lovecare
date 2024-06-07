import React, { useState } from "react";
import "./SignLog.css"; // Custom styles for the component

const SignLog = () => {
  // State to track whether to show the sign-in or sign-up form
  const [isSignUp, setIsSignUp] = useState(false);

  // State for form inputs and validations
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEmailValid = email.includes("@");
  const isCnicValid = cnic.length === 13 && /^\d{13}$/.test(cnic); // Exactly 13 digits
  const isPasswordMatch = password === confirmPassword;

  const handleSignUp = () => setIsSignUp(true);
  const handleSignIn = () => setIsSignUp(false);

  // Event handlers for form fields
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCnicChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Only digits
    setCnic(value); // Set value even if it's not 13 digits, to allow typing
  };
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  return (
    <div className="wrapper">
      <div className={`container ${isSignUp ? "active" : ""}`}>
        {/* Sign-Up Form */}
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={{ borderColor: isEmailValid ? "" : "red" }}
            />
            {!isEmailValid && (
              <small style={{ color: "red" }}>Invalid email address</small>
            )}
            <input
              type="text"
              placeholder="CNIC"
              value={cnic}
              onChange={handleCnicChange}
              maxLength={13} // Limit to 13 characters
              style={{ borderColor: isCnicValid ? "" : "red" }}
            />
            {!isCnicValid && (
              <small style={{ color: "red" }}>
                CNIC must be exactly 13 digits
              </small>
            )}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              style={{ borderColor: isPasswordMatch ? "" : "red" }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{ borderColor: isPasswordMatch ? "" : "red" }}
            />
            {!isPasswordMatch && (
              <small style={{ color: "red" }}>Passwords do not match</small>
            )}
            <div class="roles">
              <label>
                <input type="radio" name="role" value="caretaker" id="by" />
                CareTaker
              </label>
              <label>
                <input type="radio" name="role" value="seller" id="by" />
                CareRecipient
              </label>
            </div>

            <button
              disabled={!isEmailValid || !isCnicValid || !isPasswordMatch}
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign-In Form */}
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <span>or use your email and password</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={{ borderColor: isEmailValid ? "" : "red" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <a href="#">Forgot your password?</a>
            <div class="roles">
              <label>
                <input type="radio" name="role" value="Caretaker" id="by" />
                CareTaker
              </label>
              <label>
                <input type="radio" name="role" value="Carerecipient" id="by" />
                CareRecipient
              </label>
              
            </div>
            <button>Sign In</button>
          </form>
        </div>

        {/* Toggle Panels for Switching Between Forms */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left" onClick={handleSignIn}>
              <h1>Welcome Back!</h1>
              <p>To sign in, use your personal details</p>
              <button onClick={handleSignIn}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right" onClick={handleSignUp}>
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details</p>
              <button onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLog;

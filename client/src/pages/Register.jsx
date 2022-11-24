import React, { useState, useEffect } from 'react';
import FormContainer from '../styles/Register';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import '../styles/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes';

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const toastStyle = {
    position: 'bottom-center',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  };
  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error('password and confirm password should be same', toastStyle);
      return false;
    } else if (username.length < 3) {
      toast.error('username should not be less then 3 characters', toastStyle);
      return false;
    } else if (password.length < 5) {
      toast.error('password should not be less then 5 characters', toastStyle);
      return false;
    } else if (email === '') {
      toast.error('email is required ', toastStyle);
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { username, email, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastStyle);
      }
      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user));
        navigate('/');
      }
    }
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={Logo} alt="" />
            <h1>Catchy</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleOnChange(e)}
          ></input>
          <button type="submit">Create Account</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default Register;

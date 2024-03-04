import React, { useState, useEffect } from 'react';
import './login.css';

function LoginPage() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = (form) => {
    setShowLoginForm(form === 'login');
  };

  useEffect(() => {
    const handleToggleForm = () => {
      const forms = document.querySelectorAll('.form form');
      forms.forEach((form) => {
        $(form).animate({ height: "toggle", opacity: "toggle" }, "slow");
      });
    };

    $('.message a').click(handleToggleForm);

    return () => {
      $('.message a').off('click', handleToggleForm);
    };
  }, []);

  return (
    <div className="login-page">
      <div className="form">
        {showLoginForm ? (
          <LoginFormStudent toggleForm={toggleForm} />
        ) : (
          <LoginFormDiningHall toggleForm={toggleForm} />
        )}
        <LoginForm toggleForm={toggleForm} />
      </div>
    </div>
  );
}

function LoginFormStudent({ toggleForm }) {
  return (
    <form className="register-form-student">
      <p className="message">
        <large>Student Registration</large>
      </p>
      {/* Add input fields and buttons */}
      <button>create</button>
      <p className="message">
        Already registered?{' '}
        <a href="#" className="toggle-form" onClick={() => toggleForm('login')}>
          Sign In
        </a>
      </p>
    </form>
  );
}

function LoginFormDiningHall({ toggleForm }) {
  return (
    <form className="register-form-dining-hall">
      <p className="message">
        <large>Dining Hall Registration</large>
      </p>
      {/* Add input fields and buttons */}
      <button>create</button>
      <p className="message">
        Already registered?{' '}
        <a href="#" className="toggle-form" onClick={() => toggleForm('login')}>
          Sign In
        </a>
      </p>
    </form>
  );
}

function LoginForm({ toggleForm }) {
  return (
    <form className="login-form">
      {/* Add input fields and buttons */}
      <button>login</button>
      <p className="message">
        Not registered? Create account as:{' '}
        <a href="#" className="toggle-form" onClick={() => toggleForm('student')}>
          Student
        </a>{' '}
        or{' '}
        <a href="#" className="toggle-form" onClick={() => toggleForm('diningHall')}>
          Dining-affiliated
        </a>
      </p>
    </form>
  );
}

export default LoginPage;



/*$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 }); */
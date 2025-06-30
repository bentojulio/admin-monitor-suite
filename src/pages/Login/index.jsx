import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "ama-design-system";
import Logo from "../../assets/logo-ams.svg";
import { useAuth } from "../../context/AuthContext";
import './login.css'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Login = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const { login, loading } = useAuth();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const onSubmit = async (data) => {
  
   localStorage.setItem('@AMS:apiUrl', data.machineIP);

  
   const result = await login(data.username, data.password, data.machineIP);
  
   if (result.success) {
     navigate('/dashboard/home');
   } else {
     setLoginError(result.error);
   }
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setValue(name, value, { 
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  };

  return (
    <>
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label={t('LOGIN.skip_link_label')}
      >
        {t('LOGIN.skip_link_text')}
      </a>
      <div className="main-content">
        <div className="login-container" id="main-content" role="main">
          <h1 className="login-title visually-hidden">{t('LOGIN.title')}</h1>
          <img src={Logo} alt={t('LOGIN.logo_alt')} className="login-logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="machineIP"
              label={t('LOGIN.machineIP_label')}
              type="url"
              onChange={handleInputChange}
             
              error={errors.machineIP?.message}
            />
            <Input
              name="username"
              label={t('LOGIN.email_label')}
              type="text"
              onChange={handleInputChange}
           error={errors.email?.message}
            />
            <Input
              name="password"
              label={t('LOGIN.password_label')}
              type="password"
              onChange={handleInputChange}
              showPassTextAria={t('LOGIN.showPassTextAria')}
              hidePassTextAria={t('LOGIN.hidePassTextAria')}
              
              error={errors.password?.message}
            />

            <Button 
              type="submit" 
              text={loading ? t('LOGIN.loading_text') : t('LOGIN.submit')}
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

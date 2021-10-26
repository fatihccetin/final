import { useState } from "react";
import logoTitle from "../../img/Group 6607.svg";
import logo from "../../img/Group 52.png";
import WrapperRegister from "./scRegister";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/auth";



const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (e) => {
    setAuthInfo({
      ...authInfo,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    dispatch(signUp(authInfo))
  };

  return (
    <>
    < WrapperRegister>
      <div className="container">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        {/* ---------------------- */}
        <div className="right">
          <div className="content">
            <div className="logoTitle">
              <img src={logoTitle} alt="" />
            </div>
            <div className="form-area">
              <form action="">
                <h1 className="title">Üye Ol</h1>
                <p className="form-p">Fırsatlardan yararlanmak için üye ol</p>

                <div className="form-group">
                  <div className="form-group-title">Email</div>
                  <input
                    type="email"
                    placeholder="E-mail@example.com"
                    name="email" 
                    onChange={handleOnChange}
                  />
                </div>

                <div className="form-group">
                  <div className="form-group-title">Şifre</div>
                  <input
                    type="password"
                    placeholder="Şifre"
                    name="password" 
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form-password">Şifremi Unuttum</div>
                  <button type="button" className="submit_btn" onClick={handleSubmit}>
                    Üye Ol
                  </button>
                </div>
              </form>
              <div className="form-bottom">
                Hesabın var mı?
                <Link to="/">Giriş Yap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </WrapperRegister>
    </>
  );
};

export default Login;

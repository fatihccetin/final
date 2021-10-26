import WrapperLogin from "./scLogin";
import { signIn } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logo from "../../img/Group 52.png";
import logoTitle from "../../img/Group 6607.svg";
import { Link, useHistory } from "react-router-dom";
import { alert } from "../../utils/alert";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth);

  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setAuthInfo({
      ...authInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if(authInfo.email == "" || authInfo.password == ""){
        alert.error("Email ya da şifre boş bırakılamaz.") 
    }
    else{
      dispatch(signIn(authInfo));
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      history.push("/home");
    }
  }, [auth.isSignIn]);

  return (
    <>
      <WrapperLogin>
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
                <form action="" onSubmit={handleSubmit}>
                  <h1 className="title">Giriş Yap</h1>
                  <p className="form-p">
                    Fırsatlardan yararlanmak için giriş yap
                  </p>

                  <div className="form-group">
                    <div className="form-group-title">Email</div>
                    <input
                      id="email"
                      type="text"
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
                    <button
                      type="button"
                      className="submit_btn"
                      onClick={handleSubmit}
                    >
                      Giriş
                    </button>
                  </div>
                </form>

                <div className="form-bottom">
                  Hesabın yok mu?
                  <Link to="/register">Üye Ol</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperLogin>
    </>
  );
};

export default Login;

import { useCallback } from "react";
import "./sign-in-message.css";

const SignInMessage = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "Màn hình chính" to the project
  }, []);

  return (
    <section className="sign-in-message">
      <div className="rectangle-parent4">
        <div className="frame-child12" />
        <div className="name-container">
          <div className="tn-ng-nhp2">Tên đăng nhập/ Số điện thoại:</div>
          <div className="rectangle-parent5">
            <div className="frame-child13" />
            <img
              className="frame-child14"
              loading="lazy"
              alt=""
              src="/group-3.svg"
            />
          </div>
        </div>
        <div className="login-button">
          <div className="create-account-container">
            <div className="mt-khu2">Mật khẩu:</div>
            <img
              className="create-account-container-child"
              loading="lazy"
              alt=""
              src="/group-242.svg"
            />
          </div>
          <div className="forgot-password-link">
            <div className="qun-mt-khu1">Quên mật khẩu?</div>
            <div className="sign-in-message1">
              <div
                className="sign-in-message-child"
                onClick={onRectangleClick}
              />
              <div className="ng-nhp5">Đăng nhập</div>
            </div>
          </div>
        </div>
      </div>
      <div className="no-account-container">
        <div className="cha-c-ti-container1">
          <span>Chưa có tài khoản?</span>
          <span className="span2">{` `}</span>
          <span className="ng-k5">Đăng ký</span>
        </div>
      </div>
    </section>
  );
};

export default SignInMessage;

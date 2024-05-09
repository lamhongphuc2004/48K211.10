import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ng-k2.css";

const NgK2 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    // Please sync "Đăng ký - 4" to the project
  }, []);

  const onCTiKhonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="ng-k-3">
      <div className="time1" />
      <header className="register-wrapper">
        <div className="register">
          <div className="back-arrow-group">
            <img
              className="back-arrow-icon2"
              loading="lazy"
              alt=""
              src="/back-arrow.svg"
            />
            <img
              className="vector-icon1"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="register-inner">
            <div className="frame-inner" />
          </div>
        </div>
      </header>
      <section className="frame-group">
        <div className="registration-parent">
          <div className="registration">
            <h2 className="ng-k1">Đăng ký</h2>
          </div>
          <div className="rectangle-group">
            <div className="rectangle-div" />
            <div className="tn-ng-nhp-parent">
              <div className="tn-ng-nhp1">Tên đăng nhập</div>
              <div className="frame-child1" onClick={onRectangleClick} />
            </div>
            <div className="mt-khu-parent">
              <div className="mt-khu">Mật khẩu:</div>
              <img
                className="group-icon"
                loading="lazy"
                alt=""
                src="/group-241.svg"
              />
            </div>
            <div className="ng-k-button">
              <div className="ng-k-button-child" />
              <div className="ng-k2">Đăng ký</div>
            </div>
          </div>
        </div>
        <div className="c-ti-khon-ng-nhp-wrapper">
          <div className="c-ti-khon-container" onClick={onCTiKhonClick}>
            <span>Đã có tài khoản?</span>
            <span className="span1">{` `}</span>
            <span className="ng-nhp2">Đăng nhập</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NgK2;

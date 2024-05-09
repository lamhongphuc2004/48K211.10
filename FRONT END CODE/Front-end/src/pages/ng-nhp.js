import { useCallback } from "react";
import FrameComponent1 from "../components/frame-component1";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/frame-component";
import "./ng-nhp.css";

const NgNhp = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/ng-nhp-1");
  }, [navigate]);

  const onChaCTiClick = useCallback(() => {
    navigate("/ng-k-1");
  }, [navigate]);

  return (
    <div className="ng-nhp">
      <FrameComponent1 />
      <section className="ng-nhp-inner">
        <div className="wrapper-frame-parent">
          <div className="wrapper-frame">
            <img
              className="frame-icon"
              loading="lazy"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <div className="ng-nhp-wrapper">
            <h2 className="ng-nhp1">Đăng nhập</h2>
          </div>
        </div>
      </section>
      <div className="time" />
      <section className="ng-nhp-child">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="password-field">
            <div className="tn-ng-nhp">Tên đăng nhập/ Số điện thoại:</div>
            <div className="password-field-child" onClick={onRectangleClick} />
          </div>
          <FrameComponent />
        </div>
      </section>
      <section className="cha-c-ti-khon-ng-k-wrapper">
        <div className="cha-c-ti-container" onClick={onChaCTiClick}>
          <span>Chưa có tài khoản?</span>
          <span className="span">{` `}</span>
          <span className="ng-k">Đăng ký</span>
        </div>
      </section>
    </div>
  );
};

export default NgNhp;

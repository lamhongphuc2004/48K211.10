import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component2.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/ng-k-2");
  }, [navigate]);

  return (
    <section className="vector-parent">
      <img
        className="ellipse-icon"
        loading="lazy"
        alt=""
        src="/ellipse-21@2x.png"
      />
      <div className="register-label-parent">
        <div className="register-label">
          <h1 className="ng-k3">Đăng ký</h1>
        </div>
        <div className="frame-parent2">
          <div className="vui-lng-nhp-s-in-thoi-wrapper">
            <div className="vui-lng-nhp">Vui lòng nhập số điện thoại:</div>
          </div>
          <div className="frame-child7" onClick={onRectangleClick} />
        </div>
      </div>
      <div className="group-div">
        <div className="frame-child8" />
        <div className="tip-tc">Tiếp tục</div>
      </div>
    </section>
  );
};

export default FrameComponent2;

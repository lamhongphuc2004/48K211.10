import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component4.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/ng-k-3");
  }, [navigate]);

  return (
    <section className="vector-group">
      <img
        className="frame-child9"
        loading="lazy"
        alt=""
        src="/ellipse-21@2x.png"
      />
      <div className="register-label-group">
        <div className="register-label1">
          <h1 className="ng-k4">Đăng ký</h1>
        </div>
        <div className="next-button-parent">
          <div className="next-button">
            <div className="vui-lng-nhp1">Vui lòng nhập số điện thoại:</div>
          </div>
          <div className="rectangle-parent2">
            <div className="frame-child10" />
            <div className="separator">0123456789</div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent3" onClick={onGroupContainerClick}>
        <div className="frame-child11" />
        <div className="tip-tc1">Tiếp tục</div>
      </div>
    </section>
  );
};

export default FrameComponent4;

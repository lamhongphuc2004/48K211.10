import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/ng-nhp-1");
  }, [navigate]);

  const onQunMtKhuClick = useCallback(() => {
    // Please sync "Quên mật khẩu - 1" to the project
  }, []);

  return (
    <div className="frame-parent1">
      <div className="mt-khu-group">
        <div className="mt-khu1">Mật khẩu:</div>
        <img
          className="frame-child5"
          loading="lazy"
          alt=""
          src="/group-24.svg"
          onClick={onGroupClick}
        />
      </div>
      <div className="qun-mt-khu-parent">
        <div className="qun-mt-khu" onClick={onQunMtKhuClick}>
          Quên mật khẩu?
        </div>
        <div className="rectangle-parent1">
          <div className="frame-child6" />
          <div className="ng-nhp4">Đăng nhập</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

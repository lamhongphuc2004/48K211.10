import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/frame-component4";
import "./ng-k1.css";

const NgK1 = () => {
  const navigate = useNavigate();

  const onBackArrowClick = useCallback(() => {
    navigate("/ng-k-1");
  }, [navigate]);

  const onVectorClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="ng-k-2">
      <div className="quay-li1" />
      <div className="ng-k-2-child" />
      <header className="ng-k-2-inner">
        <div className="back-arrow-parent">
          <img
            className="back-arrow-icon"
            loading="lazy"
            alt=""
            src="/back-arrow.svg"
            onClick={onBackArrowClick}
          />
          <img
            className="vector-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
            onClick={onVectorClick}
          />
        </div>
      </header>
      <div className="frame-parent">
        <div className="back-arrow-wrapper">
          <img
            className="back-arrow-icon1"
            loading="lazy"
            alt=""
            src="/back-arrow.svg"
          />
        </div>
        <div className="frame-item" />
      </div>
      <FrameComponent4 />
    </div>
  );
};

export default NgK1;

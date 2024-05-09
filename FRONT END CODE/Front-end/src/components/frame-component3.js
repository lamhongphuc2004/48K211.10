import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-component3.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onBackContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVectorClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="frame-header">
      <div className="back-arrow-container">
        <img
          className="back-arrow-icon3"
          loading="lazy"
          alt=""
          src="/back-arrow.svg"
        />
      </div>
      <div className="back-wrapper">
        <div className="back" onClick={onBackContainerClick}>
          <div className="back-arrow-frame">
            <img
              className="back-arrow-icon4"
              loading="lazy"
              alt=""
              src="/back-arrow.svg"
            />
          </div>
          <div className="back-child" />
        </div>
      </div>
      <img
        className="vector-icon2"
        loading="lazy"
        alt=""
        src="/vector.svg"
        onClick={onVectorClick}
      />
    </header>
  );
};

export default FrameComponent3;

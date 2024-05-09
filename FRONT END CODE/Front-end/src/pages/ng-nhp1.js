import FrameComponent1 from "../components/frame-component1";
import SignInMessage from "../components/sign-in-message";
import "./ng-nhp1.css";

const NgNhp1 = () => {
  return (
    <div className="ng-nhp-1">
      <FrameComponent1
        frameDivHeight="151.9px"
        inputFieldsDebugCommit="unset"
        rectangleDivDebugCommit="unset"
        rectangleDivDebugCommit1="unset"
        rectangleDivDebugCommit2="unset"
        frameDivPadding="16.3px 0px 0px"
        ngDngQunContainerHeight="208.7px"
      />
      <div className="time2" />
      <section className="ng-nhp-1-inner">
        <div className="input-container-parent">
          <div className="input-container">
            <div className="wrapper-username-label">
              <img
                className="username-label-icon"
                loading="lazy"
                alt=""
                src="/frame1@2x.png"
              />
            </div>
          </div>
          <h2 className="ng-nhp3">Đăng nhập</h2>
        </div>
      </section>
      <SignInMessage />
    </div>
  );
};

export default NgNhp1;

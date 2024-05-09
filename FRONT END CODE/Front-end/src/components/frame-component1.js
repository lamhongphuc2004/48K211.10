import { useMemo } from "react";
import "./frame-component1.css";

const FrameComponent1 = ({
  frameDivHeight,
  inputFieldsDebugCommit,
  rectangleDivDebugCommit,
  rectangleDivDebugCommit1,
  rectangleDivDebugCommit2,
  frameDivPadding,
  ngDngQunContainerHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  const inputFieldsStyle = useMemo(() => {
    return {
      debugCommit: inputFieldsDebugCommit,
    };
  }, [inputFieldsDebugCommit]);

  const rectangleDivStyle = useMemo(() => {
    return {
      debugCommit: rectangleDivDebugCommit,
    };
  }, [rectangleDivDebugCommit]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      debugCommit: rectangleDivDebugCommit1,
    };
  }, [rectangleDivDebugCommit1]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      debugCommit: rectangleDivDebugCommit2,
    };
  }, [rectangleDivDebugCommit2]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const ngDngQunContainerStyle = useMemo(() => {
    return {
      height: ngDngQunContainerHeight,
    };
  }, [ngDngQunContainerHeight]);

  return (
    <section className="frame-container">
      <div className="frame-div" style={frameDivStyle}>
        <div className="input-fields-parent">
          <div className="input-fields" style={inputFieldsStyle} />
          <div className="frame-child2" style={rectangleDivStyle} />
        </div>
        <div className="rectangle-container">
          <div className="frame-child3" style={rectangleDiv1Style} />
          <div className="frame-child4" style={rectangleDiv2Style} />
        </div>
      </div>
      <div className="ng-dng-qun-l-nguyn-liu-le-wrapper" style={frameDiv1Style}>
        <div className="ng-dng-qun-container" style={ngDngQunContainerStyle}>
          <p className="ng-dng-qun">Ứng dụng Quản Lý Nguyên Liệu</p>
          <p className="lechat-cat-coffee">Lechat Cat Coffee</p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;

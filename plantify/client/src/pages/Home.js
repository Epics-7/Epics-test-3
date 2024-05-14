/* eslint-disable */
import About from "../pages/About";
import Working from "../pages/Working";


const Homepage = () => {
  return (
    <section
      style={{
        width: "1232px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 46px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "32px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "0px 4px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "17px 0px",
            maxWidth: "100%",
            marginblockend: "125px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            <img
              style={{
                height: "94.9px",
                width: "94.9px",
                position: "relative",
                objectFit: "contain",
                zIndex: "1",
                top: "89px",
                right: "-23px",
              }}
              loading="lazy"
              alt=""
              src="/snap logo.png"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 0px 14px",
              }}
            >
              <b style={{ position: "relative", top: "80px", left: "38px" }}>
                Welcome
              </b>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 0px 17px",
              boxSizing: "border-box",
              maxWidth: "100%",
              fontSize: "40px",
            }}
          >
            <b
              style={{
                height: "288px",
                width: "682px",
                position: "relative",
                display: "inline-block",
                flexShrink: "0",
                maxWidth: "100%",
              }}
            >
              <p style={{ margin: "", position: "relative", top: "75px" }}>
                <span style={{ color: "#000" }}>"</span>
                <span style={{ color: "#377553" }}>Revolutionize</span>
                <span>{` plant care with our cutting-edge image detection technology, `}</span>
                <span style={{ color: "#377553" }}>identifying diseases</span>
                <span style={{ color: "#000" }}>
                  {" "}
                  at a glance for a healthier and thriving green world."
                </span>
              </p>
            </b>
          </div>
        </div>
        <div
          style={{
            height: "494px",
            width: "437px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minWidth: "437px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: "300px",
                position: "relative",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  height: "100%",
                  top: "192px",
                  bottom: "0px",
                  left: "0px",
                  maxHeight: "100%",
                  width: "325px",
                  objectFit: "cover",
                }}
                alt=""
                src="/png hai.png"

              />
              <img
                style={{
                  position: "absolute",
                  top: "414px",
                  left: "178px",
                  width: "259px",
                  height: "152px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                loading="lazy"
                alt=""
                src="rice-paddy.jpg"
              />
            </div>
            <div
              style={{
                width: "251px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 2px 0px 0px",
                boxSizing: "border-box",
              }}
            >
              {/* <img
                style={{
                  height: "137px",
                  flex: "1",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                  
                }}
                loading="lazy"
                alt=""
                //src="/png hai.png"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
/* eslint-enable */
import React from "react";

const dummyPage = text => {
  const dummyPageStyle = {
    page: {
      height: "100vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    text: {
      display: "inline-block",
      borderRight: "1px solid rgba(0, 0, 0,.3)",
      margin: 0,
      marginRight: 20,
      padding: "10px 23px 10px 0",
      fontSize: "24px",
      fontWeight: 500,
      verticalAlign: "top"
    },
    dummyContent: {
      display: "inline-block",
      textAlign: "left",
      lineHeight: 2.5,
      height: 49,
      verticalAlign: "middle"
    }
  };
  return (
    <div style={dummyPageStyle.page}>
      <div>
        <h1 style={dummyPageStyle.text}>here is where a page should be</h1>
        <p style={dummyPageStyle.dummyContent}>{text}</p>
      </div>
    </div>
  );
};

export default function Layout(props) {
  const styleOut = props.centered ? (
    <style jsx global>
      {`
        body {
          height: 100vh;
          display: flex;
          flex-direction: center;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          background: #fff;
          width: 100vw;
          font: 11px menlo;
          color: #707070;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
  ) : (
    <style jsx global>{`
      body {
        margin: 0 auto;
        background: #fff;
        width: 100vw;
        font: 11px menlo;
        color: #707070;
      }
      ::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  );

  return (
    <div>
      <link
        rel="stylesheet"
        href="static/fonts/stylesheet.css"
        type="text/css"
        charSet="utf-8"
      />
      {styleOut}

      {props.children ? props.children : dummyPage("there is no content.")}
    </div>
  );
}

// fonts available
/*
d-dindin-bold
d-dindin-italic
d-dinregular
d-din_condenseddinCnBd
d-din_condensedregular
d-din_expdinexp-bold
d-din_expdinexp-italic
d-din_expregular

*/

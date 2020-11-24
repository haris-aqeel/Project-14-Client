import React from "react";
import Lolly from '../component/Lolly'


export default function LollyPage(lolly) {

  const {location, pageContext} = lolly;

  console.log("Location ====> " + location);
  console.log("Page Context ====> " +  pageContext)
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", height: "100vh"}}>

      <h4 className="sharableLinkContainer">Your sharable link: </h4>{" "}
      <span className="sharableLink">
        {" "}
      {`https://localhost:8000/${location.pathname}/`}
      </span>
      <div className="recievedContentContainer">
        <Lolly
          fillLollyTop={pageContext.lolly.topColor}
          fillLollyMiddle={pageContext.lolly.mediumColor}
          fillLollyBottom={pageContext.lolly.bottomColor}
        />

        <div className="recievedTextContainer">
          <h2>Hi {pageContext.lolly.recipientName}</h2>
          <p>{pageContext.lolly.message}</p>
          <h3>From: {pageContext.lolly.senderName}</h3>
        </div>
      </div>
    </div>
  );
}
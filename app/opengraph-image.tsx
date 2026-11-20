import { ImageResponse } from "next/og";

export const alt = "Dan Edwards. I take mobile products from architecture to the App Store, and keep them shipping.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social card in the site's colors. Uses the default font so the build does
// not depend on fetching a font file.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#143433",
          color: "#f3ecdd",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, color: "#a9bdb9" }}>
          DAN EDWARDS / STAFF SOFTWARE ENGINEER, INFINITE RED
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 80, lineHeight: 1.02, letterSpacing: -3 }}>
          <span>I take mobile products from architecture to the&nbsp;</span>
          <span style={{ color: "#dcae5c" }}>App Store,&nbsp;</span>
          <span>and keep them shipping.</span>
        </div>
        <div style={{ fontSize: 24, letterSpacing: 4, color: "#a9bdb9" }}>
          DANEDWARDS.US
        </div>
      </div>
    ),
    size
  );
}

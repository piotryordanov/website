import GoogleFontLoader from "react-google-font-loader";
export default () => (
  <GoogleFontLoader
    fonts={[
      {
        font: "PT Serif",
        weights: []
      },
      {
        font: "Open Sans",
        weights: [300, "300i", 400, 700, 800]
      },
      {
        font: "Montserrat",
        weights: [400, 700]
      }
    ]}
  />
);

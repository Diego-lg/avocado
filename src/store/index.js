import { proxy } from "valtio";

const state = proxy({
  intro: false,
  color: "black",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./00015.png",
  fullDecal: "./00015.png",
  logoPosition: [0, 0.04, 0.15],
  fullTexturePosition: [0, 0, 0],
});

export default state;

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify,
} from "unocss-applet";

const isApplet = process.env?.UNI_PLATFORM?.startsWith("mp");

export default defineConfig({
  presets: [
    // checkout https://github.com/unocss/unocss/tree/main/packages/preset-icons
    presetIcons({
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetApplet({ enable: isApplet }),
    presetAttributify(),
    presetRemToRpx({ enable: isApplet }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify({ enable: isApplet }),
    transformerApplet({ enable: isApplet }),
  ],
});

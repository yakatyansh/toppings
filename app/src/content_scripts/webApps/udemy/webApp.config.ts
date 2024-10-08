import { WebAppConfig } from "../../../lib/getWebAppConfig";

const udemyConfig = {
  generalSettings: {
    isEnabled: true as boolean,
  },
  routes: {
    learn: {
      isEnabled: true as boolean,
      keybindings: {
        toggleSpeedShortcut: "X" as string,
        seekBackwardShortcut: "A" as string,
        seekForwardShortcut: "D" as string,
        increaseSpeedShortcut: "W" as string,
        decreaseSpeedShortcut: "S" as string,
        toggleTheatreShortcut: "T" as string,
      },
      preferences: {
        customSpeedList: [
          "0.50",
          "0.75",
          "1.00",
          "1.25",
          "1.50",
          "1.75",
          "2.00",
        ] as Array<string>,
        toggleSpeed: "1.50" as string,
        defaultSpeed: "1.00" as string,
        seekForward: "15.00" as string,
        seekBackward: "15.00" as string,
        increaseSpeed: "0.25" as string,
        decreaseSpeed: "0.25" as string,
      },
    },
  },
} satisfies WebAppConfig;

export type UdemyConfig = typeof udemyConfig;
export default udemyConfig;

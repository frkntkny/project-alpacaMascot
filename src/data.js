const alpaca = {
  accessories: {
    earings: "earings.png",
    flower: "flower.png",
    glasses: "glasses.png",
    headphone: "headphone.png",
  },
  ears: {
    default: "default.png",
    tiltBackward: "tilt-backward.png",
    tiltForward: "tilt-forward.png",
  },
  eyes: {
    default: "default.png",
    angry: "angry.png",
    naughty: "naughty.png",
    panda: "panda.png",
    smart: "smart.png",
    star: "star.png",
  },
  hair: {
    default: "default.png",
    bang: "bang.png",
    curls: "curls.png",
    elegant: "elegant.png",
    fancy: "fancy.png",
    quiff: "quiff.png",
    short: "short.png",
  },
  leg: {
    default: "default.png",
    cookie: "cookie.png",
    gameConsole: "game-console.png",
    tiltBackward: "tilt-backward.png",
    tiltForward: "tilt-forward.png",
    bubbkeTea: "bubble-tea.png",
  },
  mouth: {
    default: "default.png",
    astonished: "astonished.png",
    eating: "eating.png",
    laugh: "laugh.png",
    tongue: "tongue.png",
  },
  neck: {
    default: "default.png",
    bendBackward: "bend-backward.png",
    bendForward: "bend-forward.png",
    thick: "thick.png",
  },
  nose: {
    default: "nose.png",
  },

  backgrounds: {
    blue50: "blue50.png",
    blue60: "blue60.png",
    blue70: "blue70.png",
    darkblue30: "darkblue30.png",
    darkblue50: "darkblue50.png",
    darkblue70: "darkblue70.png",
    green50: "green50.png",
    green60: "green60.png",
    green70: "green70.png",
    grey40: "grey40.png",
    grey70: "grey70.png",
    grey80: "grey80.png",
    red50: "red50.png",
    red60: "red60.png",
    red70: "red70.png",
    yellow50: "yellow50.png",
    yellow60: "yellow60.png",
    yellow70: "yellow70.png",
  },
};
export default alpaca;

export function getRandomProperty(obj) {
  const keys = Object.keys(obj);

  return keys[Math.floor(Math.random() * keys.length)];
}
// const TotalAccessories = Object.keys(alpaca.accessories).length;
// const TotalBackgrounds = Object.keys(alpaca.backgrounds).length;
// const TotalEars = Object.keys(alpaca.ears).length;
// const TotalEyes = Object.keys(alpaca.eyes).length;
// const TotalHair = Object.keys(alpaca.hair).length;
// const TotalLeg = Object.keys(alpaca.leg).length;
// const TotalMouth = Object.keys(alpaca.mouth).length;
// const TotalNeck = Object.keys(alpaca.neck).length;
// const TotalNose = Object.keys(alpaca.nose).length;

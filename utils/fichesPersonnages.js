// http://www.geocities.ws/SoHo/7373/mythical2.html
// https://ascii.co.uk/art/warrior

export const ninja = {
  level: 1,
  damage: 10,
  health: 15,
  weapon: undefined,
  possibleWeapons: [
    { type: "epee", level: 1 },
    { type: "katana", level: 2 },
    { type: "shuriken", level: 3 },
  ],
  powers: undefined,
  possiblePower: [
    { type: "fire", level: 2 },
    { type: "ice", level: 3 },
  ],
  lifePotion: 1,
  inventory: []
};

export const magicien = {
  level: 1,
  damage: 5,
  health: 15,
  weapon: undefined,
  powers: undefined,
  possiblePower: [
    { type: "feu", level: 1 },
    { type: "glace", level: 1 },
    { type: "terre", level: 1 },
    { type: "vent", level: 2 },
    { type: "electricité", level: 3 },
  ],
  lifePotion: 1,
};

export const elfe = {
  level: 1,
  damage: 7,
  health: 15,
  weapon: undefined,
  possibleWeapons: [
    { type: "arc", level: 1 },
    { type: "poignard", level: 1 },
    { type: "arbalette", level: 2 },
    { type: "lance", level: 2 },
  ],
  power: undefined,
  lifePotion: 1,
};

export const fantome = {
  level: 1,
  damage: 7,
  health: 10,
};

export const orque = {
  level: 1,
  damage: 8,
  health: 12,
};

export const squelette = {
  level: 1,
  damage: 8,
  health: 12,
};

export const dragon = {
  level: 1,
  damage: 20,
  health: 25,
  weapon: "feu",
};
export const TODO_COLORS = { //ToDO_COLORS este nombre es orque representa una constante global e inmutable.
  blueLight: "bg-blue-200",
  pink: "bg-pink-200",
  orange: "bg-orange-200",
} as const;

export type TodoColor = keyof typeof TODO_COLORS;
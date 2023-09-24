export const API_BASE_URL = "https://codesafio-backend.onrender.com";
//export const API_BASE_URL = 'http://localhost:3000'

export const difficulty = new Map();
difficulty.set(1, "Fácil");
difficulty.set(2, "Intermedio");
difficulty.set(3, "Difícil");
difficulty.set(4, "Experto");

export const skillLevel = new Map();
skillLevel.set(1, "Básico");
skillLevel.set(2, "Intermedio");
skillLevel.set(3, "Avanzado");
skillLevel.set(4, "Experto");

export const statusColors = new Map();
statusColors.set("started", "#42D27C");
statusColors.set("not-started", "#DED842");
statusColors.set("finished", "#D24242");

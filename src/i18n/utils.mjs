import { literals } from "./literals.mjs"

const defaultLang = "es";

export const getLiteral = (lang) => {
    return (key) =>
        literals[lang || defaultLang][key];
}
import { literals } from "./literals.mjs"

const defaultLang = "es";

export const getLiteral = (lang, key) => {
    return literals[lang || defaultLang][key];
}
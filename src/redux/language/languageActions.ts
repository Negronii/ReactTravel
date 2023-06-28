export const CHANGE_LANGUAGE = "change_language";

interface ChangeLanguageAction {
    type: typeof CHANGE_LANGUAGE,
    payload: "zh" | "en"
}

export type LanguageActionTypes = ChangeLanguageAction;
// e.g. in the future, we may have another action type, AddLanguageAction, like this:
// type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;

export const changeLanguageActionCreator = (languageCode: "zh" | "en") : ChangeLanguageAction => {
    return {
        type: CHANGE_LANGUAGE,
        payload: languageCode
    };
}
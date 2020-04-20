import * as languages from './language.js'

export default {
    changeLanguage : [false, false],
    pressShift : false,
    pressCaps : false,
    cursor: 0,
    lang : languages.get('lang', 'ru')
}

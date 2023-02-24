import vi from './vi';
import en from './en';
import { LANG_KEY } from '../enums/cache';
import { Storage } from '../utils/storage';
import { LANGS } from '../enums/setting';

export const i18nMenus = [
    {
        lang: 'vi',
        flag: 'emojione:flag-for-vietnam'
    },
    {
        lang: 'en',
        flag: 'emojione:flag-for-united-states'
    }
]

export const getPersonalSummaryKeys = () => Object.keys(vi.cv.summary);
export const getSkillKeys = () => Object.keys(vi.cv.skills);
export const getExperienceKeys = () => Object.keys(vi.cv.workExperience);
export const getRespTransalteByIndex = (index: any, t: any) => Object.keys(vi.cv.workExperience[ `${index as keyof typeof vi.cv.workExperience}` ].project.responsibilities).map((key) => t(`cv.workExperience.${index}.project.responsibilities.${key}`));
export const getAdditionalInfoKeys = () => Object.keys(vi.cv.additionalInformation)


export const initialzeI18n = () => {
    const defaultLang: LANGS = 'en';
    const currentLang = Storage.load(LANG_KEY);
    const { locale } = useI18n();
    locale.value = currentLang || defaultLang;
}

export const getLanguageMessages = () => ({
    vi, en
});


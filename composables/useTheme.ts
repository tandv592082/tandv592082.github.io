import { ref } from 'vue';
import { THEME_MODE } from '~/enums/setting';
import { Storage } from '~/utils/storage';
import { THEME_KEY } from '~/enums/cache';


const defaultTheme: THEME_MODE = 'dark';
const currentTheme = ref<THEME_MODE>(defaultTheme);

export const useTheme = () => {

    const setTheme = (theme: THEME_MODE) => {
        currentTheme.value = theme;
        Storage.save(THEME_KEY, currentTheme.value);
    }

    const initialzeTheme = () => {
        const localTheme = Storage.load(THEME_KEY) as THEME_MODE;
        console.log(localTheme);
        currentTheme.value = localTheme || defaultTheme;
    }

    return {
        currentTheme,
        setTheme,
        initialzeTheme
    }
}
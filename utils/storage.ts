export class Storage {
    static save(key: string, val: string) {
        localStorage.setItem(key, val);
    }

    static load(key: string) {
        return localStorage.getItem(key);
    }

    static saveString(key: string, val: any) {
        const str = JSON.stringify(val);
        localStorage.setItem(key, str);
    }

    static loadString(key: string) {
        return localStorage.getItem(key);
    }
}
export class Storage {
    static isClient() {
        return typeof window !== "undefined"
    }

    static save(key: string, val: string) {
        this.isClient() && localStorage.setItem(key, val);
    }

    static load(key: string) {
        return this.isClient() && localStorage.getItem(key);
    }

    static saveString(key: string, val: any) {
        const str = JSON.stringify(val);
        this.isClient() && localStorage.setItem(key, str);
    }

    static loadString(key: string) {
        return this.isClient() && localStorage.getItem(key);
    }
}
class LocalStorageHelper {

    setItem(key: string, value: string) {
        localStorage.setItem(key, value);
        return true;
    }

    setJsonItem(key: string, value: any[] | object) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    getItem(key: string) {
        const value = localStorage.getItem(key);
        if (value) return value;
        return null;
    }

    getItemAsJson(key: string) {
        const value = this.getItem(key);
        if (value) return JSON.parse(value);
        return null;
    }

    deleteItem(key: string) {
        localStorage.removeItem(key);
        return true;
    }

}

export const localStorageUtil = new LocalStorageHelper();
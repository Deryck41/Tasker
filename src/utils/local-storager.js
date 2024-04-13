export const SaveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const GetFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}


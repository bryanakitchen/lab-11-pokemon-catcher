
export function setInLocalStorage(key, value) {
    const myString = JSON.stringify(value);
    localStorage.setItem(key, myString);
}

export function getFromLocalStorage(key) {
    const myKey = localStorage.getItem(key);
    return JSON.parse(myKey);

}
import { useState } from "react";


export default function useLocalStorage<T>(key: string, initialValue: T) {

    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) as T : initialValue;
        } catch (error) {
            console.error(`Error getting item from localStorage by key "${key}":`, error);
            return initialValue;
        }
    });


    const setValue = (value: T | ((prevValue: T) => T)) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting item in localStorage by key "${key}":`, error);
        }
    };

    const removeValue = () => {
        try {
            window.localStorage.removeItem(key);
            setStoredValue(initialValue);
        } catch (error) {
            console.error(`Error removing item from localStorage by key "${key}":`, error);
        }
    };

    return [storedValue, setValue, removeValue] as const;
}
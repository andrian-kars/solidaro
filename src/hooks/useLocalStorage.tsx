/* eslint-disable no-console */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

type SetValue<T> = Dispatch<SetStateAction<T>>;

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch (error) {
    console.warn("Error parsing JSON on", { value });
    throw error;
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const readValue = (): T => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? parseJSON(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  };

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: SetValue<T> = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
      throw error;
    }
  };

  useEffectOnce(() => {
    setStoredValue(readValue());
  });

  useEffectOnce(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    // this only works for other documents, not the current one
    window.addEventListener("storage", handleStorageChange);

    // this is a custom event, triggered in writeValueToLocalStorage
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return [storedValue, setValue];
}

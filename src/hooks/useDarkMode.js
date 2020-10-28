import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key, false);
    const toggleDarkMode = () => {
        setValue(!value)
    }

    return [value, toggleDarkMode];
}

export default useDarkMode; 
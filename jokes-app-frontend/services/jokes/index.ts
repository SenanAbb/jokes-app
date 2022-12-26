export const getNewJoke = async () => {
    try {
        const response = await fetch('http://localhost:4000/')
        const joke = await response.json();
        return joke;
    } catch (error) {
        console.error(error)
    }
}
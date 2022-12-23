export const getNewJoke = async () => {
    try {
        const response = await fetch('http://localhost:4000/', {
            headers: {
                "Access-Control-Allow-Origin": "<your origin>",
            }
        })
        console.log(response);
        const joke = await response.json();
        console.log(joke)
        return joke;
    } catch (error) {
        console.log(error);
    }
}
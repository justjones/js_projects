const apiEndpoint = "http://www.omdbapi.com/?s=Avengers&apikey=6ad0be6f";

const getData = async () => {
    try {
        const res = await fetch(apiEndpoint);
        const data = await res.json();
        console.log(data.Search); // Array of search results
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

getData();
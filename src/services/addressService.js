
const endpoints = {
    suggest: (text) => `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=${text}`,
}

export async function getSuggested(text) {

    try {
        const response = await fetch((endpoints.suggest(text)), {
            method: 'GET'
        })

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error);
        }

        const data = await response.json();
        return data.suggestions;
    } catch (err) {
        console.log(err);
    }

}




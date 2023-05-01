const endpoints = {
    suggest: (text) => `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=${text}`,
    getAddress: (address) => `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=${encodeURIComponent(address)}%20BGR&f=json`
}

export async function getSuggested(text) {

    try {
        const response = await fetch((endpoints.suggest(text)), {
            method: 'GET'
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error);
        }

        const data = await response.json();
        return data.suggestions;

    } catch (err) {
        throw new Error(err.message);
    }

}

export async function getAddress(address) {

    try {
        const response = await fetch(endpoints.getAddress(address), {
            method: 'GET'
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error);
        }

        const result = await response.json();
        return result.candidates;

    } catch (err) {
        throw new Error(err.message);
    }
}


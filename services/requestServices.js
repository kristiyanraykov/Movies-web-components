export const request = async (url, method, body) => {
    let opitons = {
        method,
    };
    if (body){
        Object.assign(opitons, {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
    let response = await fetch(url, opitons);
    let data = await response.json();

    return data;
}
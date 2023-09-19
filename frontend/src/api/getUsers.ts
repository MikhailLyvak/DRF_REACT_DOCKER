const getUsers = async () => {
    // const headers = { 'Content-Type': 'application/json' }
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:5173');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Content-Type', 'application/json');
    const response = await fetch(
        `${process.env.REACT_APP_URL}/test/`,
        {
            method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
        }
    )
    console.log(response.type);
    const data = await response.json();

    return data;
};

export default getUsers;
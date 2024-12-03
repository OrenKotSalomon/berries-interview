

interface IAPI_CALL {
    GET: <T>(target: string) => Promise<T | any>
}

const API_CALL: IAPI_CALL = {
    GET: async <T>(target: string): Promise<T | any> => {
        const req = await fetch(`${target}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        });
        const res = await req.json();

        if (!res.status && res.errCode === 99) {
            alert('error loading data');
        }

        return res;
    },
};


export default API_CALL

export const convertObjectToQuery = (obj: any): string => {
    const rs: Array<string> = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            rs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return '?' + rs.join('&');
};

export const convertQueryToObject = (query: any) => {
    const params: Record<string, string> = {};
    for (const [key, value] of query) {
        params[key] = value;
    }
    return params;
};
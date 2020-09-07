const Adapter = {
    BASE_URL: 'http://127.0.0.1:8000',

    api_list: {
        url: "/api/r-l",
        params: {

        },
        method: "get"
    },
    api_lophoc_update: {
        url: "/api/update/r-l",
        params: {
            __token:"",//phai tao token roi lay token day vao form
            lophoc: {},
        },
        method: "post"
    }
}

export default Adapter;
import axios from "axios"

interface FetchParams {
    controller: string,
    method: string,
    params: any,
}

export default class Fetcher {

    public static async get(fetch_params: FetchParams): Promise<any> {
        const params = fetch_params.params
        params.mapping = fetch_params.method

        let res
        await axios.get("/api/web/" + fetch_params.controller, {
            params,
        })
        .then((response) => {
            res = response.data
        })
        .catch((err) => {
            throw err
        })

        return res
    }

    public static async post(fetch_params: FetchParams): Promise<any> {
        const search_params = new URLSearchParams()
        search_params.append("mapping", fetch_params.method)
        for (const key of Object.keys(fetch_params.params)) {
            search_params.append(key, fetch_params.params[key])
        }

        let res
        await axios.post("api/" + fetch_params.controller,
            search_params,
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            },
        )
        .then((response) => {
            res = response.data
        })
        .catch((err) => {
            return err
        })

        return res
    }

    public static async post_file(fetch_params: FetchParams, file_list: FileList): Promise<any> {
        const form_data = new FormData()
        form_data.append("mapping", fetch_params.method)
        for (const key of Object.keys(fetch_params.params)) {
            form_data.append(key, fetch_params.params[key])
        }
        for (let i = 0; i < file_list.length; i++) {
            const file = file_list.item(i)
            form_data.append(file!.name, file!)
        }

        let res
        await axios.post("api/" + fetch_params.controller,
            form_data,
            {
                headers: {"Content-Type": "multipart/form-data" },
            },
        )
        .then((response) => {
            res = response.data
        })
        .catch((err) => {
            return err
        })

        return res
    }

}
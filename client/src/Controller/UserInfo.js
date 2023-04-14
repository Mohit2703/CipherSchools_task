import axios from "axios";
import { localhost } from "../config";

const userinfo = async () => {
    const link = localhost + `auth/userDetails`;
    axios.get(link, { headers: {'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzcwYzExYmU0ODJmYzQ5NWY1MGJmYSIsImlhdCI6MTY4MTMyOTE4NX0.GYt0C8s7UlmKlZh6Vwscu3dovoaTj4Rn9KRHwgHA5W4'} }).then((response) => {
        return response;
    }).catch((err) => {
        console.log(err);
        return err;
    })
}

export { userinfo }
import axios from "axios";
import { from, map } from "rxjs"
export const httpService = {
    get
}

function get<T>(url: string) {
    return from(axios.get(url)).pipe(
        map((response) => response.data as T),
    );
}

function post() {

}

function put() {

}

function remove() {

}
import axios from "axios";
import { Observable, from, map } from "rxjs"
export const httpService = {
    get,
    post,
    put,
    remove,
}

function get<T>(url: string) {
    return from(axios.get(url)).pipe(
        map((response) => response.data as T),
    );
}

function post<T, X>(url: string, body: T): Observable<X> {
    return from(axios.post(url, body)).pipe(
        map((response) => response.data as X),
    );
}

function put<T, X>(url: string, body: T): Observable<X> {
    return from(axios.put(url, body)).pipe(
        map((response) => response.data as X),
    );
}

function remove<T>(url: string) {
    return from(axios.delete(url)).pipe(
        map((response) => response.data as T),
    );
}
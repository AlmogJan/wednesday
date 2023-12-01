import { httpService } from "./http.service";

export const mock = {
    getResponse
}

function getResponse() {
    return httpService.get<string>("http://localhost:8000/")
}
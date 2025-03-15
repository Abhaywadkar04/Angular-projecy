import { Login } from "./login";

export interface Register extends Login {
    username: string;
    password: string;

}

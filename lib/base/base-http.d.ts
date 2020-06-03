import { HttpMethod, Params, RequestResult, Headers, BaseHttpInterface } from "../interface";
import { Observable } from "rxjs";
import { BaseCapacity } from "./base";
import { BaseHttpUniapp } from "./base-http-uniapp";
export declare const queryStringify: (obj: any) => string;
export declare class BaseHttpXhr extends BaseCapacity implements BaseHttpInterface {
    send(method: HttpMethod, url: string, params: Params, headers?: Headers): Observable<RequestResult>;
    private sendXhr;
}
export declare const BaseHttp: typeof BaseHttpUniapp;
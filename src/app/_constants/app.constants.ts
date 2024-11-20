import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {

    private static SECRETKEY: string = 'TP9S6dZTjIpV7AbBVvOF1juSXtaMvaPQ';
    private static SECRETID = "X7eR4tU9oP2iL6kF3gWs";
    public static get getSecretKey(): string { return this.SECRETKEY; }
    public static get getSecretId(): string { return this.SECRETID; }

    // popup timeout
    popUpTimeout = 3000;
    
    // static routes for navigating components
    static readonly RouteURLs = {
        "INIT": "",
        "HOME": "/home",
        "MYDRIVE": '/mydrive',
        "SHAREDWITHME": 'shared',
        "RECENTS": 'recent',
        "STARRED": 'shared',
        "TRASH": 'trash',
        "STORAGE": 'storage'
    };
}
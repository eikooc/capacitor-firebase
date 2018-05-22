import { WebPlugin } from "@capacitor/core";
export declare class FirebasePluginWeb extends WebPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<void>;
}
declare const MyPlugin: FirebasePluginWeb;
export { MyPlugin };

import { WebPlugin } from "@capacitor/core";

export class FirebasePluginWeb extends WebPlugin {
  constructor() {
    super({
      name: "MyPlugin",
      platforms: ["web"]
    });
  }

  async echo(options: { value: string }) {
    console.log("ECHO", options);
    return Promise.resolve();
  }
}

const MyPlugin = new FirebasePluginWeb();

export { MyPlugin };

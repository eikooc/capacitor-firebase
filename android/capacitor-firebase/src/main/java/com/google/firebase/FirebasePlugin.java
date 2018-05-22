package com.google.firebase;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import com.google.firebase.analytics.FirebaseAnalytics;

@NativePlugin()
public class FirebasePlugin extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    // @PluginMethod()
    // public void logEvent(PluginCall call, String event, String data) {
    //     Bundle params = new Bundle();
    //     params.putString("image_name", name);
    //     params.putString("full_text", text);
    //     mFirebaseAnalytics.logEvent("share_image", params);
    //     call.success()
    // }
}

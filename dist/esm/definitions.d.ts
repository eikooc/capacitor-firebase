declare global  {
    interface PluginRegistry {
        EchoPlugin?: FirebasePlugin;
    }
}
export declare enum AnalyticsConstants {
    "ADD_PAYMENT_INFO" = 0,
    "ADD_TO_CART" = 1,
    "ADD_TO_WISHLIST" = 2,
    "APP_OPEN" = 3,
    "BEGIN_CHECKOUT" = 4,
    "CAMPAIGN_DETAILS" = 5,
    "CHECKOUT_PROGRESS" = 6,
    "EARN_VIRTUAL_CURRENCY" = 7,
    "ECOMMERCE_PURCHASE" = 8,
    "GENERATE_LEAD" = 9,
    "JOIN_GROUP" = 10,
    "LEVEL_END" = 11,
    "LEVEL_START" = 12,
    "LEVEL_UP" = 13,
    "LOGIN" = 14,
    "POST_SCORE" = 15,
    "PRESENT_OFFER" = 16,
    "PURCHASE_REFUND" = 17,
    "REMOVE_FROM_CART" = 18,
    "SEARCH" = 19,
    "SELECT_CONTENT" = 20,
    "SET_CHECKOUT_OPTION" = 21,
    "SHARE" = 22,
    "SIGN_UP" = 23,
    "SPEND_VIRTUAL_CURRENCY" = 24,
    "TUTORIAL_BEGIN" = 25,
    "TUTORIAL_COMPLETE" = 26,
    "UNLOCK_ACHIEVEMENT" = 27,
    "VIEW_ITEM" = 28,
    "VIEW_ITEM_LIST" = 29,
    "VIEW_SEARCH_RESULTS" = 30,
}
export interface FirebasePlugin {
    initializeApp(): void;
    logEvent(event: string | AnalyticsConstants, data: any): void;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
export {};

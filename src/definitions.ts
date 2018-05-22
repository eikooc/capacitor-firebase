declare global {
  interface PluginRegistry {
    EchoPlugin?: FirebasePlugin;
  }
}
// const protected = [
//   "ad_activeview",
//   "ad_click",
//   "ad_exposure",
//   "ad_impression",
//   "ad_query",
//   "adunit_exposure",
//   "app_clear_data",
//   "app_uninstall",
//   "app_update",
//   "error",
//   "first_open",
//   "first_visit",
//   "in_app_purchase",
//   "notification_dismiss",
//   "notification_foreground",
//   "notification_open",
//   "notification_receive",
//   "os_update",
//   "screen_view",
//   "session_start",
//   "user_engagement"
// ];
export enum AnalyticsConstants {
  "ADD_PAYMENT_INFO",
  "ADD_TO_CART",
  "ADD_TO_WISHLIST",
  "APP_OPEN",
  "BEGIN_CHECKOUT",
  "CAMPAIGN_DETAILS",
  "CHECKOUT_PROGRESS",
  "EARN_VIRTUAL_CURRENCY",
  "ECOMMERCE_PURCHASE",
  "GENERATE_LEAD",
  "JOIN_GROUP",
  "LEVEL_END",
  "LEVEL_START",
  "LEVEL_UP",
  "LOGIN",
  "POST_SCORE",
  "PRESENT_OFFER",
  "PURCHASE_REFUND",
  "REMOVE_FROM_CART",
  "SEARCH",
  "SELECT_CONTENT",
  "SET_CHECKOUT_OPTION",
  "SHARE",
  "SIGN_UP",
  "SPEND_VIRTUAL_CURRENCY",
  "TUTORIAL_BEGIN",
  "TUTORIAL_COMPLETE",
  "UNLOCK_ACHIEVEMENT",
  "VIEW_ITEM",
  "VIEW_ITEM_LIST",
  "VIEW_SEARCH_RESULTS"
}

export interface FirebasePlugin {
  initializeApp(): void;
  logEvent(event: string | AnalyticsConstants, data: any): void;
  echo(options: { value: string }): Promise<{ value: string }>;
}

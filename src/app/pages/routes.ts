import { OrderPage } from "./order/order.page";
import { AccountPage } from "./account/account.page";
import { HomePage } from "./home/home.page";
import { Routes } from "@angular/router";

export const ROUTES_LIST: Routes = [
  { path: "home", component: HomePage },
  { path: "account", component: AccountPage },
  { path: "order", component: OrderPage }
];

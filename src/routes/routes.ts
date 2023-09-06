import { lazy } from "react";
import { Routes } from "./interface";

const LazyPage1 = lazy(() => import("../LazyLoad/pages/LazyPage1"));
const LazyPage2 = lazy(() => import("../LazyLoad/pages/LazyPage2"));
const LazyPage3 = lazy(() => import("../LazyLoad/pages/LazyPage3"));

export const routes: Routes[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: LazyPage1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: LazyPage2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "Lazy-3",
  },
];

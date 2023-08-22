import { Router } from "./router.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/explorer", "/pages/explorer.html");
router.add(404, "/pages/404.html");

window.route = () => router.route();
window.onpopstate = () => router.handle();

router.handle();

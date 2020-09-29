"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const common_1 = require("../controllers/common");
const auth_1 = require("../middlewares/auth");
exports.router = express_1.Router();
exports.router.get("/", auth_1.requireAuthUser(), common_1.commonController.getHelloWorld);
exports.router.post("/coupons", auth_1.requireAuthUser(), common_1.commonController.postCoupons);
//# sourceMappingURL=common.js.map
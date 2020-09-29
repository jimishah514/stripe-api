"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenticated = true;
function requireAuthUser() {
    console.log("AuthUser Middleware");
    if (authenticated) {
        return (req, res, next) => {
            next();
        };
    }
    else
        return (req, res, next) => {
            res.send("Not Authenticated");
        };
}
exports.requireAuthUser = requireAuthUser;
//# sourceMappingURL=auth.js.map
import { MiddlewareFn } from "../types/myTypes"
const allUsers_get: MiddlewareFn = (req, res, next) => {
    res.json({t: "test"});
}

export default {allUsers_get}
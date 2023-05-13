"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// app.get('/', (req:Request, res:Response) => {
//   res.send('Express + TypeScript Server');
// });
const users_routes_1 = __importDefault(require("./routes/users.routes"));
// app.use('/users', userRouter);
app.use("/", users_routes_1.default);
// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
// app.use(function (err:any, req: Request, res: Response, next: NextFunction) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get("env") === "development" ? err : {};
// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render("error");
// });
exports.default = app;

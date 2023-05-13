import express, {Express, NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// app.get('/', (req:Request, res:Response) => {
//   res.send('Express + TypeScript Server');
// });


import usersRouter from"./routes/users.routes";
// app.use('/users', userRouter);
app.use("/", usersRouter);

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

export default app;
export const AuthMiddleware = (req, res, next) => {
  console.log("**** middle ware ****")
  next();
};
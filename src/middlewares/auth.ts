import { User } from "../models/user.js";
import ErrorHandler from "../utils/UtilityClass.js";
import { TryCatch } from "./error.js";

//Middleware to make sure only admin is allowed
export const adminOnly = TryCatch(async (req, res, next) => {
  const { id } = req.query;
  if (!id) return next(new ErrorHandler("Please log in to continue.", 401));
  const user = await User.findById(id);
  if (!user)
    return next(
      new ErrorHandler("Invalid ID. Please enter a valid ID to continue.", 401)
    );
  if (user.role !== "admin")
    return next(new ErrorHandler("Access restricted to Admins only.", 403));
  next();
});

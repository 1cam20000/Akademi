import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {



    
  } catch (error) {
    return res.status(404).json({ message: "unauthorized" });
  }
};


export { authMiddleware };

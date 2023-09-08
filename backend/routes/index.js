import userRoutes from "./userRoutes.js";
import blogRoutes from "./blogPostRoutes.js"

const constructorMethod = (app) =>{

  app.use("/api/users",userRoutes);
  app.use("/api/blog",blogRoutes);

  app.use("/test",(req,res) =>{
    //res.send("testing this thing");
    res.status(404);
    res.json({
      message: "testing this json"
    });
  })

};

export default constructorMethod;
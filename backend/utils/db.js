// import mongoose from "mongoose";


// async function main(){
//     await mongoose.connect("mongodb+srv://krish_vadadoriya:Sdh220986%23@cluster0.geeboy1.mongodb.net/mydatabase?retryWrites=true&w=majority");
//  }
//  main().then(()=>{
//      console.log("job-portal database connected");
//  })
//  .catch((err)=>{
//      console.log(err);
//  });


// export default main;
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(
      "mongodb://krish_vadadoriya:Sdh220986%23@ac-fjqmb9d-shard-00-00.geeboy1.mongodb.net:27017,ac-fjqmb9d-shard-00-01.geeboy1.mongodb.net:27017,ac-fjqmb9d-shard-00-02.geeboy1.mongodb.net:27017/job_portal?ssl=true&replicaSet=atlas-ji0cjk-shard-0&authSource=admin&appName=Cluster0"
    );
    console.log("job-portal database connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

// main();

export default main;
import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const projectSchema = new Schema(
  {
    image : {
      type: String,
      required: true,
  },
    name : {
        type: String,
        required: true,
    },
    desc : {
        type: String,
        required: true,
    },
    isFeatured : {
      type: Boolean,
      required: false,
      default : false,
  },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;


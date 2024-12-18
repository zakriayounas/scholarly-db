import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
    {
        class_name: {
            type: String,
            required: true,
            trim: true,
        },
        class_avatar: {
            type: String,
            default: "",
        },
        class_avatar_id: {
            type: String,
            default: "",
        },
        class_admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
            default: null
        },
        is_default: {
            type: Boolean,
            default: false,
        },
        has_multiple_sections: {
            type: Boolean,
            default: false,
        },
        section: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
            required: true,
        },
        class_capacity: {
            type: Number,
            default: 30,
            max: 50,
        },
        active_students_count: {
            type: Number,
            default: 0,
            validate: {
                validator: function (value) {
                    return value <= this.class_capacity;
                },
                message: "Active students count cannot exceed class capacity.",
            },
        },
        school_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "School",
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
classSchema.index({ class_name: 1, section: 1, school_id: 1 }, { unique: true });

const SchoolClass = mongoose.model("SchoolClass", classSchema);

export default SchoolClass;

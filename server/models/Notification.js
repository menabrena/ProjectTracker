let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NotificationSchema = new Schema(
    {
        projectID: {
            type: String,
            required: true
        },

        projectName: {
            type: String,
            required: true
        },

        emails: {
            type: [],
            required: true
        },

        budget: {
            type: Number,
            required: true
        },

        percentage: {
            type: Number,
            required: true
        },

        hasReachedHours: {
            type: Boolean,
            required: true,
            default: false
        }

        },{

        timestamps: true

    });

module.exports = mongoose.model('Notification',NotificationSchema);
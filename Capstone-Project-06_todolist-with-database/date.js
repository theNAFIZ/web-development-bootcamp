const date = new Date();
const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

exports.day = date.toLocaleDateString("en-US", options);

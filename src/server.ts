import mongoose from "mongoose";
import app from "./app";
import configuration from "./config";

async function main() {
    try {
        await mongoose.connect(configuration.mongodb_compass_url as string);
        app.listen(configuration.port, () => {
            console.log(
                "\x1b[32m%s\x1b[0m",
                `Server is listening on port ${configuration.port}`
            );
        });
        console.log("\x1b[32m%s\x1b[0m", `Database connected`);
    } catch (error) {
        console.log("\x1b[31m%s\x1b[0m", `Database connection error, ${error}`);
    }
}

main();

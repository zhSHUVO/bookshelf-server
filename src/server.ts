import mongoose from "mongoose";
import app from "./app";
import configuration from "./config";

async function main() {
    try {
        await mongoose.connect(configuration.mongodb_database_url as string);
        app.listen(configuration.port, () => {
            console.log(
                "\x1b[32m%s\x1b[0m",
                `Server is listening on port ${configuration.port}`
            );
        });
        console.log(`\x1b[32mDatabase connected`);
    } catch (error) {
        console.log(`\x1b[31mDatabase connection error, ${error}`);
    }
}

main();

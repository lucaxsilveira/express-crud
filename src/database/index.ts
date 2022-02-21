import "reflect-metadata";
import { createConnection } from "typeorm";

import Category from "../entities/typeorm/Category";
import Video from "../entities/typeorm/Video";

createConnection({
    entities: [Category, Video],
    type: "postgres",
    host: "localhost",
    port: 5438,
    username: "postgres",
    password: "postgres",
    database: "study",
    synchronize: true,
    logging: false,
})
    .then((connection) => {
        console.log("database connected");
    })
    .catch((error) => console.log("error on connection database", error));

import { CosmosClient } from "@azure/cosmos";
import * as https from 'https';
import "dotenv/config";
import assert from "assert";
import { setLogLevel } from "@azure/logger";

assert(process.env.COSMOS_ENDPOINT, "COSMOS_ENDPOINT is not defined");
assert(process.env.COSMOS_KEY, "COSMOS_KEY is not defined");
assert(process.env.NODE_ENV, "NODE_ENV is not defined");


// if (process.env.NODE_ENV === "production") {
//     setLogLevel("info");
// } else {
//     setLogLevel("verbose")
// }


const endpoint = process.env.COSMOS_ENDPOINT as string;
const key = process.env.COSMOS_KEY as string;
const client = new CosmosClient({
    endpoint,
    key,
    agent: new https.Agent({
        rejectUnauthorized: false
    })
});


export default client;
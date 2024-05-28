import "dotenv/config";
import { CosmosClient } from "@azure/cosmos";
import * as https from 'https';
import assert from "assert";

assert(process.env.COSMOS_ENDPOINT, "COSMOS_ENDPOINT is not defined");
assert(process.env.COSMOS_KEY, "COSMOS_KEY is not defined");

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

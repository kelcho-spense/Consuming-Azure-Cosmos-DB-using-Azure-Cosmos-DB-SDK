
import "dotenv/config";
import assert from "assert";
import client from './client.config.ts';
import { PartitionKeyDefinitionVersion, PartitionKeyKind } from '@azure/cosmos';

assert(process.env.DATABASE_NAME, "DATABASE_NAME is not defined");
assert(process.env.CONTAINER_NAME, "CONTAINER_NAME is not defined");
assert(process.env.DATABASE_THROUGHPUT, "DATABASE_THROUGHPUT is not defined");


// create db
const { database } = await client.databases.createIfNotExists({ id: process.env.DATABASE_NAME, throughput: parseInt(process.env.DATABASE_THROUGHPUT) });
// create container
const containerDefinition = {
    id: process.env.CONTAINER_NAME,
    partitionKey: {
        paths: ["/id"],
        version: PartitionKeyDefinitionVersion.V2,
        kind: PartitionKeyKind.MultiHash,
    },
}
const { container } = await database.containers.createIfNotExists(containerDefinition);

// console.log(database.id, container.id)


export default container;


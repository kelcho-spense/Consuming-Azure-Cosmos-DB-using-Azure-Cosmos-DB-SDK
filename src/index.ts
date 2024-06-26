import container from './db.config.ts';
import { familyMember, familyData, TUser } from './data.ts';
import { ErrorResponse, RestError } from '@azure/cosmos';


const errorHelper = (err: any) => {
    if (err instanceof ErrorResponse) {
        if (err.code === 409) {  // 409 is the status code for conflict for  Azure Cosmos DB
            console.log("Item you're creating already exist");
        } else {
            console.log(err.message)
        }
    } else if (err instanceof RestError) {
        console.log(err.message)
    } else {
        console.log(err.message)
    }
}

// create family member 
const createFamilyMember = async (familyMember: TUser) => {
    try {
        await container.items.create(familyMember);
    } catch (err) {
        errorHelper(err);
        return undefined;
    }
}

// create family members
const createUsers = async (users: TUser[]) => {
    if (familyData.length === 0) return;
    for (const user of familyData) {
        await createFamilyMember(user);
    }
}
// query family members
const queryAllFamilyMembers = async (): Promise<TUser[] | null> => {
    try {
        const { resources } = await container.items
            .query({
                query: "SELECT * FROM c"
            }).fetchAll();
        return resources;

    } catch (err) {
        errorHelper(err);
        return null;
    }
}
// query family members via id
const queryFamilyMembersViaID = async (id: string): Promise<TUser[] | null> => {
    try {
        const { resources } = await container.items
            .query({
                query: "SELECT * FROM c WHERE c.id=@id",
                parameters: [{ name: "@id", value: id }]
            }).fetchAll();
        return resources;

    } catch (err) {
        errorHelper(err);
        return null;
    }
}
// search members via country with query parameters
const queryFamilyMembersByCountry = async (country: string): Promise<TUser[] | null> => {
    try {
        const { resources } = await container.items
            .query({
                query: "SELECT * FROM c WHERE c.Country=@country",
                parameters: [{ name: "@country", value: country }]
            }).fetchAll();
        return resources;
    } catch (err) {
        errorHelper(err);
        return null;
    }
}
// delete family member
const deleteFamilyMember = async (id: string) => {
    try {
        await container.item(id).delete();        
    } catch (err) {
        errorHelper(err);
    }
}


await createFamilyMember(familyMember);
console.log(await queryAllFamilyMembers());
// await createUsers(familyData);
// console.log(await queryFamilyMembersByCountry('China'));
// deleteFamilyMember('Chen.5')

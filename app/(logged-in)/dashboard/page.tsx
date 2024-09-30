import getDbConnection from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
    const sql = await getDbConnection();

    const currUser = await currentUser();

    const email = currUser?.emailAddresses[0].emailAddress;

    const response =
        await sql`SELECT * FROM users WHERE status='cancelled' AND email=${email}`;

    return <section>Dashboard Status: {JSON.stringify(response)}</section>;
}

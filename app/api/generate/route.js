import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // check if the URL already exists
    const doc = await collection.findOne({ shortUrl: body.shortUrl });
    if (doc) {
        return Response.json({
            success: false,
            error: true,
            message: "shortURL already exists."
        })
    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return Response.json({
        success: true,
        error: false,
        message: "URL generated successfully"
    });
}

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const result = await db.collection("url").find({}).toArray();

        return new Response(JSON.stringify(result), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error(error);
        return Response.json({ error: "Database connection error" }, { status: 500 });
    }
}

// export async function DELETE(request) {
//     try {
//         const client = await clientPromise;
//         const db = client.db("bitlinks");

//         // Extract the ID from the request
//         const { searchParams } = new URL(request.url);
//         const id = searchParams.get("id");

//         if (!id) {
//             return new Response(JSON.stringify({ error: "Missing link ID" }), { status: 400 });
//         }

//         // Perform the deletion
//         const result = await db.collection("url").deleteOne({ _id: new ObjectId(id) });

//         if (result.deletedCount === 1) {
//             return new Response(JSON.stringify({ message: "Link deleted successfully" }), {
//                 headers: { "Content-Type": "application/json" },
//                 status: 200,
//             });
//         } else {
//             return new Response(JSON.stringify({ error: "Link not found" }), { status: 404 });
//         }
//     } catch (error) {
//         console.error(error);
//         return new Response(JSON.stringify({ error: "Database connection error" }), { status: 500 });
//     }
// }

export async function DELETE(request) {
    const session = await getServerSession(authOptions);
    

    // Check if the user is authenticated
    if (!session) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    try {
        const client = await clientPromise;
        const db = client.db("bitlinks");

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return new Response(JSON.stringify({ error: "Missing link ID" }), { status: 400 });
        }

        // Delete the link
        const result = await db.collection("url").deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 1) {
            return new Response(JSON.stringify({ message: "Link deleted successfully" }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ error: "Link not found" }), { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Database connection error" }), { status: 500 });
    }
}
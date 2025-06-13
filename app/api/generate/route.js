import clientPromise from "@/lib/mongodb";

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
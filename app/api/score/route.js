import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await createConnection();
        const sql = "SELECT * FROM score";
        const [score] = await db.query(sql);
        return NextResponse.json({score: score});
    } catch(error) {
        console.log(error)
        return NextResponse.json({error: error.message})
    }   
}

export async function POST(request) {
    try {
        const { id, mainValue } = await request.json();
        const db = await createConnection();
        const sql = "INSERT INTO login (id, lastUpdate, mainValue) VALUES (?, ?, ?)";
        const [result] = await db.query(sql, [id, lastUpdate, mainValue]);
        return NextResponse.json({lastUpdate: lastUpdate});
    } catch(error) {
        console.log(error);
        return NextResponse.json({ error: error.message });
    }
}

export async function PUT(request) {
    try {
        const { mainValue } = await request.json();
        const db = await createConnection();
        const sql = "UPDATE score SET mainValue = ? WHERE id = ?";
        await db.query(sql, [mainValue, 1]); //Score ID
        return NextResponse.json({ success: true });
    } catch(error) {
        return NextResponse.json({ error: error.message });
    }
}

import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await createConnection();
        const sql = "SELECT * FROM login";
        const [login] = await db.query(sql);
        return NextResponse.json({login: login});
    } catch(error) {
        console.log(error)
        return NextResponse.json({error: error.message})
    }   
}

export async function POST(request) {
    try {
        const { bookname, password } = await request.json();

        const db = await createConnection();
        const sql = "INSERT INTO login (bookname, password) VALUES (?, ?)";
        await db.query(sql, [bookname, password]);
        return NextResponse.json({ success: true });
    } catch(error) {
        console.log(error);
        return NextResponse.json({ error: error.message });
    }
}


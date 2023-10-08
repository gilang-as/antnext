import { NextResponse } from "next/server";

type Post = {
    name: string;
    age: number;
}

const paginate = (data: Post[], pageIndex: number, pageSize: number) : Post[] => {
    let endIndex = Math.min((pageIndex + 1) * pageSize, data.length);
    return data.slice(Math.max(endIndex - pageSize, 0), endIndex);
}

const post :Post[] = [
    {
        name: "John Doe",
        age: 20
    },
    {
        name: "Joseph Doe",
        age: 15
    },
    {
        name: "Jane Doe",
        age: 10
    },
    {
        name: "Jenny Doe",
        age: 5
    },
    {
        name: "Jhonny Doe",
        age: 2
    }
];

export async function GET(request: Request) {
    // Do whatever you want
    return NextResponse.json({ message: "Success Get Data", data: paginate(post, 0, 15) }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: Request) {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, ProductImage, Title} from "@/components/shared";
import React from "react";
import GroupVariants from "@/components/shared/group-variants";


export default async function ProductModalPage({params: {id}}: { params: { id: string } }) {


    return (
        <h1>AAAAAAAA</h1>
    )
}
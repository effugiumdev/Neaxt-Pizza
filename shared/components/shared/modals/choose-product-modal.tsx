'use client'

import React from 'react';
import {cn} from "@/lib/utils";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {useRouter} from "next/navigation";
import {ChooseProductForm} from "@/components/shared/choose-product-form";
import {ProductWithRelations} from "@/@types/prisma";
import {ChoosePizzaForm} from "@/components/shared/choose-pizza-form";

interface Props {
    product: ProductWithRelations;
    className?: string
}

export const ChooseProductModal: React.FC<Props> = ({product, className}) => {
    const router = useRouter()
    const isPizzaForm = Boolean(product.items[0].pizzaType)

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
                    className
                )}>
                {isPizzaForm ? (
                    <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]}/>
                ) : (
                    <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
                )}
            </DialogContent>
        </Dialog>
    );
};

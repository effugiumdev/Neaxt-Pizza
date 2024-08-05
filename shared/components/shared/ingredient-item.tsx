import React from 'react';
import {cn} from "@/shared/lib/utils";
import {CircleCheck} from "lucide-react";

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

const Ingredient: React.FC<Props> = ({
                                         className,
                                         active,
                                         price,
                                         name,
                                         imageUrl,
                                         onClick,
                                     }) => {
    return (
        <div className={cn(
            'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
            { 'border border-primary': active },
            className
        )}
             onClick={onClick}>
            {active && <CircleCheck className="absolute top-2 right-2 text-primary" />}
            
        </div>
    );
};

export default Ingredient;
import { twMerge } from "tailwind-merge"
import { HTMLAttributes } from "react"
export default function Key(props:HTMLAttributes<HTMLDivElement>)  {
    const { className, children, ...otherProps } = props;
    return (
        <div className={twMerge("size-24 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium", className)} {...otherProps}>
            {children}
        </div>
    )
}
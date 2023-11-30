import { ComponentProps } from "react";

interface TextProps extends ComponentProps<'span'> {}

export default function Text(props: TextProps) {
    return <span {...props}/>
}
import { Link } from "react-router"
import { SearchButton } from "./styles"

interface ButtonProps {
    link : string,
    text: string
}

export function Button({ link, text }: ButtonProps) {
    return (
        <SearchButton as={Link} to={link}>
            {text}
        </SearchButton>
    )
}
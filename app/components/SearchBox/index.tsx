
import { Form } from "@remix-run/react";
import { useState } from "react";

interface SearchBoxProps {
    placeholder: string;
};


export default function SearchBox({ placeholder }: SearchBoxProps) {   
    const [text, settext] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        settext(value);
    };
    
    return (
        <Form id="searchbox" method="post">
            <p>
                This is the SearchBox page.
            </p>
            <button type="submit"><i className="bi bi-search-heart"></i></button>
            <input type="text" name="searchbox" id="searchbox" placeholder={placeholder} onChange={handleChange} value={text} />
        </Form>
    )
}
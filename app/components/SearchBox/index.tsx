
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

interface SearchBoxProps {
    placeholder: string;
};


export default function SearchBox({ placeholder }: SearchBoxProps) {
    const datos = useLoaderData();
    const [text, settext] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(datos.APIKEY);


    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        settext(value);

    };

    return (
        <form id="searchbox" onSubmit={handleSubmit}>
            <p>
                This is the SearchBox page.
            </p>
            <button><i className="bi bi-search-heart"></i></button>
            <input type="text" name="searchbox" id="searchbox" placeholder={placeholder} onChange={handleChange} value={text} />
        </form>
    )
}
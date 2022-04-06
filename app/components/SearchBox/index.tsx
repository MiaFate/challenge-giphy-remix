
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

interface SearchBoxProps {
    placeholder: string;
};

export default function SearchBox({ placeholder }: SearchBoxProps) {
    const datos = useLoaderData();

    const [text, settext] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(datos.APIKEY);
        const result = await fetchGiPHY(text);
        console.log(result);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        settext(value);
    };
    const fetchGiPHY = async (query:string) => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${datos.APIKEY}&q=${query}&limit=25&offset=0&rating=G&lang=en`);
        const { data } = await response.json();
        console.log(data);
    }


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
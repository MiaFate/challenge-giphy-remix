import { useActionData, useLoaderData } from "@remix-run/react";

interface item{
    id: string;
    title: string;
    images: {
        original: {
            url: string;
        }
    }
}

export default function Card() {
    const resultLoader = useLoaderData();
    const resultAction = useActionData();
    
    let { data } = resultAction ? resultAction : resultLoader;
    console.log(data);
    return (
        <div>
            {data.map((item: item) => (
                <img key={item.id} src={item.images.original.url} alt={item.title} />
            ))}
        </div>
    );
}
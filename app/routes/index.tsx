
import { ActionFunction, LoaderFunction } from "@remix-run/node";

import Cards from "~/components/cards";
import SearchBox from "../components/SearchBox";

export const loader: LoaderFunction = async () => {
  const respose = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.APIKEY}&limit=25&rating=g`);
  const { data } = await respose.json();
  return {
    data
  };
};

export const action: ActionFunction = async ({ request }) => {
  try {
    let formData = await request.formData();
    let { searchbox } = Object.fromEntries(formData);
  
    let url = "";
    if (searchbox == "") {
      url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.APIKEY}&limit=25&rating=g`;
    } else {
      url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.APIKEY}&q=${searchbox}&limit=25&offset=0&rating=G&lang=en`;
    }
  
    const response = await fetch(url);
    const { data } = await response.json();
  
    return { data };
  } catch (error) {
    console.log((error as Error).message);
  }
 

};

/* export async function action({ request }: any) {
  let formData = await request.formData();
  let { searchbox } = Object.fromEntries(formData);

  let url = "";
  if(searchbox==""){
    url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.APIKEY}&limit=25&rating=g`;
  }else{
    url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.APIKEY}&q=${searchbox}&limit=25&offset=0&rating=G&lang=en`;
  }

  const response = await fetch(url);
  const { data } = await response.json();

  return { data };

}; */

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        <SearchBox placeholder={"Search GIPHY"} />
      </div>
      <Cards />
    </>
  );
}

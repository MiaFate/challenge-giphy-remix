import { json, LoaderFunction } from "@remix-run/node";

import SearchBox from "../components/SearchBox";

export const loader: LoaderFunction = async () => {

  return json({
    APIKEY: process.env.APIKEY,
  });

};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <SearchBox placeholder={"Search GIPHY"} />
    </div>
  );
}

import Link from "next/link";
import useSWR, { mutate } from "swr";
import fetcher from "../lib/fetcher";
import { useState } from "react";

const URL = "/api/articles";

export default function Some() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data } = useSWR(shouldFetch ? URL : null, fetcher, {
    revalidateOnFocus: false,
  });

  function handleClick() {
    setShouldFetch(true);
    mutate(URL); // 정확한 위치는 아닌것 같다
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Article List</h1>
      <button onClick={handleClick}>Fetch</button>
      <div>
        {data && data.length > 0
          ? data.map((article) => (
              <p key={article.title}>
                {article.title}: {article.content}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}

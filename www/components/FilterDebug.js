import { useAtom } from "jotai";

import { searchState } from "../state/FilterState";
import { fetchData } from "../state/OfferState";

const FilterDebug = () => {
  const [searchStateObj] = useAtom(searchState);
  const [_, fetchOffers] = useAtom(fetchData);
  return (
    <>
      <pre style={{ fontSize: 10, background: "whitesmoke", padding: 4 }}>
        {JSON.stringify(searchStateObj, "", 4)}
      </pre>
      <button onClick={() => fetchOffers("http://localhost:3000/api/offers")}>
        Update Results
      </button>
    </>
  );
};

export default FilterDebug;

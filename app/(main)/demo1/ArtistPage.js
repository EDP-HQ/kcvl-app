import { Suspense } from "react";
import Albums from "./Albums.js";
// import Biography from "./Biography.js";
// import Panel from "./Panel.js";

export default function ArtistPage({ artist }) {
  // console.log('ArtisPage',artist)
  return (
    <div>
      <h1>{artist.name}</h1>
      <Suspense fallback={<Loading />}>
        {/* <Biography artistId={artist.id} />
        <Panel>
          <Albums artistId={artist.id} />
        </Panel> */}

        <Albums artistId={artist.id} />
      </Suspense>
    </div>
  );
}

function Loading() {
  return <i className="pi pi-spin pi-spinner" style={{ fontSize: "2rem" }}></i>;
}

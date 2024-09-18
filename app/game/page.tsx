import { CricketEvent } from "@virtuallysports/vs-utils";

// const URL = "https://game.vsldemos.com/api/v1/routineevents/3";

export default function GamesPage() {
  // TODO: Fetch data from the API
  // TODO: parse and sort data
  const data: CricketEvent[] = [];

  return (
    <div className="p-4">
      <h1>Games Route</h1>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <span>{d.id}</span>
            <span>{d.startTime}</span>
            <span>{d.results}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { CricketEvent } from "@virtuallysports/vs-utils";

// const URL = "https://game.vsldemos.com/api/v1/routineevents/3";

export default function GamesPage() {
  // TODO: Fetch data from the API
  const data: Record<string, CricketEvent[]> = {};
  // TODO: Create groupByDate function, sort and map to EventGroup cmp

  return (
    <div className="p-4">
      <h1>Games Route</h1>
      <ul>{/* map data to EventGroup */}</ul>
    </div>
  );
}

interface EventGroupProps {
  date: string;
  cricketEvents: CricketEvent[];
}

function EventGroup({ date, cricketEvents }: EventGroupProps) {
  return (
    <li>
      <span>{date}</span>
      <ul>
        {cricketEvents.map((ce) => (
          <li key={ce.id}>
            <span>{ce.id}</span>
            <span>{ce.startTime}</span>
            <span>{ce.status}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

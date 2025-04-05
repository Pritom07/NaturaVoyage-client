import { useLoaderData } from "react-router-dom";

const AllSpots = () => {
  const allSpots = useLoaderData();
  return (
    <div>
      <h1>allspot</h1>
    </div>
  );
};

export default AllSpots;

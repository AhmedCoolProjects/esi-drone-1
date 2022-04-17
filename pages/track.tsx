import { useQuery } from "react-query";
import { appAxios } from "../src/axios";
import { GoogleMapCompoenentF, Header } from "../src/components";
import { useAppSelector } from "../src/store";

export default function TrackingPage() {
  const coords = useAppSelector((state) => state.coords.coords);

  const formatFromPathsToPathsLists = (paths) => {
    const lat_list = paths.map((path) => path.lat);
    const lng_list = paths.map((path) => path.lng);
    return { lat_list, lng_list };
  };

  // console.log();

  const { data, isLoading } = useQuery("todos", async () => {
    const { data } = await appAxios.post(
      "/tps",
      formatFromPathsToPathsLists(coords)
    );
    console.log("data", data);
    return data;
  });
  return (
    <div>
      <Header />
      {/* <GoogleMapCompoenentF /> */}
    </div>
  );
}

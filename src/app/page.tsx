import { type FC } from "react";

export const dynamic = "hogehoge";
export const dynamicParams = 1;
export const revalidate = "hogehoge";
export const fetchCache = "hogehoge";
export const runtime = "hogehoge";
export const preferredRegion = 1;

const Home: FC = () => {
  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
      </div>
    </div>
  );
};

export default Home;

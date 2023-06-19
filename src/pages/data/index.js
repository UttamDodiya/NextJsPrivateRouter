import axios from "axios";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  try {
    const re = await axios.get("https://dummyjson.com/carts");
    const repo = re.data;
    return { props: { repo } };
  } catch (e) {
    const repo = e.message;
    return { props: { repo } };
  }
};
export default function Data({ repo }) {
  return (
    <>
      {!repo.carts?.length && <h1>Not Found</h1>}
      {repo.carts?.map((data, index) => console.log(data))}
    </>
  );
}

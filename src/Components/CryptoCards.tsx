import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { useGetCoinQuery } from "../API/crpyptoCoinsAPI";
import Error from "./Error";

type CryptoCardsProps = {};

const CryptoCards: FC<CryptoCardsProps> = (props) => {
  let { uuid } = useParams();

  const { data, isLoading, error } = useGetCoinQuery(uuid!);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <Error error={error}></Error>;
  }

  const coin = data?.data.coin;

  return (
    <>
      <div className="flex flex-col items-center justify-center w-1/2 p-5 mx-auto mt-20 space-y-3 text-blue-800 bg-red-200 rounded-md shadow-2xl">
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl">{coin?.name}</h2>
          <img alt="crypton Coins" className="w-12 h-12 mx-auto my-3" src={coin?.iconUrl}></img>
        </div>
        <div className="text-center">
          <p>Symbol: {coin?.symbol}</p>
          <p>Price: {coin?.price}</p>
          <p>MarketCap: {coin?.marketCap}</p>
          <p>Ranking URL: {coin?.coinrankingUrl}</p>
        </div>
        <div>
          <p>Description: {coin?.description.replace(/(<([^>]+)>)/gi, " ")}</p>
        </div>
      </div>
    </>
  );
};

CryptoCards.defaultProps = {};

export default memo(CryptoCards);

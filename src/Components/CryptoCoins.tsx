import { FC, memo, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../API/crpyptoCoinsAPI";
import Error from "./Error";
import Search from "./Search";

interface CryptoCoinsProps {}

const CryptoCoins: FC<CryptoCoinsProps> = () => {
  const { data, isLoading, error } = useGetCoinsQuery();
  const [search, setSearch] = useState("");

  console.log(data?.data.coins);
  let filteredData = data?.data.coins.filter((coin) => coin.name.toLowerCase().includes(search));

  if (error) {
    return <Error error={error}></Error>;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <>
          <div>
            <Search setSearch={setSearch} search={search}></Search>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-10 pl-5 mx-auto">
            {filteredData?.map((coin) => (
              <Link to={`/coin/${coin.uuid}`}>
                <div
                  key={coin.name}
                  className="flex p-2 mt-5 text-blue-800 bg-red-200 border border-red-700 shadow-2xl rounded-xl hover:bg-red-300 hover:text-blue-600 w-72 hover:ease-in hover:transition h-46"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-center">
                      <p className="text-xl font-semibold ">
                        {coin.rank}. {coin.name}
                      </p>
                      <p>({coin.symbol})</p>
                    </div>
                    <img alt="crypton Coins" className="w-8 h-8 mx-auto my-3" src={coin.iconUrl}></img>
                    <div className="space-y-2 text-center">
                      <p>Market Cap: {Math.round((coin.marketCap / 1000000000) * 100) / 100} B</p>
                      <p>{coin.color}</p>
                      <p>Price: {Math.round(coin.price * 100) / 100} $</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default memo(connect(mapStateToProps, mapDispatchToProps)(CryptoCoins));

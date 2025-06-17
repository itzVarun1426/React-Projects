import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(api)
            .then((res) => res.json())
            .then((res) => {
                // Extract the nested object that contains currency rates
                if (res && res[currency]) {
                    setData(res[currency]);
                } else {
                    setData({});
                }
            })
            .catch((err) => {
                console.error("Error fetching currency data:", err);
                setData({});
            });
    }, [currency]);

    return data;
};

export default useCurrencyInfo;

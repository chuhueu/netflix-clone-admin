import "./stats.css";
import BChart from "../../components/chart/BChart";
import { useEffect, useState, useMemo } from "react";
import axios from "../../axios";

export default function Stats() {
    const [transactionStats, setTransactionStats] = useState([]);
    const MONTHS = useMemo(
        () => [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        []
    );

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("transaction/stats");
                const statsList = res.data.sort(function (a, b) {
                    return a._id - b._id;
                });
                statsList.forEach((item) => {
                    setTransactionStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "Revenue": item.total },
                    ])
                });
            } catch (error) {
                console.log(error);
            }
        };
        getStats();
    }, [MONTHS]);
    console.log(transactionStats);
    return (
        <div className="userList">
            <BChart data={transactionStats} title="Transaction Analytics" grid dataKey="Revenue" />
        </div>
    );
}

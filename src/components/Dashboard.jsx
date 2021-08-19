import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "./Container";
import PageLoader from "./PageLoader/PageLoader";
import Display from "./Display";
import LaunchFilterAndDatePicker from "./LaunchFilterAndDatePicker";

const Dashboard = () => {
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [page, setPage] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const [launches] = useState([
    { label: "All Launches", value: "all" },
    { label: "Upcoming Launches", value: "upcoming" },
    { label: "Successful Launches", value: "success" },
    { label: "Failed Launches", value: "failed" },
  ]);
  const [dateList] = useState([
    {
      label: "Past Week",
    },
    {
      label: "Past Month",
    },
    {
      label: "Past 3 Month",
    },
    {
      label: "Past 6 Month",
    },
    {
      label: "Past Year",
    },
    {
      label: "Past 2 Years",
    },
  ]);
  const [calender, setCalender] = useState("");
  const [date, setDate] = useState("");

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentLaunch = info.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchData = async () => {
    const resp = await axios.get("https://api.spacexdata.com/v3/launches");
    setInfo(resp.data);
    setData(resp.data);
    setLoading(false);
  };

  const handleChange = (nextPage) => {
    setPage(nextPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (calender) {
      setInfo(
        data.filter((e) => {
          return (
            new Date(new Date(e.static_fire_date_utc).toLocaleDateString()) >=
            new Date(new Date(calender).toLocaleDateString())
          );
        })
      );
    } else {
      if (date === "Past Week") {
        setInfo(
          data.filter((e) => {
            const d = new Date();
            d.setDate(d.getDate() - 7);
            setDate(new Date(d).toLocaleDateString());
            return (
              new Date(new Date(e.static_fire_date_utc).toLocaleDateString()) >=
              new Date(d.toLocaleDateString())
            );
          })
        );
      } else if (date === "Past Month") {
        setInfo(
          data.filter((e) => {
            let d = new Date();
            d.setMonth(d.getMonth() - 1);
            setDate(new Date(d).toLocaleDateString());
            return (
              new Date(new Date(e.static_fire_date_utc).toLocaleDateString()) >=
              new Date(d.toLocaleDateString())
            );
          })
        );
      } else if (date === "Past 3 Month") {
        setInfo(
          data.filter((e) => {
            let d = new Date();
            d.setMonth(d.getMonth() - 3);
            setDate(new Date(d).toLocaleDateString());
            return (
              new Date(new Date(e.static_fire_date_utc).toLocaleDateString()) >=
              new Date(d.toLocaleDateString())
            );
          })
        );
      } else if (date === "Past 6 Month") {
        setInfo(
          data.filter((e) => {
            let d = new Date();
            d.setMonth(d.getMonth() - 6);
            setDate(new Date(d).toLocaleDateString());
            return (
              new Date(new Date(e.static_fire_date_utc).toLocaleDateString()) >=
              new Date(d.toLocaleDateString())
            );
          })
        );
      } else if (date === "Past Year") {
        setInfo(
          data.filter((e) => {
            let d = new Date();
            d.setFullYear(d.getFullYear() - 1);
            setDate(new Date(d).toLocaleDateString());
            return (
              new Date(new Date(e.static_fire_date_utc).toLocaleDateString()) >=
              new Date(d.toLocaleDateString())
            );
          })
        );
      } else if (date === "Past 2 Years") {
        setInfo(
          data.filter((e) => {
            let d = new Date();
            d.setFullYear(d.getFullYear() - 2);
            setDate(new Date(d).toLocaleDateString());
            return (
              new Date(new Date(e.static_fire_date_utc).toLocaleDateString()) >=
              new Date(d.toLocaleDateString())
            );
          })
        );
      }
    }
  }, [date, data, calender]);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <LaunchFilterAndDatePicker
        handleChange={handleChange}
        launches={launches}
        calender={calender}
        setCalender={setCalender}
        overlay={overlay}
        setOverlay={setOverlay}
        dateList={dateList}
        date={date}
        setDate={setDate}
      />
      {launches.map((e, i) => {
        return (
          e.value === page && (
            <div key={e.value + i}>
              <Display
                info={currentLaunch}
                status={e.value}
                total={info.length}
                perPage={perPage}
                paginate={paginate}
              />
            </div>
          )
        );
      })}
    </Container>
  );
};

export default Dashboard;

import React from "react";
import { useSelector } from "react-redux";
import DoctorItem from "../components/doctorItem";
import DoctorListLoader from "../components/loaders/doctorListLoader";
import { useState } from "react";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const DoctorList = () => {
  let dataResults = [];
  const [doctors, setDoctors] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  const fetchDoctors = async () => {
    const res = await axios
      .get(`http://localhost:3090/doctors?page=${pageIndex}`, {
        params: {
          per_page: 10,
        },
      })
      .then((results) => {
        //console.log(results.data.doctors);
        return results.data.doctors;
      });

    for (let index = 0; index < 10; index++) {
      dataResults.push(res[index]);
    }
    setDoctors(dataResults);
  };

  useEffect(() => {
    fetchDoctors();
  }, [pageIndex]);

  const infiniteCheck = () => {
    console.log("hello Check");
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight - scrollTop === clientHeight) {
      console.log("BOOTOM");
      setPageIndex((pageIndex) => pageIndex + 1);
      console.log(pageIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteCheck);

    return () => {
      window.removeEventListener("scroll", infiniteCheck);
    };
  }, []);

  return (
    <div>
      <h3 className="text-success align-center m-3">Listes des docteurs</h3>
      {doctors &&
        doctors.map((doctor) => {
          return <DoctorItem key={doctor.id} doctor={doctor} />;
        })}

      {!doctors && <DoctorListLoader />}
    </div>
  );
};

export default DoctorList;

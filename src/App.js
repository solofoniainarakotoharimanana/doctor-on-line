import "./App.css";
import Header from "../src/components/header";
import DescriptionSite from "./pages/descriptionSite";
import doctorImg from "../src/assets/images/home/doctor.png";
import Search from "./components/search";
import DoctorList from "./pages/doctorList";
import { Outlet } from "react-router-dom";
import { DoctorAPI } from "./api/doctorApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDoctors } from "./store/doctorSlice";

function App() {
  const dispatch = useDispatch();
  async function getDoctors() {
    const doctors = await DoctorAPI.getDoctors();
    dispatch(setDoctors(doctors));
  }

  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <DescriptionSite doctorImg={doctorImg} />
        <Search />
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;

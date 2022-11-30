/*
    Page : Dashboard Componene
    route : Speaking
    Description : This is the dashboard component
*/

import Image from "next/image";
import Link from "next/link";

import {
  MdOutlineMicNone,
  MdModeEdit,
  MdHeadphones,
  MdBook,
} from "react-icons/md";

export default function DashBoardSpeakingComponent({ data }) {
  if (data.role == "Admin") {
    // Permission To Edit View And Delete All Speaking
  } else if (data.role == "Teacher") {
    // Permission To Add, Edit, View And Delete All Which Belongs To Teacher
    return (
        <>
            <div id="change" className="flex flex-col items-center justify-center w-full h-full">
                Permission To Add, Edit, View And Delete All Which Belongs To Teacher
            </div>
        </>
    );
  } else if (data.role == "Student") {
    // Permission To View And Play Which is Active Right Now
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full">
                Permission To View And Play
            </div>
        </>
    );
  } else {

  }
}

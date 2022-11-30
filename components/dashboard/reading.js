/*
    Page : Dashboard Componene
    route : Reading
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

export default function DashBoardReadingComponent({ data }) {
  if (data.role == "Admin") {
    // Permission To Edit View And Delete All Reading
  } else if (data.role == "Teacher") {
    // Permission To Add, Edit, View And Delete All Which Belongs To Teacher
  } else if (data.role == "Student") {
    // Permission To View And Play Which is Active Right Now
    
  } else {

  }
}

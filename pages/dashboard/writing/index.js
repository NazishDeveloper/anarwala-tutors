// writing/index.js

import React from "react";

export default function WritingIndex() {
  const role = 2;

  if (role == 0) {
    return (
      <>
        <h1>Admin Dashboard</h1>
      </>
    );
  } else if (role == 1) {
    return (
      <>
        <h1>Teacher Dashboard</h1>
      </>
    );
  } else if (role == 2) {
    return (
      <>
        <h1>Student Dashboard</h1>
      </>
    );
  }
}

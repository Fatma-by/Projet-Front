import React, { useState } from "react";
import CardList from "../../Card/CardList";
import DevoirArabe from "./DevoirArabe";
import ExerciceArabe from "./ExerciceArabe";
import CoursArabe from "./CoursArabe";
import Premiere from "../../Premiere/Premiere";

import { Routes, Route, Navigate } from "react-router-dom";

export default function Arabe() {
  return (
    <>
      <div >
       <CardList/>
      </div>
    </>
  );
}

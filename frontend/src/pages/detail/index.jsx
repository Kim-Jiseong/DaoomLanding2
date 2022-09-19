import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/index'
import Limonadier from './components/limonadier/index'
import axios from "axios";
function Detail() {
  return (
    <div>
        <Header></Header>
        <Limonadier/>
    </div>
  )
}

export default Detail
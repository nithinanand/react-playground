import logo from "./logo.svg";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LaptopData from "./Data";
const logoStyle = {
  height: "50px",
  width: "50px",
};

const tileBlock = {
  width:"200px",
  display:"block",
  float:"left",
  height:"400px",
  marginLeft:"10%",
  border:"solid",
  borderColor:"grey",
  margin:"2%",

}

function Products() {
  const nav = useNavigate();
  const { brand}  = useParams();
  const {ram} = useParams();
  const [jsonData,setJsonData] = useState([]);
  const [setBrand] = useState("");
  const [setRam] = useState("");
  const [processor, setProcessor] = useState("");
  const [storage, setStorage] = useState("");
  const [gpu, setGpu] = useState("");
  const [gpuType, setGpuType] = useState("");
  const [os,setOs] = useState("");
  //const url = "http://localhost:5000/api/products";
  //const {refresh} = useState(false);
  //const{data:LaptopData,loading,error,}=useFetch(url,refresh);
    
  function RenderLaptops(p){
    return(
      <div key={p.id} className="Block" style={tileBlock}>
        
        <div>Brand: {p.brand}</div>
          <div>Model: {p.Model}</div>
          <div>Processor Brand: {p.processor_brand}</div>
          <div>Number of Cores: {p.num_cores}</div>
          <div>RAM: {p.ram_memory}</div>
          <div>Storage Type: {p.primary_storage_type}</div>
          <div>Storage Capacity: {p.primary_storage_capacity}</div>
          <div>GPU Brand: {p.gpu_brand}</div>
          <div>GPU Type: {p.gpu_type}</div>
          <div>OS: {p.OS}</div>
          <div>Price: {p.Price}</div>
    
      </div>
    );
  }
  
  const filteredLaptopRam = ram ? LaptopData.filter((p)=>p.ram_memory === parseInt(ram)):LaptopData;
  const filteredLaptopBrand = brand ? LaptopData.filter((p)=>p.brand === brand):LaptopData;
  // const filteredLaptopProcessor = processor ? LaptopData.filter((p)=>p.processor_brand === processor):LaptopData;
  // const filteredLaptopStorage = storage ? LaptopData.filter((p)=>p.primary_storage_capacity === parseInt(storage)):LaptopData;
  // const filteredLaptopGpu = gpu ? LaptopData.filter((p)=>p.gpu_brand === gpu):LaptopData;
  // const filteredLaptopGpuType = gpuType ? LaptopData.filter((p)=>p.gpu_type === gpuType):LaptopData;
  // const filteredLaptopOs = os ? LaptopData.filter((p)=>p.OS === os):LaptopData;

  const brandFilter = ((e)=> {
    (e.target.value === "")?(  nav('/Products')):(nav('/Products/brand/'+(e.target.value)))
})

const ramFilter = ((e)=> {
  (e.target.value === "") ?(nav('/Products')):(nav('/Products/ram/'+(e.target.value)))
})

  return (
    <div className="App">
      <Link to={"/"}>
      <header className="App-heade1">
        <img src={logo} className="App-logo" alt="logo" style={logoStyle} />
      </header>
      </Link>
      
      <section>
        Filter By:
        Brand <select id="brand" value={brand} onChange={(e)=>{brandFilter(e)}}>
        <option value="">Any</option>
          <option value="tecno">tecno</option>
          <option value="hp">hp</option>
          <option value="lenovo">lenovo</option>
          <option value="samsung">samsung</option>
          <option value="acer">acer</option>
          <option value="dell">dell</option>
          <option value="asus">asus</option>
          <option value="inifix">infinix</option>
          <option value="msi">msi</option>
          <option value="wings">wings</option>
          <option value="ultimus">ultimus</option>
        </select>

        {/* Processor <select id="processor" value={processor} onChange={(e)=>{setProcessor(e.target.value);setBrand(null);setRam(null);setStorage(null);setGpu(null);setGpuType(null);setOs(null)}}>
        <option value="">Any</option>
        <option>intel</option>
          <option>amd</option>
          <option>apple</option>
        </select> */}
        
        RAM <select id="ram" value={ram} onChange={(e)=>{ramFilter(e)}}>
        
          <option value="">Any</option>
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
       
        </select>

        {/* Storage Capacity <select id="storage" value={storage} onChange={(e)=>{setStorage(e.target.value);setBrand(null);setBrand(null);setRam(null);setProcessor(null);setGpu(null);setGpuType(null);setOs(null)}}>
        <option value="">Any</option>
        <option>128</option>
        <option>256</option>
          <option>512</option>
          <option>1024</option>
        </select>

        GPU <select id="gpu" value={gpu} onChange={(e)=>{setGpu(e.target.value);setBrand(null);setBrand(null);setRam(null);setProcessor(null);setStorage(null);setGpuType(null);setOs(null)}}>
          <option value="">Any</option>
          <option>intel</option>
          <option>amd</option>
          <option>apple</option>
          <option>nvidia</option>

        </select>

        GPU Type <select id="gpuType" value={gpuType} onChange={(e)=>{setGpuType(e.target.value);setBrand(null);setBrand(null);setRam(null);setProcessor(null);setStorage(null);setGpu(null);setOs(null)}}>
        <option value="">Any</option>
          <option>integrated</option>
          <option>dedicated</option>
        </select>

        OS <select id="os" value={os} onChange={(e)=>{setOs(e.target.value);setBrand(null);setBrand(null);setRam(null);setProcessor(null);setStorage(null);setGpu(null);setGpuType(null);}}>
        <option value="">Any</option>
          <option>windows</option>
          <option>mac</option>
          
        </select> */}
        </section>
        {(!ram && !brand && !processor && !storage && !gpu && !gpuType && !os ) && (<><h2>Found {LaptopData.length} laptops</h2><section id="products">{LaptopData.map(RenderLaptops)}</section></>)}
        { ram &&(<><h2>Found {filteredLaptopRam.length} laptops</h2><section id="products">{filteredLaptopRam.map(RenderLaptops)}</section></>)}
        { brand &&(<><h2>Found {filteredLaptopBrand.length} laptops</h2> <section id="products">{filteredLaptopBrand.map(RenderLaptops)}</section></>)}
        {/* { processor &&(<><h2>Found {filteredLaptopProcessor.length} laptops</h2> <section id="products">{filteredLaptopProcessor.map(RenderLaptops)}</section></>)}
        { storage &&(<><h2>Found {filteredLaptopStorage.length} laptops</h2> <section id="products">{filteredLaptopStorage.map(RenderLaptops)}</section></>)}
        { gpu &&(<><h2>Found {filteredLaptopGpu.length} laptops</h2> <section id="products">{filteredLaptopGpu.map(RenderLaptops)}</section></>)}
        { gpuType &&(<><h2>Found {filteredLaptopGpuType.length} laptops</h2> <section id="products">{filteredLaptopGpu.map(RenderLaptops)}</section></>)}
        { os &&(<><h2>Found {filteredLaptopOs.length} laptops</h2> <section id="products">{filteredLaptopOs.map(RenderLaptops)}</section></>)} */}

    </div>
  );
}

export default Products;

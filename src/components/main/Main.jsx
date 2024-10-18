import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from './Card';
function Main({data}) {    
  return (
   <>
     <main className="bg-[#ebedf3] py-2">
    <div className="max-w-full bg-white mx-4 my-2 cursor-pointer rounded-md md:hidden lg:hidden">
        <div className="inputs-mobile flex justify-between items-center p-4 text-center">
            <i className="fa-solid fa-car px-4 text-[#b52a2a]"></i>
            <select id="mobileBrands" onchange="filterCars()" className="bg-white w-[330px] outline-none appearance-none">
            </select>
            <i className="fa-solid fa-chevron-right text-[#8d94ad] text-end  px-4 "></i>

        </div>
        <hr className="mx-2" />
        <div className="flex items-center p-4 text-center">
            <i className="fa-solid fa-arrow-down-short-wide text-[#b52a2a]"></i>
            <a className="px-2" href="#">Filtrlər</a>
        </div>
    </div>

    <div className="flex justify-between items-center p-3 text-center bg-white mx-4 rounded-md md:hidden lg:hidden">
        <select className="px-4 w-[330px] bg-white appearance-none outline-none">
            <option value="marka" className="text-[#8f8c8c]">Moto</option>
        </select>
        <i className="fa-solid fa-chevron-right text-[#8d94ad] text-end  px-4 "></i>

    </div>
    <div
        className="flex justify-between items-center p-3 mt-2 text-center bg-white mx-4 rounded-md md:hidden lg:hidden">
        <select className="px-2 bg-white w-[330px] appearance-none outline-none">
            <option value="marka" className="text-[#8f8c8c] py-5 ">Avtokataloq</option>
        </select>

        <i className="fa-solid fa-chevron-right text-[#8d94ad] text-end px-4 "></i>
    </div>
    <div className="md:hidden lg:hidden">
        <p className="m-3 px-2">Bu gun: <a className="text-[#4c88f9]" href="">1760 yeni elan</a></p>
        <img src="./img/car.jpg" alt="" />
        <ul className="flex justify-between m-3 underline  decoration-[#8f8c8c]">
            <li><a href="">Kreditlə</a></li>
            <li><a href="">Barter</a></li>
            <li><a href="">Aksesuarlar</a></li>
            <li><a href="">Şinler</a></li>
            <li><a href="">Icarə</a></li>
        </ul>
    </div>
    <div className="max-w-[1300px] m-auto">
        <div
            className="desktop-inputs justify-center hidden md:flex md:flex-wrap items-center gap-4 lg:flex pt-3 lg:flex-wrap">
            <div className="cursor-pointer relative">
                <select id="selectMarka" onchange="filterCars()"
                    className="w-[250px] h-[48px] rounded-md border border-[#dfe3e9] outline-none appearance-none cursor-pointer px-3">
                </select>
                <i className="fa-solid fa-chevron-down text-[#8f8c8c] absolute right-4 top-4"></i>
            </div>
            <div className="cursor-pointer relative"><select id="selectModel" onchange="filterCars()"
                    className="w-[250px] h-[48px] rounded-md border border-[#dfe3e9] outline-none appearance-none cursor-pointer px-3"
                    type="text">
                </select><i className="fa-solid fa-chevron-down text-[#8f8c8c] absolute right-4 top-4"></i></div>
            <div className=" text-[#8f8c8c] text-center active-buttons">
                <button className="bg-white border-[#dfe3e9] border-l-1 w-[80px] h-[48px] rounded-l-md active">Hamisi</button>
                <button className="border bg-white border-[#dfe3e9] w-[70px] h-[48px] ">Yeni</button>
                <button className="border bg-white border-[#dfe3e9] rounded-r-md w-[100px] h-[48px]">Surulmush</button>
            </div>
            <div className="cursor-pointer relative"><select id="selectCity" onchange="filterCars()"
                    className="w-[250px] h-[48px] border border-[#dfe3e9] rounded-md outline-none appearance-none cursor-pointer px-3"
                    type="text">
                </select><i className="fa-solid fa-chevron-down text-[#8f8c8c] absolute right-4 top-4"></i></div>
            <div className="bg-white overflow-hidden rounded-md text-center">
                <input oninput="filterCars()" className="border-r-2 border border-[#dfe3e9] w-[150px] h-[48px] outline-none" type="number" id="qiymet1"
                    placeholder="  Qiymet, min." />
                <input  oninput="filterCars()" id="qiymet2" className="w-[100px] h-[48px] border border-[#dfe3e9] outline-none" type="number" placeholder="  maks. " />
            </div>
            <div className="text-center rounded-md my-4">
                <select name="" id="" className="w-[80px] h-[48px] border border-[#dfe3e9] rounded-md ">
                    <option value="">AZN</option>
                    <option value="">USD</option>
                    <option value="">EUR</option>
                </select>
                <button className="bg-white border border-[#dfe3e9] h-[48px] w-20 mx-3 rounded-md hover:border-[#8f8c8c] ">Kredit</button>
                <button className=" bg-white h-[48px] w-[70px] rounded-md hover:border border-[#8f8c8c]">Barter</button>
            </div>
            <div className="cursor-pointer relative "><select
                    className="w-[250px] h-[48px] border border-[#dfe3e9] rounded-md outline-none appearance-none cursor-pointer px-3">
                    <option value="marka" className="text-[#8f8c8c]" disabled selected hidden>Ban novu</option>
                </select><i className="fa-solid fa-chevron-down text-[#8f8c8c] absolute right-4 top-4"></i></div>
            <div className="bg-white relative overflow-hidden rounded-lg text-center">
                <select className="border-r-2 w-[150px] h-[48px] border border-[#dfe3e9] outline-none appearance-none cursor-pointer px-3">
                    <option value="il" className="text-[#8f8c8c]" hidden>İl, min.</option>
                </select><i className="fa-solid fa-chevron-down text-[#8f8c8c] absolute right-28 top-4"></i>
                <select className="w-[100px] h-[48px] border border-[#dfe3e9] outline-none appearance-none cursor-pointer px-2">
                    <option value="maks" className="text-[#8f8c8c] " disabled selected hidden>maks.</option>
                </select><i className="fa-solid fa-chevron-down text-[#8f8c8c] absolute right-4 top-4"></i>
            </div>

        </div>
        <div className="hidden lg:flex lg:justify-between items-center mt-5 mx-[65px]">
            <div className="mx-14 cursor-pointer">
                <h1>Bu gun: <span className="text-[#639ce6]">1612 yeni elan</span></h1>
            </div>
            <div className="flex items-center ">
                <h1 className="mx-14 text-[#8f8c8c] cursor-pointer">Sifirla</h1>
                <a className=" text-[#ca1016]" href="">Daha chox filtr <i className="fa-solid fa-chevron-down"></i></a>
                <button className="mx-14 text-white w-[150px] h-[45px] bg-[#ca1016] rounded-md">Elanlari goster</button>
            </div>
        </div>
        <h1 className="text-[#8d94ad] lg:text-black lg:font-bold lg:pt-2 uppercase my-6 mx-3 lg:mx-[100px] px-5 lg:text-[20px]">
            Premium elanlar</h1>
        <div className="cards grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-[10px] lg:px-[120px]">
            {
                data.map(item => (
                    <>
                        <Card item={item} />
                    </>
                ))
            }
        </div>
    </div>
</main>
 
   </>  
    

  )
}

export default Main
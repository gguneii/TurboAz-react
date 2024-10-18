import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
   <>
     <footer className='bg-[#ebedf3]'>
        <div className="max-w-full">
            <div className="text-[14px] px-8 py-2 leading-8 border-t-2 lg:flex lg:px-[170px]">
                <a className="block" href="#">Qaydalar</a>
                <a className="block lg:mx-5" href="">İstifadəçi razılaşması</a>
                <a className="block lg:mx-5" href="">Reklam yerləşdirin</a>
                <a className="block lg:mx-5" href="">Sifarişli avtomobil alan alıcı üçün tövsiyələr</a>
            </div>
            <hr />
            <div className="p-8 lg:hidden">
                <a href="">Dəstək xidməti</a>
                <a href="tel: +994125057755">(012) 505-77-55</a>
                <p className="text-[13px] text-[#8d94ad]">İş saatları — Həftə içi: 09:00-19:00 | Şənbə: 09:00-13:00 </p>
                <div className="my-5 text-[30px]">
                    <a href=""><i className="fa-solid fa-envelope text-[#8d94ad] mr-6 "></i></a>
                    <a href=""><i className="fa-brands fa-facebook text-[#8d94ad] mr-6"></i></a>
                    <a href=""><i className="fa-brands fa-instagram text-[#8d94ad]"></i></a>
                </div>
            </div>
            <hr />
            <div
                className="text-[#8d94ad] px-8 text-[15px] lg:flex lg:justify-around lg:items-center lg:bg-[#ca1016] lg:text-white">
                <div>
                    Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət
                    daşımır.
                </div>
                <div className="py-3 ">© 2006-2024 Digital classNameifieds MMC. VÖEN: 1405631661</div>
            </div>
        </div>
    </footer>

    <div
        className="sticky bottom-0 flex justify-around items-center py-2 text-[#8d94ad] bg-white uppercase md:hidden lg:hidden z-[500]">
        <a href="index.htm" className="hover:text-[#ca1016]"><i className="fa-solid fa-house"></i>
            <p className="text-[10px]">Əsas</p>
        </a>
        <a className="hover:text-[#ca1016]"><i className="fa-solid fa-heart px-5"></i>
            <p className="text-[10px]">Seçilmişlər</p>
        </a>
        <button className="hover:text-[#ca1016]">
            <i
                className="fa-solid fa-plus text-md flex justify-center items-center w-10 h-10 mx-2 border rounded-full text-white bg-[#b52a2a] absolute bottom-[50%]"></i>
            <p className="mt-6 text-[10px] uppercase">Yeni Elan</p>
        </button>
        <a href="" className="hover:text-[#ca1016]"><i className="fa-solid fa-circle-user px-3"></i>
            <p className="text-[10px]">Kabinet</p>
        </a>

        <span className="hover:text-[#ca1016]" onclick="showMenu()"><i className="fa-solid fa-bars px-4"></i>
            <p className="text-[10px]">Daha çox</p>
        </span>
    </div>
    <div id="menu"
        className=" fixed top-0 left-0 h-[100vh] w-[100vw] translate-x-[-100%] z-[100] bg-[#ebedf3] rounded shadow-lg">
        <p className="text-center bg-white p-3">Daha chox</p>
        <a className="bg-white w-full block my-5 p-3" href="">Русский язык</a>
        <a className="bg-white w-full block my-5 p-3" href="">Yardim</a>
        <a className="bg-white w-full block my-5 p-3" href="">Avtokataloq</a>
        <a className="bg-white w-full block my-5 p-3" href="">Moto</a>
        <div className="py-15">
            <a className="bg-white w-full block px-3 p-4" href="">Butun elanlar</a>
            <hr />
            <a className="bg-white w-full block px-3 p-4" href="">Salonlar</a>
            <hr />
            <a className="bg-white w-full block px-3 p-4" href="">Ehtiyat hisseler ve aksesuarlar</a>
            <hr />
            <a className="bg-white w-full block px-3 p-4" href="">Icare</a>
            <hr />
            <a className="bg-white w-full block px-3 p-4" href="">Bizimle elage</a>

        </div>
    </div>
   
   </>
  )
}

export default Footer
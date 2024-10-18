import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <header className='bg-[#ebedf3]'>
    <div className="header-all max-w-full m-auto">
            <div
                className="header-top-mobile md:hidden lg:hidden flex text-l p-2 items-center justify-between cursor-pointer uppercase bg-white">
                <div className="font-bold text-[#8e8c8c]">
                    <a className="px-2 text-[#b52a2a] border-r-2">Turbo.az</a>
                    <a className="px-2 border-r-2">Bina.az</a>
                    <a>Tap.az</a>
                </div>
                <div>
                    <button className="fa-solid fa-plus text-xs w-6 h-6 border rounded-full text-white bg-[#b52a2a]">
                    </button>
                </div>
            </div>
            <div
                className="hidden lg:mx-auto lg:max-w-[1300px] md:flex md:justify-around md:items-center lg:flex lg:justify-between lg:px-[120px] lg:items-center py-2">
                <div className="text-[#8d94ad]"><a href="">Tap.az</a>
                    <a className="px-4" href="">Bina.az</a>
                    <a className="px-4" href="">Boss.az</a>
                </div>
                <div className="text-[#8d94ad] flex justify-center items-center">
                    <a className="px-4 text-[black]" href="0125057755">Destek:(012)505-77-55</a>
                    <a href="">Yardım</a>
                    <a className="px-4" href="#">RU</a>
                    <i className="fa-solid fa-heart px-2" ></i>
                    <a className="pr-4" href="">Seçilmişlər</a>
                    <i className="fa-solid fa-circle-user text-[22px] px-2"></i>
                    <a href="">Giriş</a>
                </div>
            </div>

            <div
                className="hidden lg:m-auto md:flex md:justify-around md:items-center lg:flex lg:justify-between lg:px-[115px] xl:justify-around xl:px-[55px] lg:items-center bg-[#ca1016] text-white py-2">
                <div className="md:flex md:justify-around md:items-center lg:flex lg:justify-around lg:items-center">
                    <h1 className="font-bold"><a href="">TURBO.AZ</a></h1>
                    <ul
                        className="md:flex md:justify-around md:items-center lg:flex lg:justify-around lg:items-center">
                        <li><a className="px-4" href="">Butun elanlar</a></li>
                        <li><a href="">Salonlar</a></li>
                        <li><a className="px-4" href="">Moto</a></li>
                        <li><a href="">Ehtiyat hisseler ve aksesuarlar</a></li>
                        <li><a className="px-4" href="">Icarə</a></li>
                    </ul>
                </div>
                <div>
                    <button className="bg-[#85c01f] p-2 rounded-md">
                        <i className="fa-solid fa-plus pr-2"> </i>
                        Yeni elan
                    </button>

                </div>
            </div>

        
    </div>
</header>
  )
}

export default Header
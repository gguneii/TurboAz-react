import React from 'react'

function Card(props) {
    const {img, price, marka, model, year, date} = props.item
  return (
   <>
        <div class="card bg-white rounded-md shadow-lg">
                <div class="cars w-full">
                    <img class="w-full h-full object-contain rounded-t-lg" src={img} alt="car" />
                </div>
                <div class="texts p-4">
                    <p class="font-bold text-lg">{price} $</p>
                    <p class="font-medium text-md">{marka}, {model}</p>
                    <p>{year}, 2.0 L, 0 km</p>
                   <p class="text-[#8d94ad]">{date}</p>    
                </div>
              </div>
   </>
  )
}

export default Card
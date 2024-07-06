import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavCategoriesFeed = () => {

    const navigate = useNavigate()

    const func = (g , c)=>{
        navigate(`/products?groups=${g}&category=${c}`)
    } 

    return (
    <div className='flex px-5 mx- p-1 border-b border-third sticky top-0 z-10 bg-lite_gray'>
        <div className='w-full dropdown dropdown-hover dropdown-end transform transition-all duration-150 '>
            <div tabIndex={0} role="button" className='tracking-wide text-[14px] font-[arial] hero h-full hover:text-second '>
                Staples
            </div>
            <div className='dropdown-content z-10 bg-lite_gray w-full'>
                <ul className='px-5 p-3 font-roboto space-y-2.5 tracking-wide text-[13px] text-content shadow mt-[3px] border-t-[3px] border-second flex flex-col rounded-b'>
                    <button onClick={()=>func('staples' , 'all')} className='hover:text-third w-full text-start'>All</button >
                    <button onClick={()=>func('staples' , 'dals_pulses')} className='hover:text-third w-full text-start'>Dals & Pulses</button >
                    <button onClick={()=>func('staples' , 'diary')} className='hover:text-third w-full text-start' >Diary</button>
                    <button onClick={()=>func('staples' , 'rice')} className='hover:text-third w-full text-start'>Rice</button>
                    <button onClick={()=>func('staples' , 'oils_ghees')} className='hover:text-third w-full text-start' >Oils & Ghees</button  >
                    <button onClick={()=>func('staples' , 'masalas')} className='hover:text-third w-full text-start' >Masalas</button  >
                    <button onClick={()=>func('staples' , 'condiments_spices')} className='hover:text-third w-full text-start' >Condiments & Spices</button  >
                    <button onClick={()=>func('staples' , 'flours')} className='hover:text-third w-full text-start' >Flours</button  >
                    <button onClick={()=>func('staples' , 'dryFruits_nuts')} className='hover:text-third w-full text-start' >Dry Fruits & Nuts</button  >
                    <button onClick={()=>func('staples' , 'water')} className='hover:text-third w-full text-start' >Water</button  >
                    <button onClick={()=>func('staples' , 'others')} className='hover:text-third w-full text-start' >Others</button  >
                </ul>
            </div>
        </div>

        <div className='w-full dropdown dropdown-hover dropdown-end transform transition-all duration-150 '>
            <div tabIndex={0} role="button" className='tracking-wide text-[14px] font-[arial] hero h-full hover:text-second '>
                <div>Snacks & Beverages</div>
            </div>
            <div className='dropdown-content z-[1] bg-lite_gray w-full'>
                <ul className='px-5 p-3 font-roboto space-y-2.5 tracking-wide text-[13px] text-content shadow mt-[3px] border-t-[3px] border-second flex flex-col rounded-b'>
                    <button onClick={()=>func('snacks_beverages' , 'all')} className='hover:text-third w-full text-start' >All</button  >
                    <button onClick={()=>func('snacks_beverages' , 'chips_namkeens')} className='hover:text-third w-full text-start' >Chips & Namkeens</button  >
                    <button onClick={()=>func('snacks_beverages' , 'tea')} className='hover:text-third w-full text-start' >Tea</button  >
                    <button onClick={()=>func('snacks_beverages' , 'coffee')} className='hover:text-third w-full text-start' >Coffee</button  >
                    <button onClick={()=>func('snacks_beverages' , 'soft_drinks')} className='hover:text-third w-full text-start' >Soft Drinks</button  >
                    <button onClick={()=>func('snacks_beverages' , 'juices')} className='hover:text-third w-full text-start' >Juice</button  >
                    <button onClick={()=>func('snacks_beverages' , 'health_drinks')} className='hover:text-third w-full text-start' >Health Drinks</button  >
                    <button onClick={()=>func('snacks_beverages' , 'chocolates_candy')} className='hover:text-third w-full text-start' >Chocolates & Candy</button  >
                    <button onClick={()=>func('snacks_beverages' , 'sweets')} className='hover:text-third w-full text-start' >Sweets</button  >
                    <button onClick={()=>func('snacks_beverages' , 'instant_drink_mix')} className='hover:text-third w-full text-start' >Instant Drink Mix</button  >
                    <button onClick={()=>func('snacks_beverages' , 'others')} className='hover:text-third w-full text-start' >Others</button  >
                </ul>
            </div>
        </div>
        
        <div className='w-full dropdown dropdown-hover dropdown-end transform transition-all duration-150 '>
            <div tabIndex={0} role="button" className='tracking-wide text-[14px] font-[arial] hero h-full hover:text-second '>
                <div>Packed Food</div>
            </div>
            <div className='dropdown-content z-[1] bg-lite_gray w-full'>
                <ul className='px-5 p-3 font-roboto space-y-2.5 tracking-wide text-[13px] text-content shadow mt-[3px] border-t-[3px] border-second flex flex-col rounded-b'>
                    <button onClick={()=>func('packedFood' , 'all')} className='hover:text-third w-full text-start'>All</button  >
                    <button onClick={()=>func('packedFood' , 'noodles_pasta')} className='hover:text-third w-full text-start'>Noodles & pasta</button  >
                    <button onClick={()=>func('packedFood' , 'pickles')} className='hover:text-third w-full text-start'>Pickles</button  >
                    <button onClick={()=>func('packedFood' , 'honey')} className='hover:text-third w-full text-start'>Honey</button  >
                    <button onClick={()=>func('packedFood' , 'sauce_ketchup')} className='hover:text-third w-full text-start'>Sauce & Ketchup</button  >
                    <button onClick={()=>func('packedFood' , 'ready_to_cook')} className='hover:text-third w-full text-start'>Ready to Cook</button  >
                    <button onClick={()=>func('packedFood' , 'others')} className='hover:text-third w-full text-start'>Others</button  >
                </ul>
            </div>
        </div>

        <div className='w-full dropdown dropdown-hover dropdown-end transform transition-all duration-150 '>
            <div tabIndex={0} role="button" className='tracking-wide text-[14px] font-[arial] hero h-full hover:text-second '>
                <div>Household Care</div>
            </div>
            <div className='dropdown-content z-[1] bg-lite_gray w-full'>
                <ul className='px-5 p-3 font-roboto space-y-2.5 tracking-wide text-[13px] text-content shadow mt-[3px] border-t-[3px] border-second flex flex-col rounded-b'>
                    <button onClick={()=>func('householdCare' , 'all')} className='hover:text-third w-full text-start'>All</button  >
                    <button onClick={()=>func('householdCare' , 'detergents')} className='hover:text-third w-full text-start'>Detergent</button  >
                    <button onClick={()=>func('householdCare' , 'utinsilsCleaner')} className='hover:text-third w-full text-start'>Utensils Cleaner</button  >
                    <button onClick={()=>func('householdCare' , 'floor_bathroomEssentials')} className='hover:text-third w-full text-start'>Floor & bathroom essentials</button  >
                    <button onClick={()=>func('householdCare' , 'airFreshner')} className='hover:text-third w-full text-start'>Air Freshner</button  >
                    <button onClick={()=>func('householdCare' , 'repellents')} className='hover:text-third w-full text-start'>Repellents</button  >
                    <button onClick={()=>func('householdCare' , 'others')} className='hover:text-third w-full text-start'>Others</button  >
                </ul>
            </div>
        </div>

        <div className='w-full dropdown dropdown-hover dropdown-end transform transition-all duration-150 '>
            <div tabIndex={0} role="button" className='tracking-wide text-[14px] font-[arial] hero h-full hover:text-second '>
                <div>Baby Products</div>
            </div>
            <div className='dropdown-content z-[1] bg-lite_gray w-full'>
                <ul className='px-5 p-3 font-roboto space-y-2.5 tracking-wide text-[13px] text-content shadow mt-[3px] border-t-[3px] border-second flex flex-col rounded-b'>
                    <button onClick={()=>func('babyProducts' , 'all')} className='hover:text-third w-full text-start'>All</button  >
                    <button onClick={()=>func('babyProducts' , 'diapers_wipes')} className='hover:text-third w-full text-start'>Diapers & Wipes</button  >
                    <button onClick={()=>func('babyProducts' , 'skinCare')} className='hover:text-third w-full text-start'>Skin Care</button  >
                    <button onClick={()=>func('babyProducts' , 'babyFood')} className='hover:text-third w-full text-start'>Baby Food</button  >
                    <button onClick={()=>func('babyProducts' , 'babyProducts')} className='hover:text-third w-full text-start'>Baby products</button  >
                    <button onClick={()=>func('babyProducts' , 'others')} className='hover:text-third w-full text-start'>Others</button  >
                </ul>
            </div>
        </div>

        <div className='w-full dropdown dropdown-hover dropdown-end transform transition-all duration-150 '>
            <div tabIndex={0} role="button" className='tracking-wide text-[14px] font-[arial] hero h-full hover:text-second '>
                <div>Personal Care</div>
            </div>
            <div className='dropdown-content z-[1] bg-lite_gray w-full'>
                <ul className='px-5 p-3 font-roboto space-y-2.5 tracking-wide text-[13px] text-content shadow mt-[3px] border-t-[3px] border-second flex flex-col rounded-b'>
                    <button onClick={()=>func('personalCare' , 'all')} className='hover:text-third w-full text-start' >All</button  >
                    <button onClick={()=>func('personalCare' , 'perfumes_deos')} className='hover:text-third w-full text-start' >Perfumes & deos</button  >
                    <button onClick={()=>func('personalCare' , 'talc_powder')} className='hover:text-third w-full text-start' >Talc & powders</button  >
                    <button onClick={()=>func('personalCare' , 'skin_care')}className='hover:text-third w-full text-start' >Skin Care</button  >
                    <button onClick={()=>func('personalCare' , 'sanitaryEssentials')} className='hover:text-third w-full text-start' >Sanitary essentials</button  >
                    <button onClick={()=>func('personalCare' , 'hairCare')} className='hover:text-third w-full text-start' >Hair Care</button  >
                    <button onClick={()=>func('personalCare' , 'oralCare')} className='hover:text-third w-full text-start' >Oral Care</button  >
                    <button onClick={()=>func('personalCare' , 'shavingEssentials')} className='hover:text-third w-full text-start' >Shaving Essentials</button  >
                    <button onClick={()=>func('personalCare' , 'others')} className='hover:text-third w-full text-start' >Others</button  >
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavCategoriesFeed
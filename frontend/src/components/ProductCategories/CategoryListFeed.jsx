 import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryListFeed = ({urlGroup , urlCategory}) => {

    const navigate = useNavigate()

    const [group , setGroup] = useState(urlGroup || 'staples')

    useEffect(()=>{
        if(urlCategory && urlGroup){
            setGroup(urlGroup)
        }
    } , [urlCategory , urlGroup])

    const func = (g , c)=>{
        navigate(`/products?groups=${g}&category=${c}`)
    } 

    return (
    <div className='p-2 shadow h-full rounded '>
        <div className={`p-2 ${group == 'staples' && 'text-third rounded border-2 border-gray'}`}>
            {/* group */}
            <div onClick={()=>setGroup('staples')}
                className='tracking-wide text-sm font-[arial] justify-between flex pr-2 cursor-pointer pb-2.5'
                >
                <div>Staples</div>
                <div className={`text-xs pt-1.5 text-lite_content ${group == 'staples' && 'rotate-180 transform transition-all duration-300 text-third'}`}>▼</div>
            </div>
            {/* content */}
            <div className={`${group !== 'staples' && 'hidden' }`}>
                <ul className='mr-2 px-3 p-2 font-serif space-y-3 tracking-wide text-[14px] text-content border-t border-gray flex flex-col items-start '>
                    <button onClick={()=>func('staples' , 'all')} className={(urlGroup == 'staples' && urlCategory == 'all') ? 'text-third' : ''} >All</button >
                    <button onClick={()=>func('staples' , 'dals_pulses')} className={(urlGroup == 'staples' && urlCategory == 'dals_pulses') ? 'text-third' : ''} >Dals & Pulses</button >
                    <button onClick={()=>func('staples' , 'diary')} className={(urlGroup == 'staples' && urlCategory == 'diary') ? 'text-third' : ''} >Diary</button>
                    <button onClick={()=>func('staples' , 'rice')} className={(urlGroup == 'staples' && urlCategory == 'rice') ? 'text-third' : ''}>Rice</button>
                    <button onClick={()=>func('staples' , 'oils_ghees')} className={(urlGroup == 'staples' && urlCategory == 'oils_ghees') ? 'text-third' : ''} >Oils & Ghees</button  >
                    <button onClick={()=>func('staples' , 'masalas')} className={(urlGroup == 'staples' && urlCategory == 'masalas') ? 'text-third' : ''} >Masalas</button  >
                    <button onClick={()=>func('staples' , 'condiments_spices')} className={(urlGroup == 'staples' && urlCategory == 'condiments_spices') ? 'text-third' : ''} >Condiments & Spices</button  >
                    <button onClick={()=>func('staples' , 'flours')} className={(urlGroup == 'staples' && urlCategory == 'flours') ? 'text-third' : ''} >Flours</button  >
                    <button onClick={()=>func('staples' , 'dryFruits_nuts')} className={(urlGroup == 'staples' && urlCategory == 'dryFruits_nuts') ? 'text-third' : ''} >Dry Fruits & Nuts</button  >
                    <button onClick={()=>func('staples' , 'water')} className={(urlGroup == 'staples' && urlCategory == 'water') ? 'text-third' : ''} >Water</button  >
                    <button onClick={()=>func('staples' , 'others')} className={(urlGroup == 'staples' && urlCategory == 'others') ? 'text-third' : ''} >Others</button  >
                </ul>
            </div>
        </div>

        <div className={`p-2 ${group == 'snacks_beverages' && 'text-third rounded border-2 border-gray '}`}>
            {/* group */}
            <div onClick={()=>setGroup('snacks_beverages')}
                    className={`tracking-wide font-[arial] text-sm justify-between flex pr-2 cursor-pointer pb-2.5 `}
                >
                <div>Snacks & Beverages</div>
                <div className={`text-xs pt-1.5 text-lite_content ${group == 'snacks_beverages' && 'rotate-180 transform transition-all duration-300 text-third'}`}>▼</div>
            </div>
            {/* content */}
            <div className={`${group != 'snacks_beverages' && 'hidden'}`}>
                <ul className='mr-2 px-3 p-2 font-serif space-y-3 tracking-wide text-[14px] text-content border-t border-gray flex flex-col items-start'>
                    <button onClick={()=>func('snacks_beverages' , 'all')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'all') ? 'text-third' : ''} >All</button  >
                    <button onClick={()=>func('snacks_beverages' , 'chips_namkeens')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'chips_namkeens') ? 'text-third' : ''} >Chips & Namkeens</button  >
                    <button onClick={()=>func('snacks_beverages' , 'tea')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'tea') ? 'text-third' : ''} >Tea</button  >
                    <button onClick={()=>func('snacks_beverages' , 'coffee')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'coffee') ? 'text-third' : ''} >Coffee</button  >
                    <button onClick={()=>func('snacks_beverages' , 'soft_drinks')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'soft_drinks') ? 'text-third' : ''} >Soft Drinks</button  >
                    <button onClick={()=>func('snacks_beverages' , 'juices')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'juices') ? 'text-third' : ''} >Juice</button  >
                    <button onClick={()=>func('snacks_beverages' , 'health_drinks')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'health_drinks') ? 'text-third' : ''} >Health Drinks</button  >
                    <button onClick={()=>func('snacks_beverages' , 'chocolates_candy')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'chocolates_candy') ? 'text-third' : ''} >Chocolates & Candy</button  >
                    <button onClick={()=>func('snacks_beverages' , 'sweets')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'sweets') ? 'text-third' : ''} >Sweets</button  >
                    <button onClick={()=>func('snacks_beverages' , 'instant_drink_mix')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'instant_drink_mix') ? 'text-third' : ''} >Instant Drink Mix</button  >
                    <button onClick={()=>func('snacks_beverages' , 'others')} className={(urlGroup == 'snacks_beverages' && urlCategory == 'others') ? 'text-third' : ''} >Others</button  >
                </ul>
            </div>
        </div>
        
        <div className={`p-2 ${group == 'packedFood' && 'text-third rounded border-2 border-gray '}`}>
            {/* group */}
            <div onClick={()=>setGroup('packedFood')}
                    className={`font-[arial] text-sm tracking-wide justify-between flex pr-2 cursor-pointer pb-2.5 `}
                >
                <div>Packed Food</div>
                <div className={`text-xs pt-1.5 text-lite_content ${group == 'packedFood' && 'rotate-180 transform transition-all duration-300 text-third'}`}>▼</div>
            </div>
            {/* content */}
            <div className={`${group != 'packedFood' && 'hidden'}`}>
                <ul className='mr-2 px-3 p-2 font-serif space-y-3 tracking-wide text-[14px] text-content border-t border-gray flex flex-col items-start'>
                    <button onClick={()=>func('packedFood' , 'all')} className={(urlGroup == 'packedFood' && urlCategory == 'all') ? 'text-third' : ''} >All</button  >
                    <button onClick={()=>func('packedFood' , 'noodles_pasta')} className={(urlGroup == 'packedFood' && urlCategory == 'noodles_pasta') ? 'text-third' : ''} >Noodles & pasta</button  >
                    <button onClick={()=>func('packedFood' , 'pickles')} className={(urlGroup == 'packedFood' && urlCategory == 'pickles') ? 'text-third' : ''} >Pickles</button  >
                    <button onClick={()=>func('packedFood' , 'honey')} className={(urlGroup == 'packedFood' && urlCategory == 'honey') ? 'text-third' : ''} >Honey</button  >
                    <button onClick={()=>func('packedFood' , 'sauce_ketchup')} className={(urlGroup == 'packedFood' && urlCategory == 'sauce_ketchup') ? 'text-third' : ''} >Sauce & Ketchup</button  >
                    <button onClick={()=>func('packedFood' , 'ready_to_cook')} className={(urlGroup == 'packedFood' && urlCategory == 'ready_to_cook') ? 'text-third' : ''} >Ready to Cook</button  >
                    <button onClick={()=>func('packedFood' , 'others')} className={(urlGroup == 'packedFood' && urlCategory == 'others') ? 'text-third' : ''} >Others</button  >
                </ul>
            </div>
        </div>

        <div className={`p-2 ${group == 'householdCare' && 'text-third rounded border-2 border-gray '}`}>
            {/* group */}
            <div onClick={()=>setGroup('householdCare')}
                    className={`font-[arial] text-sm tracking-wide justify-between flex pr-2 cursor-pointer pb-2.5 `}
                >
                <div>Household Care</div>
                <div className={`text-xs pt-1.5 text-lite_content ${group == 'householdCare' && 'rotate-180 transform transition-all duration-300 text-third'}`}>▼</div>
            </div>
            {/* content */}
            <div className={`${group != 'householdCare' && 'hidden'}`}>
                <ul className='mr-2 px-3 p-2 font-serif space-y-3 tracking-wide text-[14px] text-content border-t border-gray flex flex-col items-start'>
                    <button onClick={()=>func('householdCare' , 'all')} className={(urlGroup == 'householdCare' && urlCategory == 'all') ? 'text-third' : ''} >All</button  >
                    <button onClick={()=>func('householdCare' , 'detergents')} className={(urlGroup == 'householdCare' && urlCategory == 'detergents') ? 'text-third' : ''} >Detergent</button  >
                    <button onClick={()=>func('householdCare' , 'utinsilsCleaner')} className={(urlGroup == 'householdCare' && urlCategory == 'utinsilsCleaner') ? 'text-third' : ''} >Utensils Cleaner</button  >
                    <button onClick={()=>func('householdCare' , 'floor_bathroomEssentials')} className={(urlGroup == 'householdCare' && urlCategory == 'floor_bathroomEssentials') ? 'text-third' : ''} >Floor & bathroom essentials</button  >
                    <button onClick={()=>func('householdCare' , 'airFreshner')} className={(urlGroup == 'householdCare' && urlCategory == 'airFreshner') ? 'text-third' : ''} >Air Freshner</button  >
                    <button onClick={()=>func('householdCare' , 'repellents')} className={(urlGroup == 'householdCare' && urlCategory == 'repellents') ? 'text-third' : ''} >Repellents</button  >
                    <button onClick={()=>func('householdCare' , 'others')} className={(urlGroup == 'householdCare' && urlCategory == 'others') ? 'text-third' : ''} >Others</button  >
                </ul>
            </div>
        </div>

        <div className={`p-2 ${group == 'babyProducts' && 'text-third rounded border-2 border-gray '}`}>
            {/* group */}
            <div onClick={()=>setGroup('babyProducts')}
                    className={`font-[arial] text-sm tracking-wide justify-between flex pr-2 cursor-pointer pb-2.5 `}
                >
                <div>Baby Products</div>
                <div className={`text-xs pt-1.5 text-lite_content ${group == 'babyProducts' && 'rotate-180 transform transition-all duration-300 text-third'}`}>▼</div>
            </div>
            {/* content */}
            <div className={`${group != 'babyProducts' && 'hidden'}`}>
                <ul className='mr-2 px-3 p-2 font-serif space-y-3 tracking-wide text-[14px] text-content border-t border-gray flex flex-col items-start'>
                    <button onClick={()=>func('babyProducts' , 'all')} className={(urlGroup == 'babyProducts' && urlCategory == 'all') ? 'text-third' : ''} >All</button  >
                    <button onClick={()=>func('babyProducts' , 'diapers_wipes')} className={(urlGroup == 'babyProducts' && urlCategory == 'diapers_wipes') ? 'text-third' : ''} >Diapers & Wipes</button  >
                    <button onClick={()=>func('babyProducts' , 'skinCare')} className={(urlGroup == 'babyProducts' && urlCategory == 'skinCare') ? 'text-third' : ''} >Skin Care</button  >
                    <button onClick={()=>func('babyProducts' , 'babyFood')} className={(urlGroup == 'babyProducts' && urlCategory == 'babyFood') ? 'text-third' : ''} >Baby Food</button  >
                    <button onClick={()=>func('babyProducts' , 'babyProducts')} className={(urlGroup == 'babyProducts' && urlCategory == 'babyProducts') ? 'text-third' : ''} >Baby products</button  >
                    <button onClick={()=>func('babyProducts' , 'others')} className={(urlGroup == 'babyProducts' && urlCategory == 'others') ? 'text-third' : ''} >Others</button  >
                </ul>
            </div>
        </div>

        <div className={`p-2 ${group == 'personalCare' && 'text-third rounded border-2 border-gray '}`}>
            {/* group */}
            <div onClick={()=>setGroup('personalCare')}
                    className={`font-[arial] text-sm tracking-wide justify-between flex pr-2 cursor-pointer pb-2.5 `}
                >
                <div>Personal Care</div>
                <div className={`text-xs pt-1.5 text-lite_content ${group == 'personalCare' && 'rotate-180 transform transition-all duration-300 text-third '}`}>▼</div>
            </div>
            {/* content */}
            <div className={`${group != 'personalCare' && 'hidden'}`}>
                <ul className='mr-2 px-3 p-2 font-serif space-y-3 tracking-wide text-[14px] text-content border-t border-gray flex flex-col items-start'>
                    <button onClick={()=>func('personalCare' , 'all')}  className={(urlGroup == 'personalCare' && urlCategory == 'all') ? 'text-third' : ''} >All</button  >
                    <button onClick={()=>func('personalCare' , 'perfumes_deos')}  className={(urlGroup == 'personalCare' && urlCategory == 'perfumes_deos') ? 'text-third' : ''} >Perfumes & deos</button  >
                    <button onClick={()=>func('personalCare' , 'talc_powder')}  className={(urlGroup == 'personalCare' && urlCategory == 'talc_powder') ? 'text-third' : ''} >Talc & powders</button  >
                    <button onClick={()=>func('personalCare' , 'skin_care')}  className={(urlGroup == 'personalCare' && urlCategory == 'skin_care') ? 'text-third' : ''} >Skin Care</button  >
                    <button onClick={()=>func('personalCare' , 'sanitaryEssentials')}  className={(urlGroup == 'personalCare' && urlCategory == 'sanitaryEssentials') ? 'text-third' : ''} >Sanitary essentials</button  >
                    <button onClick={()=>func('personalCare' , 'hairCare')}  className={(urlGroup == 'personalCare' && urlCategory == 'hairCare') ? 'text-third' : ''} >Hair Care</button  >
                    <button onClick={()=>func('personalCare' , 'oralCare')}  className={(urlGroup == 'personalCare' && urlCategory == 'oralCare') ? 'text-third' : ''} >Oral Care</button  >
                    <button onClick={()=>func('personalCare' , 'shavingEssentials')}  className={(urlGroup == 'personalCare' && urlCategory == 'shavingEssentials') ? 'text-third' : ''} >Shaving Essentials</button  >
                    <button onClick={()=>func('personalCare' , 'others')}  className={(urlGroup == 'personalCare' && urlCategory == 'others') ? 'text-third' : ''} >Others</button  >
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CategoryListFeed  
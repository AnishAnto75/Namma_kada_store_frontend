import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    groups : ['staples' , 'snacks_beverages' , 'packedFood' , "householdCare" , 'babyProducts' , "personalCare"],
    groupsCategory : {
        "staples" : ['all', 'dals_pulses' , 'diary' , 'rice' , 'oils_ghees' , 'masalas' , 'condiments_spices' , 'flours' , 'dryFruits_nuts' , "water" , 'others'],
        "snacks_beverages" : ['all', 'chips_namkeens' , 'tea' , 'coffee' , 'soft_drinks' , 'juices' , 'health_drinks' , 'chocolates_candy' , 'sweets' , "instant_drink_mix" , 'others'],
        "packedFood": ['all', 'noodles_pasta' , 'pickles' , 'honey' , 'sauce_ketchup' , 'ready_to_cook' , 'others'],
        "householdCare" : ['all', 'detergents' , 'utinsilsCleaner' , 'floor_bathroomEssentials' , 'airFreshner' , 'repellents' , 'others'],
        "babyProducts" : ['all', 'diapers_wipes' , 'skinCare' , 'babyFood' , 'babyProducts' , 'others'],
        "personalCare" : ['all', 'perfumes_deos' , 'talc_powder' , 'skin_care' , 'sanitaryEssentials' , "hairCare" , "oralCare" , "shavingEssentials" , 'others'],
    }
}

const GroupCategorySlice = createSlice({
    name : 'groupCategory',
    initialState,
    reducers:{},
})

export const selectGroupCategory = (state)=>state.groupCategory.groupsCategory
export const selectProductGroups = (state)=>state.groupCategory.groups

export default GroupCategorySlice.reducer
// import React from "react";
// import { useQuery } from "react-query";
// import axios from "axios";
// const DataCard = async () => {
//     try{
//         const response = await axios.get(import.meta.env.VITE_APP_DATA_CARD_ITEMS);
//         return response.data
//     }catch(error){
//         throw error;
//     }
// }
// const queryKey = ["data-card"];
// export const useData = () => {
//     return useQuery({
//         queryKey: queryKey,
//         queryFn: DataCard,
//         cacheTime: 5000,
//         staleTime: 0,
//         refetchOnMount: true,
//         refetchOnWindowFocus: 'always',
//         refetchIntervalInBackground: true
//     })
// }
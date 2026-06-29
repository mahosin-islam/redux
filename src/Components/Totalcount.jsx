import { useSelector } from "react-redux";

export default function TotalCount(){

  const count = useSelector((state) => state.counters?.count);
   

  return (
     <div className='flex flex-col rounded-2xl px-16 py-8 h-auto items-center justify-center bg-white shadow mt-4'>
         <h2>Total counts: {count || 0}</h2>
     </div>
  );
}
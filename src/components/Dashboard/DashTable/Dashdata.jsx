import { FaUserSlash } from "react-icons/fa6"
import { FaUserEdit } from "react-icons/fa";
import { trash } from "assets/Allimages";

export default function Dashdata({category, subcategory,Ad,State,id, index ,popup}) {
    return (
        <tr className="bg-white border-b text-[12px] sm:text-[15px] lg:text-[17px] hover:bg-gray-50 flex text-gray-500 justify-between mb-2 h-auto no-scrollbar">
            <td className="px-6  font-medium text-gray-900 flex items-center ">
                    <div className="flex justify-start items-center gap-[5px] w-[20rem] overflow-auto">
                    <input type="checkbox"  className="w-[16px] h-[16px] border-[1px] border-solid border-black-900_87 rounded-[5px] mr-6"/>
                    <p className="inline-block">{category}</p></div>
                {/* <input type="checkbox"  className="w-[16px] h-[16px] border-[1px] border-solid border-black-900_87 rounded-[5px] mr-6"/>
                <div className="flex justify-start  items-center gap-[2.5px] text-gray-500"><img src={picture} alt="userAvator" className='h-7 w-7 lg:h-9 lg:w-9 rounded-full' />{tit}</div> */}
            </td>
            <td className="px-2 flex items-center justify-start  w-[20rem]"> {subcategory} </td>
            <td className="px-2 flex items-center justify-start  w-[20rem]" > {Ad}</td>
            <td className="px-2 flex items-center justify-start  w-[15rem]">{State}</td>
            {/* <td className="px-2 flex items-center justify-start  w-40">
                <button className={`w-[6.7rem] ${status === 'Ban' ? 'bg-blue-100 border-blue-100 text-blue-500 hover:bg-transparent ' : status === 'Banned' ? 'bg-gray-100 border-gray-100 text-gray-600 hover:bg-transparent hover:text-black hover:border-black' : 'bg-[#56C2FF] border-[#56C2FF] hover:text-[#56C2FF]'}  py-1.5 font-medium rounded border `}
                > {status}
                </button>
            </td> */}
            <td className="px-2 flex items-center justify-start  w-[10rem] mx-auto">
                <div className="flex justify-center flex-row gap-[3px] w-[90%] " >
                      <button onClick={popup}  className="px-4 py-2 rounded-[7px] bg-cyan-600 hover:bg-cyan-800 text-[12px] text-white-A700">Edit</button>
                      <button className="px-4 py-2 rounded-[7px] bg-red-500 hover:bg-red-600 text-[12px] text-white-A700">Delete</button>
                </div>
            </td>
        </tr>
    )
}
import { CiSearch } from "react-icons/ci";

export const Dashboard = () => {


    return (
        <>
            <div className=" w-full md:flex justify-center px-4">
                <div className=" w-full max-w-7xl px-4 md:px-8 md:py-8 my-6 md:border border-[#E0E7FF]
                rounded-xl bg-white md:shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                    <div className="flex justify-between md:flex-row md:items-center md:justify-between md:gap-4">
                        <div className=" w-50  flex md:w-full md:max-w-md h-10 pl-3 gap-2 items-center border rounded-md border-[#E0E7FF] shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                            <CiSearch className="text-[#8B5CF6] text-[20px]" />
                            <input
                                className="w-full text-[#8B5CF6] outline-none"
                                type="text"
                                placeholder="Search..."
                            />
                        </div>

                        <button className="h-10 px-4 border w-20 md:w-35.5 border-[#E0E7FF] bg-white text-[#8B5CF6] text-[16px] md:text-[18px] font-semibold rounded-md cursor-pointer">
                            Add
                        </button>
                        {/* Pour le menu burger */}
                        
                    </div>

                    {/* Tableau desktop */}
                    <div className="hidden md:block w-full mt-6 ">
                        <table className="w-full min-w-175 table-fixed">
                            <thead>
                                <tr className="border-b border-[#E0E7FF]">
                                    <th className="py-2">Company</th>
                                    <th className="py-2">Job</th>
                                    <th className="py-2">Contact</th>
                                    <th className="py-2">Place</th>
                                    <th className="py-2">Date</th>
                                    <th className="py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[#E0E7FF]">
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Récupération éléments mobile     */}
                    <div className="bg-[#F5F3FF] flex flex-col gap-4 mt-6 p-4 rounded-xl">
                        <h3 className="text-center font-semibold text-[#312E81] md:hidden">
                            Entreprises ajoutées
                        </h3>


                        <div className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 shadow">
                            <p className="font-semibold"></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <div className="flex gap-3 mt-2">
                                {/* <button className="px-2 py-1 border rounded"></button>
        <button className="px-2 py-1 border rounded"></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
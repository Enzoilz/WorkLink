import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { AddJob } from "../components/AddJob/AddJob";
import { LuPanelRightClose } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";
import { AnimatePage } from "../components/AnimatePage/AnimatePage";
import { useApp } from "../hooks/useApp";
import { useNavigate } from "react-router";


export const Sheet = () => {

    const [jobs, setJobs] = useState([]);
    const [modal, setModal] = useState(false);
    const [info, setInfo] = useState(false);
    const { error, setError, auth } = useApp()
    const navigate = useNavigate()

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await fetch('http://localhost:3000/job/Job%20%C3%A9t%C3%A9%202026/1', {});
            const data = await res.json();
            if (data.message === "You must have to be connected") {
                console.log(auth)
                const deleteToken = localStorage.removeItem("accessToken", auth)
                navigate("/login")
            } else {
                return data;
            }
        } catch (err) {
            throw new Error(`Nouvelle erreur détectée : ${err}`)
        };
    };

    return (
        <AnimatePage>
        <>
                <div className="flex">
                <button className="flex text-4xl mt-6 ml-5 min-h-full text-[#312E81]  cursor-pointer"><LuPanelRightClose /></button>
                <div className=" w-full md:flex justify-center px-4">
                    <div className=" w-full max-w-7xl px-4 md:px-8 md:py-8 my-6 md:border border-[#E0E7FF]
                            rounded-xl bg-white md:shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                        <div className="flex justify-between md:flex-row md:items-center md:justify-between md:gap-4">
                            <div className=" w-50  flex md:w-full md:max-w-md h-10 pl-3 gap-2 items-center border rounded-md border-[#E0E7FF] shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                                <CiSearch className="text-[#8B5CF6] text-body3-line" />
                                <input
                                    className="w-full text-[#8B5CF6] outline-none"
                                    type="text"
                                    placeholder="Search..."
                                />
                            </div>
                
                            <button type="button" onClick={()=> setModal(true) } className="h-10 px-4 border w-20 md:w-35.5 border-[#E0E7FF] bg-white text-[#8B5CF6] text-[16px] md:text-[18px] font-semibold rounded-md cursor-pointer">
                                Add
                            </button>
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
                                    {jobs.map((job) => (
                                        <tr key={job.id} className="border-b border-[#E0E7FF]">
                                            <td className="py-2">{job.company}</td>
                                            <td className="py-2">{job.job}</td>
                                            <td className="py-2">{job.email}</td>
                                            <td className="py-2">{job.city}</td>
                                            <td className="py-2">{job.date}</td>
                                            <td className="py-2 gap-2">
                                             {/* Test bouton delete et info */}
                                                <div className="flex gap-2">
                                                    <button onClick={setInfo(true)}><GrDocumentUser /></button>
                                                    <button><RiDeleteBin6Line /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Bloc mobile     */}
                        <div className="bg-[#F5F3FF] flex flex-col gap-4 mt-6 p-4 rounded-xl">
                            <h3 className="text-center font-semibold text-[#312E81] md:hidden">
                                Entreprises ajoutées
                            </h3>
                
                            <div  className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 shadow">
                                {jobs.map((job) => (
                                    <div key={job.id}>
                                        <p>{job.company}</p>
                                        <p>{job.job}</p>
                                        <p>{job.email}</p>
                                        <p>{job.city}</p>
                                        <p>{job.date}</p>
                                        <div>
                                        {/* Test bouton delete et info */}
                                        <div className="flex gap-2">
                                            <button onClick={setInfo(true)}><GrDocumentUser /></button>
                                            <button ><RiDeleteBin6Line /></button>
                                        </div>

                                        </div>
                                    </div>
                                ))}
                                <div className="flex gap-3 mt-2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="w-25 hidden">
                    <p>5</p>
                </div>
                  
            {modal && (<AddJob onClose={()=>setModal(false)} onSucces={fetchJobs}/>) } 
            {info && ( <div className="">
                    {jobs.map((job)=>(
                        <div>
                            <p>{job.note}</p>
                        </div>
                    ) )}
                </div>)} 
        </>
        </AnimatePage>
    )
}

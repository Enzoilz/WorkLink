import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { AddJob } from "../components/AddJob/AddJob";
import { LuPanelRightClose } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";
import { AnimatePage } from "../components/AnimatePage/AnimatePage";
import { useApp } from "../hooks/useApp";
import { useNavigate } from "react-router";


export function Sheet () {

    const [jobs, setJobs] = useState([
        // { id: 1, name: "Job été 2026", createdAt: "2026-02-24T08:48:39.000Z", updateAt: "2026-02-24T08:48:39.000Z" }
    ]);
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false);
    const [info, setInfo] = useState(false);
    const { error, setError, auth} = useApp()
    const navigate = useNavigate()


    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('http://localhost:3000/sheet', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${auth}`
                    },
                });
                const data = await res.json();
                
                if (!res.ok) {
                    return setError(data.message)
                }
                return setJobs(data.sheets)
            } catch (err) {
                throw new Error(`Nouvelle erreur détectée : ${err}`)
            } finally {
                setLoading(false)
            }
        };

        fetchJobs()
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await fetch('')
            const data = await res.json()
            setJobs(data);
        } catch (err) {
            console.error(err);
        };
    }; 


    return (
        <AnimatePage>
        <>
                <div className="flex">
                <button className="flex text-4xl mt-6 ml-5 min-h-full text-foreground cursor-pointer"><LuPanelRightClose /></button>
                <div className=" w-full md:flex justify-center px-4">
                    <div className=" w-full max-w-7xl px-4 md:px-8 md:py-8 my-6 md:border border-border
                            rounded-xl bg-white md:shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                        <div className="flex justify-between md:flex-row md:items-center md:justify-between md:gap-4">
                            <div className=" w-50  flex md:w-full md:max-w-md h-10 pl-3 gap-2 items-center border rounded-md border-border shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                                <CiSearch className="text-ring text-body3-line" />
                                <input
                                    className="w-full text-ring outline-none"
                                    type="text"
                                    placeholder="Search..."
                                />
                            </div>
                
                            <button type="button" onClick={()=> setModal(true) } className="h-10 px-4 border w-20 md:w-35.5 border-border bg-white text-ring text-[16px] md:text-[18px] font-semibold rounded-md cursor-pointer">
                                Add
                            </button>
                        </div>
                        
                        {/* Tableau desktop */}
                        <div className="hidden md:block w-full mt-6 ">
                            <table className="w-full min-w-175 table-fixed">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="py-2">Company</th>
                                        <th className="py-2">Date</th>
                                        {/* <th className="py-2">Contact</th>
                                        <th className="py-2">Place</th>
                                        <th className="py-2">Date</th> */}
                                        <th className="py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job) => (
                                        <tr key={job.id} className="border-b border-border">
                                            <td className="py-2">{job.company}</td>
                                            <td className="py-2">{job.job}</td>
                                            <td className="py-2">{job.email}</td>
                                            <td className="py-2">{job.city}</td>
                                            <td className="py-2">{job.date}</td>
                                            <td className="py-2 gap-2">
                                             {/* Test bouton delete et info */}
                                                <div className="flex gap-2">
                                                {/* Bouton info */}
                                                    <button onClick={() => setInfo(true)}
                                                    ><GrDocumentUser /></button>
                                                    {/* Bouton delete */}
                                                    <button><RiDeleteBin6Line /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Bloc mobile     */}
                        <div className="bg-muted flex flex-col gap-4 mt-6 p-4 rounded-xl">
                            <h3 className="text-center font-semibold text-foreground md:hidden">
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
                                            {/* Bouton info */}
                                            <button onClick={() => setInfo(true)}><GrDocumentUser /></button>
                                            {/* Bouton delete */}
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
               
                                
                
            {modal && (<AddJob onClose={()=>setModal(false)} onSucces={fetchJobs}/>) }

            {info && ( <div className="w-full flex min-h-screen justify-center items-center inset-0 z-50 bg-black/50">
                    {jobs.map((job)=>(
                        <div>
                            <p>{job.note}</p>
                            <button onClick={() => setInfo(null)}>Close</button>
                        </div>
                    ) )}
                </div>)} 
        </>
        </AnimatePage>
    )
}

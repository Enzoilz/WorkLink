import { useState } from "react";
import { useApp } from "../../hooks/useApp";

export const AddJob = ({onClose, onSucces}) => {
    const createJob = { company: '', job: '', email: '', city: '', date: '', note:'' }
    const [form, setForm] = useState(createJob)
    const { auth, error, setError } = useApp()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const contentJob = {
                name: form.company.trim(),
                // job: form.job.trim(),
                // email: form.email.trim(),
                // city: form.city.trim(),
                // date: form.date.trim(),
                // info: form.note.trim()
            }

            const res = await fetch("http://localhost:3000/sheet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth}`,
                },
                body: JSON.stringify(contentJob)
            })
            const data = await res.json().catch(() => null);
            console.log(res)
            console.log(data)

            if (!res.ok) {
                return setError(data.message)
            }
            console.log("Job created :", data ?? contentJob)
            onSucces?.(); 
            onClose?.();
            
        } catch (err) {
            throw new Error(err)
        }
        console.log("Job created :", form)
        navigate("/sheet")
    }

    return (
        <div className="w-full flex min-h-screen justify-center items-center fixed inset-0 z-50 bg-black/50">
            <div className="flex justify-center w-155.75 py-5.75 px-10.75 flex-col items-start gap-2.5 bg-[#FFF] rounded-xl shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start gap-10.75 self-stretch  ">
                        <h3 className="text-[#312E81] text-[1.875rem] font-semibold leading-7 mb-10.75 ">Ajouter une offre</h3>
                        <div className="flex w-107.75 h-47 flex-col justify-center items-start mb-8 gap-4.25">
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-[#312E81] text-center text-body3-line font-medium leading-5">Company</label>
                                <input
                                    className="w-83.75 h-5.75 border-[#E0E7FF] rounded-md shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="text"
                                    name='company'
                                    placeholder="Ajoutez une entreprise"
                                    value={form.company}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-[#312E81] text-center text-body3-line font-medium leading-5">Job</label>
                                <input
                                    className="w-83.75 h-5.75 border-[#E0E7FF] rounded-md shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="text"
                                    name="job"
                                    placeholder="Ajoutez un poste"
                                    value={form.job}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-[#312E81] text-center text-body3-line font-medium leading-5">Contact</label>
                                <input
                                    className="w-83.75 h-5.75 border-[#E0E7FF] rounded-md shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Ajoutez un mail"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-[#312E81] text-center text-body3-line font-medium leading-5">Place</label>
                                <input
                                    className="w-83.75 h-5.75 border-[#E0E7FF] rounded-md shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="text"
                                    name="city"
                                    placeholder="Ajoutez une ville"
                                    value={form.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-10 items-baseline">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-[#312E81] text-center text-body3-line font-medium leading-5">Info</label>
                                <textarea
                                    className="w-83.75 h-25 border-[#E0E7FF] rounded-md shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="text"
                                    name="note"
                                    placeholder="Ajoutez des informations sur l'entreprise"
                                    value={form.note}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-[#312E81] text-center text-body3-line font-medium leading-5">Date</label>
                                <input
                                    className="w-83.75 h-5.75 border-[#E0E7FF] rounded-md shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                />
                            </div>*/}
                        </div>
                        <div className="ml-45 flex gap-3.5 ">
                            <button type="button" onClick={onClose} className="flex w-16.75 h-5.25 flex-col pt-3 pb-3
                     justify-center shrink-0 border border-[#312E81] rounded-lg text-center text-body3-size font-normal leading-5 shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]">Cancel</button>
                            <button className="flex w-16.75 h-5.25 flex-col pt-3 pb-3
                     justify-center shrink-0 border bg-[#8B5CF6] border-[#312E81] rounded-lg text-center text-[#FFF] text-body3-size font-normal leading-5 shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]" type="submit" >Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
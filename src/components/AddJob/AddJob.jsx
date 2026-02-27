import { useState } from "react";

export const AddJob = ({onClose, onSucces}) => {
    const createJob = { company: '', job: '', email: '', city: '', date: '', status:'', note:'' }
    const [form, setForm] = useState(createJob)

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
                company: form.company.trim(),
                job: form.job.trim(),
                email: form.email.trim(),
                city: form.city.trim(),
                date: form.date.trim(),
                info: form.note.trim(),
                status: form.status.trim()
            }

            const res = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contentJob)
            })
            const data = await res.json().catch(() => null);

            if (!res.ok) {
                const message = data?.message || data?.error || `Erreur détectée ${res.status} ${res.statusText}`;
                console.error(message);
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
            <div className="flex justify-center w-155.75 py-5.75 px-10.75 flex-col items-start gap-2.5 bg-[#FFF] rounded-xl shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start gap-15 self-stretch  ">
                        <h3 className="text-foreground text-[30px] font-semibold leading-7 mb-10.75 ">Ajouter une offre</h3>
                        <div className="flex w-107.75 h-47 flex-col justify-center items-start mb-8 gap-4.25">
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-foreground text-center text-body3-line font-medium leading-5">Company</label>
                                <input
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="text"
                                    name='company'
                                    placeholder="Ajoutez une entreprise"
                                    value={form.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-foreground text-center text-body3-line font-medium leading-5">Job</label>
                                <input
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="text"
                                    name="job"
                                    placeholder="Ajoutez un poste"
                                    value={form.job}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-foreground text-center text-body3-line font-medium leading-5">Contact</label>
                                <input
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Ajoutez un mail"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-foreground text-center text-body3-line font-medium leading-5">Place</label>
                                <input
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="text"
                                    name="city" 
                                    placeholder="Ajoutez une ville"
                                    value={form.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-10 items-baseline">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-foreground text-center text-body3-line font-medium leading-5">Info</label>
                                <textarea
                                    className="w-83.75 h-25 py-2 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="text"
                                    name="note"
                                    placeholder="Ajoutez des informations sur l'entreprise"
                                    value={form.note}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-foreground text-center text-body3-line font-medium leading-5">Statut</label>
                                <select 
                                    name=""    
                                    id="">
                                    <option value="none">Statut</option>
                                    <option value="postulate">Candidature envoyé</option>
                                    <option value="firstInterview">Premier entretien</option>
                                    <option value="denied">Refusé</option>
                                    <option value="noResponse">Sans réponse</option>
                                </select>
                            </div>
                            <div className="flex gap-10 items-center">
                                <label className="flex w-17.75 h-6 flex-col justify-center shrink-0 text-foreground text-center text-body3-line font-medium leading-5">Date</label>
                                <input
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                    required
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="ml-45 mt-3 flex gap-3.5 ">
                            <button type="button" onClick={onClose} className="flex w-16.75 h-5.25 flex-col pt-3 pb-3
                     justify-center shrink-0 border border-foreground rounded-lg text-center text-body3-size font-normal leading-5 shadow-[2px_4px_4px_0_rgba(139,92,246,0.30)]">Cancel</button>
                            <button className="flex w-16.75 h-5.25 flex-col pt-3 pb-3
                     justify-center shrink-0 border bg-ring border-foreground rounded-lg text-center text-[#FFF] text-body3-size font-normal leading-5 shadow-[2px_ 4px_4px_0_rgba(139,92,246,0.30)]" type="submit" >Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
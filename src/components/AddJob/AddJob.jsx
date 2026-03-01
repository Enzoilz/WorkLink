import { useState } from "react";
import { useApp } from "../../hooks/useApp";

export const AddJob = ({ sheetName, onClose, onSucces }) => {
    const createJob = { companyName: '', job: '', source: '', city: '', dispatchDate: '', status:'', opinion: 0, info:'' };
    const [form, setForm] = useState(createJob);
    const { auth, error, setError } = useApp();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const contentJob = {
                companyName: form.companyName.trim(),
                job: form.job.trim(),
                status: form.status || 'application sent',
                opinion: form.opinion || 0,
                source: form.source.trim(),
                dispatchDate: form.dispatchDate.trim(),
                contact: form.city.trim(),
                info: form.info.trim() || null
            };

            const res = await fetch(`http://localhost:3000/job/${sheetName}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth}`,
                },
                body: JSON.stringify(contentJob)
            });

            const data = await res.json().catch(() => null);

            if (!res.ok) {
                return setError(data?.message || "Erreur lors de la création du job");
            }

            onSucces?.();
            onClose?.();

        } catch (err) {
            console.error(err);
            setError(err.message || "Erreur réseau");
        }
    };

    return (
        <div className="w-full flex min-h-screen justify-center items-center fixed inset-0 z-50 bg-black/50">
            <div className="flex justify-center w-100 md:w-155.75 h-200 md:h-auto  py-5.75 px-10.75 flex-col items-start gap-2.5 bg-[#FFF] rounded-xl shadow-[0_0.125rem_1.25rem_0_rgba(139,92,246,0.40)]">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-start gap-50 md:gap-30">
                        <h3 className="text-foreground text-body3-line md:text-[30px] font-semibold leading-7 mb-10.75 ml-20 md:ml-0">Ajouter une offre</h3>

                        <div className="flex w-107.75 h-47 flex-col justify-center items-start mb-8 gap-4.25">
                            <div className="flex flex-col md:flex-row gap-1 md:gap-10 items-center">
                                <label className="flex w-17.75 h-6 justify-center text-foreground font-medium">Company</label>
                                <input
                                    type="text"
                                    required
                                    name='companyName'
                                    placeholder="Ajoutez une entreprise"
                                    value={form.companyName}
                                    onChange={handleChange}
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-1 md:gap-10 items-center">
                                <label className="flex w-17.75 h-6 justify-center text-foreground font-medium">Job</label>
                                <input
                                    type="text"
                                    required
                                    name="job"
                                    placeholder="Ajoutez un poste"
                                    value={form.job}
                                    onChange={handleChange}
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-1 md:gap-10 items-center">
                                <label className="flex w-17.75 h-6 justify-center text-foreground font-medium">Source</label>
                                <input
                                    type="text"
                                    required
                                    name="source"
                                    placeholder="Lien ou email de contact"
                                    value={form.source}
                                    onChange={handleChange}
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-1 md:gap-10 items-center">
                                <label className="flex w-17.75 h-6 justify-center text-foreground font-medium">Contact</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Numéro ou ville"
                                    value={form.city}
                                    onChange={handleChange}
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-1 md:gap-10 items-center">
                                <label className="flex w-17.75 h-6 justify-center text-foreground font-medium">Date</label>
                                <input
                                    type="date"
                                    required
                                    name="dispatchDate"
                                    value={form.dispatchDate}
                                    onChange={handleChange}
                                    className="w-83.75 h-5.75 py-4 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-1 md:gap-10 items-center">
                                <label className="flex w-17.75 h-6 justify-center text-foreground font-medium">Status</label>
                                <select
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="w-83.75 h-5.75 py-2 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                >
                                    <option value="application sent">Candidature envoyée</option>
                                    <option value="firstInterview">Premier entretien</option>
                                    <option value="denied">Refusé</option>
                                    <option value="noResponse">Sans réponse</option>
                                </select>
                            </div>
                            <div className="flex flex-col md:flex-row gap-1 md:gap-10 items-center ml-32 md:ml-0">
                                <label className="flex w-17.75 h-6 justify-center text-foreground font-medium">Opinion</label>
                                <input
                                    type="number"
                                    name="opinion"
                                    min={0}
                                    max={5}
                                    value={form.opinion}
                                    onChange={handleChange}
                                    className="w-20 h-5.75 py-2 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-1 md:gap-10 items-center">
                                <label className="flex w-17.75 h-6 justify-center text-foreground font-medium">Info</label>
                                <textarea
                                    name="info"
                                    placeholder="Informations complémentaires"
                                    value={form.info}
                                    onChange={handleChange}
                                    className="w-83.75 h-25 py-2 px-2 border-[#E0E7FF] rounded-md shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
                                />
                            </div>
                        </div>

                        <div className="ml-45 mt-3 flex gap-3.5">
                            <button type="button" onClick={onClose} className="flex w-17.5 h-5.25 pb-6 justify-center border border-foreground rounded-lg text-center font-normal shadow-[2px_4px_4px_0_rgba(139,92,246,0.30)] cursor-pointer" >Cancel</button>
                            <button type="submit" className="flex w-17.5 h-5.25 pb-6 justify-center border bg-ring border-foreground rounded-lg text-white font-normal shadow-[2px_ 4px_4px_0_rgba(139,92,246,0.30)] cursor-pointer">Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

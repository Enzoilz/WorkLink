import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useApp } from "../hooks/useApp"

export const SignUp = () => {

    const user = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }
    const [form, setForm] = useState(user)
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const payload = {
                firstName: form.firstName.trim(),
                lastName: form.lastName.trim(),
                email: form.email.trim(),
                password: form.password.trim()
            }

            const res = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })

            const data = await res.json().catch(() => null);

            if (!res.ok) {
                const message = data?.message || data?.error || `Erreur détectée ${res.status} ${res.statusText}`;
                console.error(message);
            }
            console.log("User created :", data ?? payload)
            navigate("/login")
        } catch(err) {
            throw new Error(err)
        }
        console.log("User created :", form)
    }

    return (
        <div className="w-full flex justify-center mt-24 md:mt-5">
            <form onSubmit={handleSubmit}>
                <div className="flex w-91.5 md:w-150 h-165.25 md:h-[700] px-12.25 py-10 flex-col items-center gap-5
         shrink-0 rounded-[20px] bg-[#FFF] shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                    <h3 className="  text-[24px] md:text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9 mb-5">Sign Up</h3>
                    <div className="flex flex-col md:flex-row gap-4" >
                        <label className="flex flex-col gap-5">
                            <div className="flex justify-center md:justify-normal">
                                <h3 className=" text-[18px] md:text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Firstname</h3>
                            </div>
                            <input
                                className=" w-40 md:w-50 h-7.5 md:h-[50] rounded-[10px] p-1 bg-[#FFFFFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                                required
                                type="text"
                                name="firstname"
                                placeholder="Entrer votre prénom"
                                value={form.firstName}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="flex flex-col gap-5">
                            <div className="flex justify-center md:justify-normal">
                                <h3 className="text-[18px] md:text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Lastname</h3>
                            </div>
                            <input
                                className="w-40 md:w-50 h-7.5 md:h-[50] rounded-[10px] p-1 bg-[#FFFFFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                                required
                                type="text"
                                name="lastname"
                                placeholder="Entrer votre nom"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <label className="flex flex-col gap-5">
                        <div className="flex justify-center md:justify-normal">
                            <h3 className="text-[18px] md:text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Email</h3>
                        </div>
                        <input className=" w-61.75 md:w-100 h-7.5 md:h-12.5 shrink-0 rounded-[10px] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                            required
                            type="email"
                            name="email"
                            placeholder="mail@exemple.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="flex flex-col gap-5">
                        <div className="flex justify-center md:justify-normal">
                            <h3 className="text-[18px] md:text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Mot de passe</h3>
                        </div>
                        <input className="w-61.75 md:w-100 h-7.5 md:h-12.5 shrink-0 rounded-[10px] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                            required
                            type="password"
                            name="password"
                            placeholder="Entrer votre mot de passe"
                            value={form.password}
                            onChange={handleChange}
                        />
                        <input className="w-61.75 md:w-100 h-7.5 md:h-12.5 shrink-0 rounded-[10px] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                            required
                            type="password"
                            name="check"
                            placeholder="Confirmer votre mot de passe"
                            value={form.confirmPassword}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="w-50 md:w-100 h-7.5 md:h-12.5 shrink-0 text-[16px] md:text-[24px]  font-semibold text-[#FFF] rounded-[10px] bg-[#8B5CF6] shadow-[2px_4px_4px_rgba(139,92,246,0.30)] tracking-[-0.48px] cursor-pointer " type="submit">S'inscrire</button>

                    <Link to="/login"><p className=" text-[16px] md:text-[20px] text-[#312E81] font-normal self-stretch mb-1">Déjà inscrit ? Se connecter</p></Link>
                </div>
            </form>
        </div>

    )
}
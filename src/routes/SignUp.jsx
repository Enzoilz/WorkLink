import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useApp } from "../hooks/useApp"
import { AnimatePage } from "../components/AnimatePage/AnimatePage"

export const SignUp = () => {

    const user = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }
    const [form, setForm] = useState(user)
    const { error, setError } = useApp()
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
                return setError(`Register failed`)
            }
            console.log("User created :", data.message ?? payload)
            navigate("/login")
        } catch(err) {
            throw new Error(err)
        }
        console.log("User created :", form)
    }

    return (
        
        <AnimatePage>
            <div className="w-full flex justify-center mt-5 md:mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="flex w-[23rem] md:w-[38rem] h-[42rem] px-[3rem] py-[2.5rem] flex-col items-center gap-5
            shrink-0 rounded-[20px] bg-[#FFF] shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                        <h3 className="text-[1.5rem] md:text-[2rem] font-semibold text-foreground tracking-[-0.6px] leading-[2.25rem] mb-[1.25rem]">Sign Up</h3>
                        <div className="flex flex-wrap md:flex-row gap-[1rem] justify-center" >
                            <label className="flex flex-col gap-[1.25rem]">
                                <div className="flex justify-center md:justify-normal">
                                    <h3 className=" text-[1rem] md:text-[2rem] font-semibold text-foreground tracking-[-0.6px] leading-[2.25rem]">Firstname</h3>
                                </div>
                                <input
                                    className="w-[10rem] md:w-[12.5rem] h-[2rem] md:h-[3rem] rounded-[0.5rem] p-1 bg-[#FFFFFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                                    required
                                    type="text"
                                    name="firstName"
                                    placeholder="Entrer votre prénom"
                                    value={form.firstName}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className="flex flex-col gap-5">
                                <div className="flex justify-center md:justify-normal">
                                    <h3 className=" text-[1rem] md:text-[2rem] font-semibold text-foreground tracking-[-0.6px] leading-[2.25rem]">Lastname</h3>
                                </div>
                                <input
                                    className="w-[10rem] md:w-[12.5rem] h-[2rem] md:h-[3rem] rounded-[0.5rem] p-1 bg-[#FFFFFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"   
                                    required
                                    type="text"
                                    name="lastName"
                                    placeholder="Entrer votre nom"
                                    value={form.lastName}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <label className="flex flex-col gap-5">
                            <div className="flex justify-center md:justify-normal">
                                <h3 className=" text-[1rem] md:text-[2rem] font-semibold text-foreground tracking-[-0.6px] leading-[2.25rem]">Email</h3>
                            </div>
                            <input className="w-[15rem] md:w-[25rem] h-[2rem] md:h-[3rem] shrink-0 rounded-[0.5rem] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
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
                                <h3 className=" text-[1rem] md:text-[2rem] font-semibold text-foreground tracking-[-0.6px] leading-[2.25rem]">Mot de passe</h3>
                            </div>
                            <input className="w-[15rem] md:w-[25rem] h-[2rem] md:h-[3rem] shrink-0 rounded-[0.5rem] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                                required
                                type="password"
                                name="password"
                                placeholder="Entrer votre mot de passe"
                                value={form.password}
                                onChange={handleChange}
                            />
                            <input className="w-[15rem] md:w-[25rem] h-[2rem] md:h-[3rem] shrink-0 rounded-[0.5rem] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                                required
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirmer votre mot de passe"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                        </label>

                        <button className="w-[12.5rem] md:w-[25rem] h-[2rem] md:h-[3rem] shrink-0 text-[1rem] md:text-[1.5rem] font-semibold text-[#FFF] rounded-[0.5rem] bg-ring shadow-[2px_4px_4px_rgba(139,92,246,0.30)] tracking-[-0.48px] cursor-pointer" type="submit">S'inscrire</button>

                        <Link to="/login"><p className=" text-[1rem] md:text-body3-line text-foreground font-normal self-stretch ">Déjà inscrit ? Se connecter</p></Link>
                    </div>
            </form>
        </div>
        <div className="flex justify-center">   
    <Link to="/"><button className="flex w-[6rem] md:w-[7.5rem] p-2 mt-[2.5rem] text-[#FFF] text-body3-size md:text-body3-line font-medium justify-center border rounded-xl bg-[#8B5CF6] ">Accueil</button></Link> 
    </div>
    </AnimatePage>
    )
}
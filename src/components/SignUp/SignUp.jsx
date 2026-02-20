import { useState } from "react"
import { Link } from "react-router"

export const SignUp = () => {

    const user = { firstname: '', lastname: '', email: '', password: '' }
    const [form, setForm] = useState(user)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("User created :", form)
    }

    return (
        <div className="flex justify-center m-5">
        <form onSubmit={handleSubmit}>
            <div className="flex w-150 h-[700] px-12.25 py-10 flex-col items-start gap-5
         shrink-0 rounded-[20px] bg-[#FFF] shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                <h3 className="text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9 mb-5">Sign Up</h3>
                <div className="flex gap-4" >
                    <label className="flex flex-col gap-5">
                        <h3 className="text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Firstname</h3>
                        <input 
                            className="w-50 h-[50] rounded-[10px] p-1 bg-[#FFFFFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                            required
                            type="text"
                            name="firstname"
                            placeholder="Entrer votre prénom"
                            value={form.firstname}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="flex flex-col gap-5">
                        <h3 className="text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Lastname</h3>
                        <input 
                            className="w-50 h-[50] rounded-[10px] p-1 bg-[#FFFFFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                            required
                            type="text"
                            name="lastname"
                            placeholder="Entrer votre nom"
                            value={form.lastname}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <label className="flex flex-col gap-5">
                    <h3 className="text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Email</h3>
                    <input className="w-100 h-12.5 shrink-0 rounded-[10px] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                        required
                        type="email"
                        name="email"
                        placeholder="mail@exemple.com"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>

                <label className="flex flex-col gap-5">
                    <h3 className="text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Mot de passe</h3>
                    <input className="w-100 h-12.5 shrink-0 rounded-[10px] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                        required
                        type="password"
                        name="password"
                        placeholder="Entrer votre mot de passe"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <input className="w-100 h-12.5 shrink-0 rounded-[10px] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
                        required
                        type="password"
                        name="password"
                        placeholder="Confirmer votre mot de passe"
                        value={form.password}
                        onChange={handleChange}
                    />
                </label>
                <button className="w-100 h-12.5 shrink-0 text-[24px] font-semibold text-[#FFF] rounded-[10px] bg-[#8B5CF6] shadow-[2px_4px_4px_rgba(139,92,246,0.30)] tracking-[-0.48px] cursor-pointer " type="submit">S'inscrire</button>
                <Link to="/login"><p className="text-[20px] text-[#312E81] font-normal self-stretch">Déjà inscrit ? Se connecter</p></Link>
            </div>
        </form>
        </div>

    )
}
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useApp } from "../hooks/useApp"

export const Login = () => {

    const user = {email:'', password:'' }
    const [form, setForm] = useState(user)
    const { auth, setAuth, error, setError } = useApp()
    const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: form.email.trim(),
      password: form.password.trim(),
    };

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json()

      if (!res.ok) {
        throw new Error(`Nouvelle Erreur détectée : ${res.status} ${res.statusText}`)
      };
      const accessToken = localStorage.setItem("accessToken", data.token)

      if (auth) {
        navigate("/dashboard/welcome")
      } else {
        setError("Une erreur c'est produite !")
      }
    } catch(err) {
      throw new Error(`Erreur détectée : ${err}`);
    }
  }

return (
    <div className="w-full flex justify-center mt-5">
     <form className="flex w-150 h-175   items-center gap-2.5 shrink-0 " onSubmit={handleSubmit}>
     <div className="flex w-150 h-150 px-12.25 py-10 flex-col items-start gap-10 shrink-0 rounded-[20px] bg-[#FFF] shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
        <h3 className="text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Login</h3>
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
         </label>

         {error ? <div className="bg-red-300 p-2 rounded">
            <p>{error}</p>
         </div> : ""}
        
         <button className="w-100 h-12.5 shrink-0 text-[24px] font-semibold text-[#FFF] rounded-[10px] bg-[#8B5CF6] shadow-[2px_4px_4px_rgba(139,92,246,0.30)] tracking-[-0.48px] cursor-pointer " type="submit">Connexion</button> 
        <div className="flex gap-1">
             <Link to="/register"><p className="text-[20px] text-[#312E81] font-normal self-stretch"> Pas encore de compte ? S'inscrire</p></Link>
        </div>
     </div>
    </form>    
    </div>
  )

}




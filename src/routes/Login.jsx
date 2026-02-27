import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useApp } from "../hooks/useApp"
import { AnimatePage } from "../components/AnimatePage/AnimatePage"

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
        navigate("/dashboard")
      } else {
        setError("Une erreur c'est produite !")
      }
    } catch(err) {
      throw new Error(`Erreur détectée : ${err}`);
    }
  }

return (
    <AnimatePage>
      <div className="w-full flex justify-center mt-20 md:mt-5">
      <form className="flex max-w-xl md:h-2xl justify-center md:justify-normal  items-center gap-2.5 shrink-0 " onSubmit={handleSubmit}>
      <div className="flex max-w-xl h-[32rem] md:h-[38rem] px-[3rem] py-[2.5rem] flex-col items-start gap-[2.5rem] shrink-0 rounded-2xl bg-[#FFF] shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
          <h3 className="text-[1.5rem] md:text-[2rem] font-semibold text-foreground tracking-[-0.6px] leading-[2.25rem]">Login</h3>
          <label className="flex flex-col gap-[1.25rem]">
            <h3 className="text-[1.5rem] md:text-[2rem] font-semibold text-foreground tracking-[-0.6px] leading-[2.25rem]">Email</h3>
            <input className=" w-[12.5rem] md:w-[25rem] h-[2rem] md:h-[3rem] shrink-0 rounded-[0.5rem] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
              required
              type="email"
              name="email"
              placeholder="mail@exemple.com"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          
          <label className="flex flex-col gap-5">
            <h3 className="text-[1.5rem] md:text-[2rem] font-semibold text-foreground tracking-[-0.6px] leading-[2.25rem]">Mot de passe</h3> 
            <input className=" w-[12.5rem] md:w-[25rem] h-[2rem] md:h-[3rem] shrink-0 rounded-[0.5rem] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
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
          
          <button className=" w-[12.5rem] md:w-[25rem] h-[2rem] md:h-[3rem] shrink-0 text-[1rem] md:text-[1.5rem] font-semibold text-[#FFF] rounded-[0.5rem] bg-ring shadow-[2px_4px_4px_rgba(139,92,246,0.30)] tracking-[-0.48px] cursor-pointer " type="submit">Connexion</button> 
          <div className="flex gap-1">
            <Link to="/register"><p className="text-[1rem] md:text-body3-line text-foreground font-normal self-stretch"> Pas encore de compte ? S'inscrire</p></Link>
          </div>
      </div>
      </form>   
    </div>   
    <div className="flex justify-center">   
    <Link to="/"><button className="flex w-[6rem] mt-[2rem] md:w-[8rem] p-[0.5rem] text-[#FFF] text-body3-size md:text-body3-line font-medium justify-center border rounded-xl bg-ring ">Accueil</button></Link> 
    </div>
    </AnimatePage>
  )

}




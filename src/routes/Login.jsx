import { useState } from "react"
import { Link, useNavigate} from "react-router"


export const Login = () => {

  const user = { email: '', password: '' }
  const [form, setForm] = useState(user)


  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="w-full flex justify-center mt-24 md:mt-5">
      <form className="flex w-78 md:w-150 h-125 md:h-175 justify-center  items-center gap-2.5 shrink-0 " onSubmit={handleSubmit}>
        <div className=" flex w-78 md:w-150 h-125 md:h-150 py-5 md:px-12.25 md:py-10 flex-col items-center md:items-start gap-10 shrink-0 rounded-[20px] bg-[#FFF] shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
          <h3 className=" text-[24px] md:text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Login</h3>
          <label className="flex flex-col gap-8">
            <div className="flex justify-center md:justify-normal">
              <h3 className="text-[24px] md:text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9 ">Email</h3>
            </div>
            <input className=" w-65.75 md:w-100  h-7.5 md:h-12.5 shrink-0 rounded-[10px] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
              required
              type="email"
              name="email"
              placeholder="mail@exemple.com"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label className="flex flex-col gap-8">
            <div className="flex justify-center md:justify-normal">
              <h3 className="text-[24px] md:text-[30px] font-semibold text-[#312E81] tracking-[-0.6px] leading-9">Mot de passe</h3>
            </div>
            <input className="w-65.75 md:w-100  h-7.5 md:h-12.5 shrink-0 rounded-[10px] bg-[#FFF] shadow-[0_2px_20px_rgba(139,92,246,0.40)]"
              required
              type="password"
              name="password"
              placeholder="Entrer votre mot de passe"
              value={form.password}
              onChange={handleChange}
            />
          </label>

          <button className=" w-50 md:w-100 h-7.5 md:h-12.5 shrink-0 text-[16px] md:text-[24px] font-semibold text-[#FFF] rounded-[10px] bg-[#8B5CF6] shadow-[2px_4px_4px_rgba(139,92,246,0.30)] tracking-[-0.48px] cursor-pointer " type="submit">Connexion</button>
          <div className="flex gap-1">
            <Link to="/signup"><p className="text-[16px] md:text-[20px] text-[#312E81] font-normal self-stretch"> Pas encore de compte ? S'inscrire</p></Link>
          </div>
        </div>
      </form>
    </div>
  )

}




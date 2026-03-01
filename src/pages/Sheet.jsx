import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { LuPanelRightClose } from "react-icons/lu";
import { AnimatePage } from "../components/AnimatePage/AnimatePage";
import { useApp } from "../hooks/useApp";
import { useNavigate } from "react-router";

export function Sheet() {
  const [sheets, setSheets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [create, setCreate] = useState(false);
  const { error, setError, auth } = useApp();
  const navigate = useNavigate();

  const fetchSheets = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:3000/sheet", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        return setError(data?.message || "Erreur serveur");
      }

      setSheets(data?.sheets || []);
    } catch (err) {
      console.error(err);
      setError("Erreur réseau");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSheets();
  }, []);

  const handleOpen = (name) => {
    navigate(`/sheet/${name}`);
  };

  const handleAdd = async () => {
    const name = window.prompt("Nom de la nouvelle feuille :");
    if (!name) return;

    try {
      setCreate(true);
      setError("");

      const res = await fetch("http://localhost:3000/sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
        body: JSON.stringify({ name: name.trim() }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        return setError(data?.message || "Impossible de créer la feuille");
      }

      await fetchSheets(); // 
    } catch (err) {
      console.error(err);
      setError("Erreur réseau");
    } finally {
      setCreate(false);
    }
  };

  return (
    <AnimatePage>
      <>
        <div className="flex">
          <button className="flex text-4xl mt-6 ml-5 min-h-full text-foreground cursor-pointer">
            <LuPanelRightClose />
          </button>

          <div className=" w-full md:flex justify-center px-4">
            <div
              className=" w-full max-w-7xl px-4 md:px-8 md:py-8 my-6 md:border border-border
                            rounded-xl bg-white md:shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]"
            >
              <div className="flex justify-between md:flex-row md:items-center md:justify-between md:gap-4">
                <div className=" w-50  flex md:w-full md:max-w-md h-10 pl-3 gap-2 items-center border rounded-md border-border shadow-[0_2px_20px_0_rgba(139,92,246,0.40)]">
                  <CiSearch className="text-ring text-body3-line" />
                  <input
                    className="w-full text-ring outline-none"
                    type="text"
                    placeholder="Search..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={create}
                  className="h-10 px-4 border w-20 md:w-35.5 border-border bg-white text-ring text-[16px] md:text-[18px] font-semibold rounded-md cursor-pointer disabled:opacity-50"
                >
                  {create ? "..." : "Add"}
                </button>
              </div>

              {/* Desktop */}
                <div className="hidden md:block w-full mt-6 ">
                  <table className="w-full min-w-175 table-fixed">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2">Name</th>
                        <th className="py-2">Created</th>
                        <th className="py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sheets.map((sheet) => (
                        <tr
                          key={sheet.id}
                          className="border-b border-border hover:bg-muted/40 cursor-pointer"
                          onClick={() => handleOpen(sheet.name)}
                        >
                          <td className="py-2">{sheet.name}</td>
                          <td className="py-2">
                            {new Date(sheet.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-2">Open</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
        

              {/* Mobile */}
              
                <div className="bg-muted flex flex-col gap-4 mt-6 p-4 rounded-xl md:hidden">
                  <h3 className="text-center font-semibold text-foreground">
                    Mes feuilles
                  </h3>

                  {sheets.map((sheet) => (
                    <button
                      key={sheet.id}
                      onClick={() => handleOpen(sheet.name)}
                      className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 shadow"
                    >
                      <p className="font-medium">{sheet.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(sheet.createdAt).toLocaleDateString()}
                      </p>
                    </button>
                  ))}
                </div>
              

              {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-100 text-red-700">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </AnimatePage>
  );
}

import axios from "axios";
import  { useForm } from "react-hook-form";
import { useNavigate, Link} from "react-router-dom";
import Navbar from "../components/Navbar";

function AddData() {

    const {register, handleSubmit, formState: {errors}, } = useForm ({ defaultValues: {nama: "", kelas: "", prodi: "",
    },mode: "onBlur"
  }) ;
  const navigate = useNavigate();
    const addSubmid = async(data) =>{
      try {
        const response = await axios.post("http://localhost:9000/create",
        data,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: false,
        }
        );
        console.log(response);
        navigate("/view");
      } catch (error) {
        console.error(error);
      }
    };


    return (
        <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit(addSubmid)} className="flex flex-col items-center justify-center h-[60vh] w-[30vw] shadow-2xl gap-4">
            <h1>Add Data</h1>
            {/*nama */}
            <div className="flex flex-col">
                <label htmlFor="nama" className="px-[10px]">Nama</label>
                <input type="text" id="nama" placeholder="masukkan nama" className="px-20 py-3 border-2 bg-slate-200 rounded-2xl"
                {...register("nama", {required: "nama harus di isi"})} 
                />
                {errors.nama && (
                <span className="text-red-500">{errors.nama.message}</span>
                )}
            </div>

            {/*kelas */}
            <div className="flex flex-col">
                <label htmlFor="kelas" className="px-[10px]">Kelas</label>
                <input type="text" id="kelas" placeholder="masukkan kelas" className="px-20 py-3 border-2 bg-slate-200 rounded-2xl"
                {...register("kelas", {required: "kelas harus di isi"})} 
                />
                {errors.kelas && (
                <span className="text-red-500">{errors.kelas.message}</span>
                )}
                </div>

             {/*prodi */}
            <div className="flex flex-col">
                <label htmlFor="prodi" className="px-[10px]">prodi</label>
                <input type="text" id="prodi" placeholder="masukkan prodi" className="px-20 py-3 border-2 bg-slate-200 rounded-2xl"
                {...register("prodi", {required: "prodi harus di isi"})} 
                />
                {errors.prodi && (
                <span className="text-red-500">{errors.prodi.message}</span>
                )}
                </div> 
                <button className="border-2 border-black w-[10vw] h-[5vh] bg-blue-500 hover:bg-blue-400 text-white font-semibold">
                  add
                  </button>  
        </form>
    </div>
    </>
    );
}
  
  export default AddData
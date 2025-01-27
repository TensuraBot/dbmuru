import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
  const [formData, setFormData] = useState({
    whatsappNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://dbmuru.vercel.app/register", formData);
      toast.success("Registrasi berhasil!");
    } catch (err) {
      toast.error("Gagal registrasi: " + err.response.data);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="whatsappNumber"
          placeholder="Nomor WhatsApp"
          value={formData.whatsappNumber}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Daftar</button>
      </form>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  // Inisialisasi state untuk loading
  const [loading, setLoading] = useState(true);

  // Menggunakan useEffect untuk simulasi perubahan status loading
  useEffect(() => {
    // Simulasikan proses loading selama 3 detik
    const timer = setTimeout(() => {
      setLoading(false); // Mengubah loading menjadi false setelah 3 detik
    }, 3000);

    // Bersihkan timer jika komponen di-unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {loading ? (
        <BeatLoader color="#121b2d" loading={true} size={10} />
      ) : (
        <p>Content is loaded!</p> // Tampilkan konten setelah loading selesai
      )}
    </div>
  );
};

export default Loading;

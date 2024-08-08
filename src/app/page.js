"use client";
import React, { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [khodamResult, setKhodamResult] = useState("");
  const [loading, setLoading] = useState(false);

  const listKhodam = [
    "Nyi Roro Kidul",
    "Kuntilanak",
    "Pocong",
    "Lelembut",
    "Jin Khodam",
    "Kyai Plered",
    "Kyai Semangka",
    "Kyai Nogo Sosro",
    "Kyai Cundrik",
    "Ratu Pantai Selatan",
    "Gajah Mada",
    "Raden Wijaya",
    "Satria Piningit",
    "Sundel Bolong",
    "Sosok Kiai",
    "Jenglot",
    "Mak Lampir",
    "Cemeti Sari",
    "Gondoruwo",
    "Klewer",
    "Tuyul",
    "Buto Ijo",
    "Misteri Putih",
    "Cilongok",
    "Panglima Jendral",
    "Roh Leluhur",
    "Sari Peningit",
    "Dewa Penunggu",
    "Tanduk",
    "Dewi Rara Jonggrang",
    "Mbah Djoego",
    "Jaran Goyang",
    "Dewa Mataram",
    "Naga",
    "Simbah Gendong",
    "Arwah Kyai",
    "Saur Sepuh",
    "Kyai Raga",
    "Tirta",
    "Ratu Adil",
    "Hantu Jeruk Purut",
    "Kyai Sapu Jagat",
    "Cindelaras",
    "Raja Babi",
    "Naga Pusaka",
    "Ratu Angker",
    "Hantu Terbang",
    "Raja Jenglot",
    "Mbah Surip",
    "Kyai Tumenggung",
    "Sunan Kalijaga",
    "Dewi Sri",
    "Sunan Ampel",
    "Ratu Pesisir",
    "Kyai Harsono",
    "Ratu Sima",
    "Kyai Tembong",
    "Dewa Naga",
    "Dewa Bumi",
    "Pangeran Diponegoro",
    "Nyi Blorong",
    "Ratu Segoro",
    "Kyai Padepokan",
    "Hantu Rumah Kosong",
    "Kyai Jaran",
    "Dewi Kwan Im",
    "Kyai Kuning",
    "Sunan Giri",
    "Dewi Laksmi",
    "Pangeran Sisingamangaraja",
    "Ratu Simo",
    "Kyai Bagus",
    "Nyi Roro Kidul",
    "Mbah Waris",
    "Kyai Sumeru",
    "Satria Sapu Jagat",
    "Hantu Babi Ngepet",
    "Kyai Pusaka",
    "Dewa Wisnu",
    "Raja Dewa",
    "Kyai Macan",
    "Nyi Jenglot",
    "Mbah Kali",
    "Kyai Pemanahan",
    "Sultan Agung",
    "Kyai Wali",
    "Dewi Saraswati",
    "Mbah Jaran",
    "Ratu Madu",
    "Kyai Karang",
    "Pangeran Soegih",
    "Kyai Putih",
    "Ratu Wulansari",
    "Dewa Ganesa",
    "Kyai Merapi",
    "Sunan Bonang",
    "Kyai Tegal",
    "Nyi Blorong",
    "Kyai Jagad",
    "Ratu Pertiwi"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setKhodamResult(""); // Clear previous result

    // Simulate loading delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * listKhodam.length);
      const randomKhodam = listKhodam[randomIndex];
      setKhodamResult(`Khodam "${value}" hari ini adalah.... ${randomKhodam}`);
      setLoading(false);
    }, 3000); // 3 seconds delay
  };

  

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-50 blur-4xl"></div>
    <div className="relative z-10 p-6 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-90 rounded-lg shadow-lg max-w-lg mx-auto">
      <h1 className="text-xl mb-5 text-gray-900 dark:text-gray-100">Cek Khodam</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Masukkan nama kamu"
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-2 mb-4 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded dark:bg-blue-600 dark:text-gray-100"
        >
          Cek
        </button>
      </form>
      {loading && (
        <div className="mt-4 flex items-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin dark:border-blue-400"></div>
          <p className="ml-3 text-gray-900 dark:text-gray-100">Loading...</p>
        </div>
      )}
      {khodamResult && !loading && (
        <div className="mt-4">
          <p className="text-lg text-gray-900 dark:text-gray-100">{khodamResult}</p>
        </div>
      )}
    </div>
  </div>
  );
}

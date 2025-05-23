'use client'

import Image from 'next/image'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt} from 'react-icons/fa';
// import { FaMusic, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
// import { useState, useRef, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';

export default function Home() {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);
  // const [isMuted, setIsMuted] = useState(true); // Start muted to comply with policies
  // const [userInteracted, setUserInteracted] = useState(false);
  // const audioRef = useRef<HTMLAudioElement>(null);

  // Initialize on mount
  // useEffect(() => {
  //   setIsMounted(true);
  //   return () => setIsMounted(false);
  // }, []);

  // Handle play/pause
  // const togglePlay = () => {
  //   if (!audioRef.current) return;
    
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play()
  //       .then(() => setIsPlaying(true))
  //       .catch(error => {
  //         console.error('Play failed:', error);
  //         setIsPlaying(false);
  //       });
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // Handle mute/unmute
  // const toggleMute = () => {
  //   if (audioRef.current) {
  //     audioRef.current.muted = !isMuted;
  //     setIsMuted(!isMuted);
  //   }
  // };

  // Attempt autoplay when mounted (muted by default)
  // useEffect(() => {
  //   if (!isMounted || !audioRef.current) return;

  //   // Start muted to comply with autoplay policies
  //   audioRef.current.muted = true;
  //   audioRef.current.volume = 0.5;
    
  //   const playPromise = audioRef.current.play();

  //   if (playPromise !== undefined) {
  //     playPromise
  //       .then(() => {
  //         setIsPlaying(true);
  //         console.log('Autoplay started (muted)');
  //       })
  //       .catch(error => {
  //         console.log('Autoplay blocked, will wait for interaction:', error);
  //       });
  //   }
  // }, [isMounted]);

  // if (!isMounted) return null;
  
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      {/* <div onClick={() => setUserInteracted(true)}>
        {!userInteracted && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <button className="bg-amber-500 text-white px-6 py-3 rounded-lg">
              ▶ Click to Enable Music
            </button>
          </div>
        )}
        {userInteracted}
      </div> */}

      {/* Audio Element */}
      {/* <audio
        ref={audioRef}
        loop
        muted={isMuted}
        src="/music/Canon in D.mp3"
      /> */}

      {/* Music Player Button */}
      {/* <button
        onClick={togglePlay}
        className="fixed top-4 right-4 bg-white bg-opacity-80 rounded-full p-3 shadow-lg z-10 hover:bg-opacity-100 transition-all"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <FaMusic className="text-amber-600 text-xl animate-pulse" />
        ) : (
          <FaPause className="text-amber-600 text-xl" />
        )}
      </button> */}

      {/* <button
        onClick={toggleMute}
        className="fixed top-16 right-4 bg-white bg-opacity-80 rounded-full p-3 shadow-lg z-10 hover:bg-opacity-100 transition-all"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <FaVolumeMute className="text-amber-600 text-xl" />
        ) : (
          <FaVolumeUp className="text-amber-600 text-xl" />
        )}
      </button> */}
      

      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl max-w-md w-full p-8 text-center">
        <h1 className="text-3xl font-bold text-amber-800 mb-6">Undangan Pernikahan</h1>
        
        <div className="mb-8 border-t-2 border-b-2 border-amber-200 py-6">
          <p className="text-gray-700 font-medium">Kepada</p>
          <p className="text-xl font-bold text-amber-800 mt-2">Bapak/Ibu/Saudara/i</p>
          <div className="border-b border-amber-300 w-1/2 mx-auto my-4"></div>
          <p className="text-xl font-bold text-amber-800 mt-5">Imanda Eprilia dan Suami</p>
          <div className="border-b border-amber-300 w-1/2 mx-auto my-4"></div>
        </div>

        <div className="mb-8">
          <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src="/images/couples.jpg"
              alt="Zulfi dan Indra"
              fill
              className="object-cover"
              priority
            />
          </div>

          
        <div className="mb-6">
          <p className="text-gray-700 mb-4">Assalamualaikum Wr. Wb.</p>
          <p className="text-gray-700 mb-4">Salam Sejahtera untuk kita semua</p>
        </div>
          
          <p className="text-gray-700 mb-4">
            Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg mb-4 space-y-4 border border-amber-100 text-center">
            {/* Date - Centered */}
            <div className="flex flex-col items-center">
              <FaCalendarAlt className="text-amber-600 text-xl mb-2" />
              <div>
                <p className="font-medium text-amber-800">Hari & Tanggal</p>
                <p className="text-gray-700">Rabu, 28 Mei 2025</p>
              </div>
            </div>
            
            {/* Time - Centered */}
            <div className="flex flex-col items-center">
              <FaClock className="text-amber-600 text-xl mb-2" />
              <div>
                <p className="font-medium text-amber-800">Waktu Acara</p>
                <p className="text-gray-700">12.00 WIB - Selesai</p>
              </div>
            </div>
            
            {/* Location - Centered */}
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-amber-600 text-xl mb-2" />
              <div>
                <p className="font-medium text-amber-800">Lokasi</p>
                <p className="text-gray-700">Swasana Gedung Serbaguna</p>
                <p className="text-gray-600 text-sm">Jl. Raya Manukan Wetan No.68f, Manukan Wetan, Kec. Tandes, Surabaya, Jawa Timur 60185</p>
                <a 
                  href="https://maps.app.goo.gl/ttayDNPDTL5WNxJ28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-800 text-sm inline-flex items-center justify-center mt-1"
                >
                  Lihat di Peta <FiExternalLink className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
        </div>

        <div className="mb-8">
          <p className="text-gray-700 italic">
            Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.
          </p>
          <p className="text-gray-700 mt-4">Terima Kasih</p>
        </div>

        <div className="border-t-2 border-amber-200 pt-6">
          <p className="text-gray-700 font-medium">Hormat kami,</p>
          <p className="text-xl font-bold text-amber-800 mt-2">Zulfi dan Indra</p>
        </div>
      </div>
    </div>
  )
}
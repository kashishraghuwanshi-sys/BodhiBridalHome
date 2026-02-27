// import React from 'react';
// import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/Footer";
// import thikse from "../assets/images/thikse.jpg";
// import phugtal from "../assets/images/phugtal.jpg";
// import bugan from "../assets/images/bugan.jpg";
// import kopan from "../assets/images/kopan.jpg";
// import ki from "../assets/images/ki.jpg";
// import taksang from '../assets/images/taksang.jpg';
// import xuan from "../assets/images/xuan.jpg";
// import taung from "../assets/images/taung.jpg";
// import punakha from "../assets/images/punakha.jpg";
// import wat from "../assets/images/wat.jpg";

// function BuddhistMonasteries() {
//   const monasteries = [
//     {
//       id: 1,
//       image: taksang,
//       description:
//       <>
//       <span className='font-extrabold underline decoration-2'>Buddhism </span> is one of the major religions in the world. With its philosophy founded in northeastern India, the religion is based on <span className='font-extrabold underline decoration-2'>the teachings of Siddhartha Gautama</span>, known as the Buddha. Among many important aspects of Buddhism, Monasticism is one of the most fundamental institutions in Buddhism. The residing <span className='text-red-600'>monks</span> and nuns in the monasteries are more than responsible for preserving and spreading the Buddhist teachings. The monasteries house these monks and nuns as well as educate and guide them so as for them to do so with the other Buddhist followers. Known with many names among the followers of Buddhism depending upon the region, the monasteries are called as <span className='font-extrabold'>Gumba, Gonpa, Viharas, Dzongpa,</span> etc among the followers of various countries. The origins of <span className='font-extrabold underline decoration-2'>Buddhist monasteries</span> are thought to have emerged from the practice of <span className='font-extrabold'>Vassa</span>, the retreat undertaken by the <span className='font-extrabold'>Buddhist monks </span> and nuns of South Asian reason during the rainy season. These vassas later developed into Monasteries which turned into centers of learning, and the philosophical principles of <span className='font-extrabold'>Buddhism</span> were developed and discussed. Here is the list of top 10 most famous and unique <span className='font-extrabold'>Buddhist monasteries</span>all over the world.
//       </>
//     },
//     {
//       id: 2,
//       name: "Phugtal Gompa",
//       location: "India",
//       image: phugtal,
//       description:
//       <>
//       Located in the remote Southeastern Zanskar region, high in the Himalayas, <span className='font-extrabold'>Phugtal Gompa</span> is chiseled out of a cliff face of a gorge which is more or less 3.800 meters high. Presiding over 70 monks, this unique <span className='font-extrabold'>Buddhist monastery </span>was established in the 12th Century by <span className='font-extrabold'>Lama Gangsem Sherap Sampo</span>. An admirable work of engineering, this extraordinary structure has survived hundreds of years despite of being constructed with the raw materials consisting of mud bricks, stones and wood.
//       </>
//     },
//     {
//       id: 3,
//       name: "Bagan",
//       location: "Burma",
//       image: bugan,
//       description:
//       <>
//       <span className='font-extrabold'>Bagan monastery</span>, (also spelled Pagan), is located on the banks of the <span className='font-extrabold'>Ayerwaddy River in Burma</span>. It is home to the largest area of <span className='font-extrabold'>Buddhist temples</span>, pagodas, stupas and ruins in the world. Once the capital of several ancient dynasties of <span className='font-extrabold'>Burmese Kings</span>, it was built with roughly 4.400 temples during the height of the kingdom. After the kingdom fell to the Mongols in 1287 and refusing to pay tribute to <span className='font-extrabold'>Kublai Khan, Bagan</span> declined as a political center in <span className='font-extrabold text-red-600'>Burma</span> but continue to be one of the most reputed place for <span className='font-extrabold'>Buddhist studies</span> and scholarship.
//       </>
//     },
//     {
//       id: 4,
//       name: "Kopan Monastery",
//       location: "Nepal",
//       image: kopan,
//       description:
//       <>
//       A <span className='font-extrabold'>Tibetan Buddhist Monastery</span> located near the massive <span className='font-extrabold text-red-600'>Bouddhanath stupa</span> on the outskirts of <span className='font-extrabold'>Kathmandu, Nepal, Kopan Monastery</span>belongs to the Foundation for Preservation of the <span className='font-extrabold text-red-600'>Mahayana Tradition</span> (FPMT), an international network of Gelupa dharma centers and once served as its headquarters.
//       <br/>
//       <br/>
//       Kopan Monastery was established by the FPMT founders, <span className='font-extrabold'>Lama Thubten Yeshe</span>and Thubten Zopa Rinpoche after buying the property from the then Royal Astrologer of Nepal in 1969. Named after the hill on which it was built, the monastery has become popular among western foreigners for its <span className='font-extabold'>Buddhist teachings</span>. The first of what would become annual month-long (November–December) meditation courses was held in 1971. These courses generally combine traditional Lam Rim teachings with informal discussion, several periods of guided meditation, and a vegetarian diet.
//       </>

//     },
//     {
//       id: 5,
//       name: "Ki Gompa (Monastery)",
//       location: "India",
//       image: ki,
//       description:
//       <>
//       <span className='font-extrabold'>Key Gompa</span>Key Gompa or <span className='font-extrabold'>Ki Monastery </span> is a thousand year <span className='font-extrabold'>Tibetan Monastery</span> located on top of a hill at the height of 41,66 meters from the sea level overlooking the Spiti Valley. The monastery has survived numerous attacks during its long history by Mongols and other armies. Similarly it has also ravaged by fire and earthquakes. It is a religious training center for Lamas and has undergone lots of destructions and restorations resulting in to have a box like construction which looks like a fort.
//       </>
//     },
//     {
//       id: 6,
//       name: "Thikse Monastery",
//       location: "India",
//       image: thikse,
//       description:
//       <>
//       It is a <span className='font-extrabold'>Tibetan Buddhist monastery</span> of the Yellow Hat sect. Thikse Monastery is noted for its resemblance to the <span className='font-extrabold text-red-600'>Potala Palace</span>in Lhasa. Situated at an altitude of 3.600 m in the Indus VAlley, the 12-storeyed complex of the monastery houses several items of <span className='font-extrabold text-red-600'>Buddhist arts</span> and <span className='font-extrabold text-red-600'>Buddhist symbols</span> like Buddha Stupas, <span className='font-extrabold text-red-600'></span> and wall paintings. <span className='font-extrabold'>Maitreya Temple</span> inside the monastery is one of the main points of interests which were installed to commemorate the visit of the <span className='font-extrabold'>14th Dalai Lama </span> to the monastery in 1970.
//       </>
//     },
//     {
//       id: 7,
//       name: "Taksang Monsatery",
//       location: "Bhutan",
//       image: taksang,
//       description:
//       <>
//       <span className='font-extrabold'>Taksang Monastery</span>or<span className='font-extrabold'>Tiger's Nest Monastery</span> is situated on the edge of a 900 meter cliff. The unofficial symbol of <span className='font-extrabold'>Bhutan</span>, the Tiger's nest creates a wonderful view. Located about 2-3 hour uphill hike from the parking lot to the monastery, the monastery is said to be founded by a legendary <span className='font-extrabold'>Guru Rinpoche</span> who flew on this location from <span className='font-extrabold'>Tibet</span> on the back of a tigress. Taktsang is said to be consecrated to tame the Tiger demon. The first monastery was not built until 1682. Though a tragic fire in 1998 destroyed the most of the original buildings, the monastery has been painstakingly restored to its former glory.
//       </>
//     },
//     {
//       id: 8,
//       name: "Xuan Kong Monastery",
//       location: "China",
//       image: xuan,
//       description:
//       <>
//       <span className='font-extrabold'>Xuang Kong monastery</span> or <span className='font-extrabold'>The Hanging Temple</span> can be found in <span className='font-extrabold'>China's Shanxi province</span> .This unique monastery is based on a cliff overlooking Mount Heng near to the cliff. This temple is seen to be supported by thin stilts, at the first glance and looks like a strong gust of wind would bring it tumbling to the ground, but a really good structural engineering is the main reason for its survival despite of several earthquakes over the years. It houses extraordinary halls and rooms which follow the craggy contours of the cliff face. This Marvelously built temple was constructed 1400 years ago and is one of the shining examples of extraordinary architectural merits.
//       </>
//     },
//     {
//       id: 9,
//       name: "Taung Kalat",
//       location: "Burma",
//       image: taung,
//       description:
//       <>
//       One of the most unique aspects of the <span className='font-extrabold'>Buddhist monastery</span>of <span className='font-extrabold'>Tuang Kalat</span> is it is buit at the top of an extict volcano plug, which is also one of the most breathtaking sites in <span className='font-extrabold'>Burma</span>. Visitors must climb 777 steps to the summit to reach the monastery. The visitors can enjoy a panaromic view from the top of Tuang Kalat. From the top, one can see the ancient city and monastery of Bagan and the massive conical peak of Mount Popa, the volcano that actually cause the creation of the volcanic plug.
//       </>
//     },
//     {
//       id: 10,
//       name: "PunaKha Dzong",
//       location: "Bhutan",
//       image: punakha,
//       description:
//       <>
//       Standing on an island between the confluence of the <span className='font-extrabold'>Pho Chhu</span> and <span className='font-extrabold'>Mo chuu</span> rivers, <span className='font-extrabold'>Punakha Dzong</span> is one of the most photogenic of all of Bhutan's ancient dzongs (Monasteries). Punaka serves several purposes, like any other dzongs in Bhutan, including the protection for the region, as the administrative seat for the government as well as the winter home of the monastic body. Connected to the mainland by an arched wooden bridge, the dzong contains many priceless relics from the days when the successive kings reined the kingdom from this valley.

//       </>
//     },
//     {
//       id: 11,
//       name: "Wat Rong Khun",
//       location: "Myanmar",
//       image: wat,
//       description:
//       <>
//       One of the most unique Buddhist monastery in the world,
//       <span className='font-extrabold'>Wat Rong Khun</span> in Chiang Rai, Thalaind is all white and highly ornate structure gilded in mosaic mirros which is done in a distinctly contemporary style. It is the brainchild of the renowned
//       <span className='font-extrabold'>Thai artist Chalermchai Kostpipat</span>. Still under construction, <span className='font-extrabold'>Wat Rong Khun</span> is expected to be fully completed in another 4 or 5 decades.
//       </>
//     }
//   ];

//  return (

//     <div className="min-h-screen bg-white">
//       <Navbar />
//       {/* Header */}
//       <header className="bg-red-400 shadow-sm mb-10">
//         <div className="max-w-7xl mx-auto px-8 py-8 pt-4">
//           <h1 className="text-4xl font-bold text-white text-center">
//             Buddhist Monasteries of the World
//           </h1>
//         </div>
//       </header>
//   {/* All 10 Monasteries */}
//       <main className="max-w-7xl mx-auto px-8 pb-12">
//         {monasteries.map((monastery) => (
//           <div key={monastery.id} className="mb-16">

//             {/* 1st Monastery - Button on top */}
//             {monastery.id === 1 && (
//               <>

//                 <img
//                   src={monastery.image}
//                   alt={monastery.name}
//                   className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover border-[10px] sm:border-[15px] md:border-[20px] border-red-400"
//                 />

//                 <button className="bg-red-400 hover:bg-red-500 text-white text-xl font-bold py-2 px-5 mt-10 transition-colors">
//                  view our beautiful buddhas statues in our gallery
//                 </button>

//                 <p className="text-xl font-semibold text-gray-700 leading-relaxed mt-10">
//                   {monastery.description}
//                 </p>

//               </>
//             )}

//             {/* 2-5 Monasteries - Name (text only), Image, Paragraph */}
//             {monastery.id >= 2 && monastery.id <= 4 && (
//               <>
//                 <h2 className="text-5xl font-bold text-red-400 mb-5">
//                  {monastery.name},{monastery.location}
//                 </h2>

//                 <img
//                   src={monastery.image}
//                   alt={monastery.name}
//                   className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover border-[10px] sm:border-[15px] md:border-[20px] border-red-400"
//                 />

//                 <p className=" text-xl font-semibold text-gray-700 leading-relaxed mt-10">
//                   {monastery.description}
//                 </p>
//               </>

//             )}

//             {/* 5th Monastery - Image, Paragraph*/}
//             {monastery.id === 5 && (
//               <>
//                 <h2 className="text-5xl font-bold text-red-400 mb-5">
//                  {monastery.name},{monastery.location}
//                 </h2>

//                 <img
//                   src={monastery.image}
//                   alt={monastery.name}
//                   className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover border-[10px] sm:border-[15px] md:border-[20px] border-red-400"
//                 />

//                 <p className="text-xl font-semibold text-gray-700 leading-relaxed mt-10">
//                   {monastery.description}
//                 </p>

//                 <button className="bg-red-400 hover:bg-red-500 text-white text-xl font-bold py-2 px-5 mt-10 transition-colors">
//                  Visit our catalog for antique Buddha statues from Burma
//                 </button>
//               </>
//             )}

//             {/* 7-11 Monasteries - Name (text only), Image, Paragraph */}
//             {monastery.id >= 6 && monastery.id <= 11 && (
//               <>
//                 <h2 className="text-5xl font-bold text-red-400 mb-5">
//                     {monastery.name},{monastery.location}
//                 </h2>

//                 <img
//                   src={monastery.image}
//                   alt={monastery.name}
//                   className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover border-[10px] sm:border-[15px] md:border-[20px] border-red-400"
//                 />

//                 <p className="text-xl font-semibold text-gray-700 leading-relaxed mt-10">
//                   {monastery.description}
//                 </p>
//               </>
//             )}

//           </div>
//         ))}
//       </main>

//       {/* Footer */}
//       <footer className="bg-red-400 text-white py-8">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <p className="text-base font-normal">© 2024 Buddhist Monasteries Guide</p>
//         </div>
//       </footer>
//        <Footer />

//     </div>
//   );
// }

// export default BuddhistMonasteries;

// src/pages/BuddhistMonasteries.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import thikse from "../assets/images/thikse.jpg";
import phugtal from "../assets/images/phugtal.jpg";
import bugan from "../assets/images/bugan.jpg";
import kopan from "../assets/images/kopan.jpg";
import ki from "../assets/images/ki.jpg";
import taksang from "../assets/images/taksang.jpg";
import xuan from "../assets/images/xuan.jpg";
import taung from "../assets/images/taung.jpg";
import punakha from "../assets/images/punakha.jpg";
import wat from "../assets/images/wat.jpg";
import thich from "../assets/images/thich.jpg";
import sariputta from "../assets/images/sariputta.jpg";
import mahakashyapa from "../assets/images/mahakashyapa.jpg";
import nagarjuna from "../assets/images/nagarjuna.jpg";
import dalai from "../assets/images/dalai.jpg";
import gautam from "../assets/images/gautam.webp";
import ananda from "../assets/images/ananda.avif";
import bodhidharma from "../assets/images/bodhidharma.jpg";

function BuddhistMonasteries() {
  // Page scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedMonk, setSelectedMonk] = useState(null);

  const monasteries = [
    {
      id: 1,
      image: taksang,
      description: (
        <>
          <span className="font-extrabold underline decoration-2">
            Buddhism{" "}
          </span>{" "}
          is one of the major religions in the world. With its philosophy
          founded in northeastern India, the religion is based on{" "}
          <span className="font-extrabold underline decoration-2">
            the teachings of Siddhartha Gautama
          </span>
          , known as the Buddha. Among many important aspects of Buddhism,
          Monasticism is one of the most fundamental institutions in Buddhism.
          The residing <span className="text-red-400 font-bold">monks</span> and
          nuns in the monasteries are more than responsible for preserving and
          spreading the Buddhist teachings. The monasteries house these monks
          and nuns as well as educate and guide them so as for them to do so
          with the other Buddhist followers. Known with many names among the
          followers of Buddhism depending upon the region, the monasteries are
          called as{" "}
          <span className="font-extrabold">
            Gumba, Gonpa, Viharas, Dzongpa,
          </span>{" "}
          etc among the followers of various countries. The origins of{" "}
          <span className="font-extrabold underline decoration-2">
            Buddhist monasteries
          </span>{" "}
          are thought to have emerged from the practice of{" "}
          <span className="font-extrabold">Vassa</span>, the retreat undertaken
          by the <span className="font-extrabold">Buddhist monks </span> and
          nuns of South Asian reason during the rainy season. These vassas later
          developed into Monasteries which turned into centers of learning, and
          the philosophical principles of{" "}
          <span className="font-extrabold">Buddhism</span> were developed and
          discussed. Here is the list of top 10 most famous and unique{" "}
          <span className="font-extrabold">Buddhist monasteries</span> all over
          the world.
        </>
      ),
    },
    {
      id: 2,
      name: "Phugtal Gompa",
      location: "India",
      image: phugtal,
      description: (
        <>
          Located in the remote Southeastern Zanskar region, high in the
          Himalayas, <span className="font-extrabold">Phugtal Gompa</span> is
          chiseled out of a cliff face of a gorge which is more or less 3.800
          meters high. Presiding over 70 monks, this unique{" "}
          <span className="font-extrabold">Buddhist monastery </span>was
          established in the 12th Century by{" "}
          <span className="font-extrabold">Lama Gangsem Sherap Sampo</span>. An
          admirable work of engineering, this extraordinary structure has
          survived hundreds of years despite of being constructed with the raw
          materials consisting of mud bricks, stones and wood.
        </>
      ),
    },
    {
      id: 3,
      name: "Bagan",
      location: "Burma",
      image: bugan,
      description: (
        <>
          <span className="font-extrabold">Bagan monastery</span>, (also spelled
          Pagan), is located on the banks of the{" "}
          <span className="font-extrabold">Ayerwaddy River in Burma</span>. It
          is home to the largest area of{" "}
          <span className="font-extrabold">Buddhist temples</span>, pagodas,
          stupas and ruins in the world. Once the capital of several ancient
          dynasties of <span className="font-extrabold">Burmese Kings</span>, it
          was built with roughly 4.400 temples during the height of the kingdom.
          After the kingdom fell to the Mongols in 1287 and refusing to pay
          tribute to <span className="font-extrabold">Kublai Khan, Bagan</span>{" "}
          declined as a political center in{" "}
          <span className="font-extrabold text-red-400">Burma</span> but
          continue to be one of the most reputed place for{" "}
          <span className="font-extrabold">Buddhist studies</span> and
          scholarship.
        </>
      ),
    },
    {
      id: 4,
      name: "Kopan Monastery",
      location: "Nepal",
      image: kopan,
      description: (
        <>
          A <span className="font-extrabold">Tibetan Buddhist Monastery</span>{" "}
          located near the massive{" "}
          <span className="font-extrabold text-red-400">Bouddhanath stupa</span>{" "}
          on the outskirts of{" "}
          <span className="font-extrabold">
            Kathmandu, Nepal, Kopan Monastery
          </span>{" "}
          belongs to the Foundation for Preservation of the{" "}
          <span className="font-extrabold text-red-400">
            Mahayana Tradition
          </span>{" "}
          (FPMT), an international network of Gelupa dharma centers and once
          served as its headquarters.
          <br />
          <br />
          Kopan Monastery was established by the FPMT founders,{" "}
          <span className="font-extrabold">Lama Thubten Yeshe</span> and Thubten
          Zopa Rinpoche after buying the property from the then Royal Astrologer
          of Nepal in 1969. Named after the hill on which it was built, the
          monastery has become popular among western foreigners for its{" "}
          <span className="font-extrabold">Buddhist teachings</span>. The first
          of what would become annual month-long (November–December) meditation
          courses was held in 1971.
        </>
      ),
    },
    {
      id: 5,
      name: "Ki Gompa (Monastery)",
      location: "India",
      image: ki,
      description: (
        <>
          <span className="font-extrabold">Key Gompa</span> or{" "}
          <span className="font-extrabold">Ki Monastery </span> is a thousand
          year <span className="font-extrabold">Tibetan Monastery</span> located
          on top of a hill at the height of 4,166 meters from the sea level
          overlooking the Spiti Valley. The monastery has survived numerous
          attacks during its long history by Mongols and other armies. Similarly
          it has also ravaged by fire and earthquakes. It is a religious
          training center for Lamas and has undergone lots of destructions and
          restorations resulting in to have a box like construction which looks
          like a fort.
        </>
      ),
    },
    {
      id: 6,
      name: "Thikse Monastery",
      location: "India",
      image: thikse,
      description: (
        <>
          It is a{" "}
          <span className="font-extrabold">Tibetan Buddhist monastery</span> of
          the Yellow Hat sect. Thikse Monastery is noted for its resemblance to
          the <span className="font-extrabold text-red-400">Potala Palace</span>{" "}
          in Lhasa. Situated at an altitude of 3,600 m in the Indus Valley, the
          12-storeyed complex of the monastery houses several items of{" "}
          <span className="font-extrabold text-red-400">Buddhist arts</span> and{" "}
          <span className="font-extrabold text-red-400">Buddhist symbols</span>{" "}
          like Buddha Stupas and wall paintings.{" "}
          <span className="font-extrabold">Maitreya Temple</span> inside the
          monastery is one of the main points of interests which were installed
          to commemorate the visit of the{" "}
          <span className="font-extrabold">14th Dalai Lama </span> to the
          monastery in 1970.
        </>
      ),
    },
    {
      id: 7,
      name: "Taksang Monastery",
      location: "Bhutan",
      image: taksang,
      description: (
        <>
          <span className="font-extrabold">Taksang Monastery</span> or{" "}
          <span className="font-extrabold">Tiger's Nest Monastery</span> is
          situated on the edge of a 900 meter cliff. The unofficial symbol of{" "}
          <span className="font-extrabold">Bhutan</span>, the Tiger's nest
          creates a wonderful view. Located about 2-3 hour uphill hike from the
          parking lot to the monastery, the monastery is said to be founded by a
          legendary <span className="font-extrabold">Guru Rinpoche</span> who
          flew on this location from{" "}
          <span className="font-extrabold">Tibet</span> on the back of a
          tigress. Taktsang is said to be consecrated to tame the Tiger demon.
          The first monastery was not built until 1682. Though a tragic fire in
          1998 destroyed the most of the original buildings, the monastery has
          been painstakingly restored to its former glory.
        </>
      ),
    },
    {
      id: 8,
      name: "Xuan Kong Monastery",
      location: "China",
      image: xuan,
      description: (
        <>
          <span className="font-extrabold">Xuang Kong monastery</span> or{" "}
          <span className="font-extrabold">The Hanging Temple</span> can be
          found in{" "}
          <span className="font-extrabold">China's Shanxi province</span>. This
          unique monastery is based on a cliff overlooking Mount Heng near to
          the cliff. This temple is seen to be supported by thin stilts, at the
          first glance and looks like a strong gust of wind would bring it
          tumbling to the ground, but a really good structural engineering is
          the main reason for its survival despite of several earthquakes over
          the years. It houses extraordinary halls and rooms which follow the
          craggy contours of the cliff face. This Marvelously built temple was
          constructed 1400 years ago and is one of the shining examples of
          extraordinary architectural merits.
        </>
      ),
    },
    {
      id: 9,
      name: "Taung Kalat",
      location: "Burma",
      image: taung,
      description: (
        <>
          One of the most unique aspects of the{" "}
          <span className="font-extrabold">Buddhist monastery</span> of{" "}
          <span className="font-extrabold">Tuang Kalat</span> is it is built at
          the top of an extinct volcano plug, which is also one of the most
          breathtaking sites in <span className="font-extrabold">Burma</span>.
          Visitors must climb 777 steps to the summit to reach the monastery.
          The visitors can enjoy a panoramic view from the top of Tuang Kalat.
          From the top, one can see the ancient city and monastery of Bagan and
          the massive conical peak of Mount Popa, the volcano that actually
          cause the creation of the volcanic plug.
        </>
      ),
    },
    {
      id: 10,
      name: "Punakha Dzong",
      location: "Bhutan",
      image: punakha,
      description: (
        <>
          Standing on an island between the confluence of the{" "}
          <span className="font-extrabold">Pho Chhu</span> and{" "}
          <span className="font-extrabold">Mo Chhu</span> rivers,{" "}
          <span className="font-extrabold">Punakha Dzong</span> is one of the
          most photogenic of all of Bhutan's ancient dzongs (Monasteries).
          Punaka serves several purposes, like any other dzongs in Bhutan,
          including the protection for the region, as the administrative seat
          for the government as well as the winter home of the monastic body.
          Connected to the mainland by an arched wooden bridge, the dzong
          contains many priceless relics from the days when the successive kings
          reined the kingdom from this valley.
        </>
      ),
    },
    {
      id: 11,
      name: "Wat Rong Khun",
      location: "Thailand",
      image: wat,
      description: (
        <>
          One of the most unique Buddhist monastery in the world,{" "}
          <span className="font-extrabold">Wat Rong Khun</span> in Chiang Rai,
          Thailand is all white and highly ornate structure gilded in mosaic
          mirrors which is done in a distinctly contemporary style. It is the
          brainchild of the renowned{" "}
          <span className="font-extrabold">
            Thai artist Chalermchai Kostpipat
          </span>
          . Still under construction,{" "}
          <span className="font-extrabold">Wat Rong Khun</span> is expected to
          be fully completed in another 4 or 5 decades.
        </>
      ),
    },
  ];

  // Buddhist Monks Data
  const buddhistMonks = [
    {
      id: 1,
      name: "Gautam Buddha",
      originalName: "Siddhartha Gautama",
      title: "The Enlightened One",
      period: "563 BCE - 483 BCE",
      birthPlace: "Lumbini, Nepal",
      image:
        gautam,
      shortDesc: "Founder of Buddhism and the Supreme Buddha",
      history:
        "Siddhartha Gautama was born as a prince in the Shakya clan. At age 29, he left his palace life after witnessing suffering. After 6 years of ascetic practices, he attained enlightenment under the Bodhi tree at Bodh Gaya at age 35.",
      teachings: [
        "Four Noble Truths",
        "Noble Eightfold Path",
        "Middle Way",
        "Dependent Origination",
      ],
      contributions:
        "Founded Buddhism, established the Sangha (monastic community), and taught for 45 years across India.",
      famousQuote: "Peace comes from within. Do not seek it without.",
    },
    {
      id: 2,
      name: "Ananda",
      originalName: "Ananda Thera",
      title: "The Guardian of the Dharma",
      period: "5th Century BCE",
      birthPlace: "Kapilavastu, Nepal",
      image:
        ananda,
      shortDesc: "Buddha's principal attendant and cousin",
      history:
        "Ananda was Buddha's first cousin and became his personal attendant for 25 years. He had an extraordinary memory and could recall every sermon Buddha delivered.",
      teachings: [
        "Memorized all discourses",
        "Advocated for women's ordination",
        "Emphasized compassion",
        "Promoted equality",
      ],
      contributions:
        "Recited all the Suttas at the First Buddhist Council after Buddha's death.",
      famousQuote:
        "The Dharma and Vinaya will be your teacher after I am gone.",
    },
    {
      id: 3,
      name: "Sariputta",
      originalName: "Upatissa",
      title: "Foremost in Wisdom",
      period: "6th Century BCE",
      birthPlace: "Nalaka, Magadha",
      image:
        sariputta,
      shortDesc: "Buddha's right-hand disciple",
      history:
        "Sariputta was originally a wandering ascetic who became Buddha's chief disciple. Buddha declared him 'foremost in wisdom' among all disciples.",
      teachings: [
        "Abhidharma philosophy",
        "Systematic analysis",
        "Meditation techniques",
        "Logical reasoning",
      ],
      contributions:
        "Contributed significantly to the Abhidharma Pitaka and trained many monks.",
      famousQuote: "Cultivate boundless love for all beings.",
    },
    {
      id: 4,
      name: "Mahakashyapa",
      originalName: "Pipphali Kassapa",
      title: "Father of the Sangha",
      period: "6th Century BCE",
      birthPlace: "Magadha, India",
      image:
        mahakashyapa,
      history:
        "Mahakashyapa was a wealthy Brahmin who renounced everything for spiritual pursuit. He became the leader of the Sangha after Buddha's passing.",
      teachings: [
        "Strict monastic discipline",
        "Dhutanga practices",
        "Simplicity",
        "Preservation of teachings",
      ],
      contributions:
        "Organized and presided over the First Buddhist Council at Rajgriha.",
      famousQuote: "He who sees the Dharma sees me.",
    },
    {
      id: 5,
      name: "Nagarjuna",
      originalName: "Nagarjuna Acharya",
      title: "The Second Buddha",
      period: "150 CE - 250 CE",
      birthPlace: "Vidarbha, South India",
      image:
        nagarjuna,
      history:
        "Nagarjuna is widely considered the most important Buddhist philosopher after Buddha himself. He founded the Madhyamaka school.",
      teachings: [
        "Shunyata (Emptiness)",
        "Two Truths doctrine",
        "Madhyamaka philosophy",
        "Dependent origination",
      ],
      contributions: "Wrote Mulamadhyamakakarika and many other treatises.",
      famousQuote: "Everything is real and is not real.",
    },
    {
      id: 6,
      name: "Bodhidharma",
      originalName: "Bodhidharma",
      title: "First Patriarch of Zen",
      period: "5th-6th Century CE",
      birthPlace: "Kanchipuram, India",
      image:
        bodhidharma,
      shortDesc: "Founder of Zen Buddhism",
      history:
        "Bodhidharma was an Indian Buddhist monk who traveled to China and founded Chan (Zen) Buddhism. Legend says he meditated facing a wall for 9 years.",
      teachings: [
        "Direct pointing to mind",
        "Seeing Buddha-nature",
        "Meditation without scriptures",
        "Wall-gazing",
      ],
      contributions:
        "Founded Zen Buddhism and influenced the development of martial arts at Shaolin.",
      famousQuote: "Not thinking about anything is Zen.",
    },
    {
      id: 7,
      name: "Dalai Lama",
      originalName: "Tenzin Gyatso",
      title: "Ocean of Wisdom",
      period: "1935 - Present",
      birthPlace: "Taktser, Tibet",
      image:
        dalai,
      history:
        "Born Lhamo Thondup, he was recognized as the 14th Dalai Lama at age 2. He fled to India in 1959 after the Tibetan uprising.",
      teachings: [
        "Compassion",
        "Non-violence",
        "Religious harmony",
        "Mind training",
      ],
      contributions:
        "Won the Nobel Peace Prize in 1989. Has written over 100 books.",
      famousQuote: "My religion is very simple. My religion is kindness.",
    },
    {
      id: 8,
      name: "Thich Nhat Hanh",
      originalName: "Nguyễn Xuân Bảo",
      title: "Father of Mindfulness",
      period: "1926 - 2022",
      birthPlace: "Thừa Thiên, Vietnam",
      image:
        thich,
      shortDesc: "Vietnamese Zen master",
      history:
        "Thich Nhat Hanh was ordained as a monk at 16. He was exiled from Vietnam for his peace activism. He founded Plum Village in France.",
      teachings: [
        "Mindfulness",
        "Engaged Buddhism",
        "Interbeing",
        "Walking meditation",
      ],
      contributions:
        "Wrote over 100 books. Martin Luther King Jr. nominated him for Nobel Peace Prize.",
      famousQuote: "Walk as if you are kissing the Earth with your feet.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-red-400 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">☸</div>
          <div className="absolute bottom-10 right-10 text-9xl">🪷</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px]">
            ☸
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <span className="inline-block bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              🙏 Explore Sacred Places
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Buddhist Monasteries
              <br />
              <span className="text-white/90">of the World</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover the most sacred and breathtaking Buddhist monasteries
              from around the world. Each monastery holds centuries of spiritual
              wisdom and architectural marvel.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl">
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-white/80 text-sm">Monasteries</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl">
                <p className="text-3xl font-bold text-white">8+</p>
                <p className="text-white/80 text-sm">Countries</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl">
                <p className="text-3xl font-bold text-white">2500+</p>
                <p className="text-white/80 text-sm">Years of History</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ==================== INTRODUCTION SECTION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-red-400 rounded-3xl"></div>
              <img
                src={monasteries[0].image}
                alt="Buddhist Monastery"
                className="relative w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold text-red-400">2500+</p>
                <p className="text-gray-600">Years of Buddhism</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block bg-red-100 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                📿 About Buddhism
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                The Sacred Tradition of{" "}
                <span className="text-red-400">Buddhist Monasteries</span>
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>{monasteries[0].description}</p>
              </div>

              <button className="mt-8 bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <span>🖼️</span>
                View Our Beautiful Buddha Statues Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MONASTERIES GRID ==================== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏛️ Sacred Places
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              World Famous <span className="text-red-400">Monasteries</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore the architectural marvels and spiritual centers that have
              stood for centuries
            </p>
          </div>

          {/* Monasteries */}
          <div className="space-y-20">
            {monasteries.slice(1).map((monastery, index) => (
              <div
                key={monastery.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div
                    className={`absolute -top-4 ${index % 2 === 1 ? "-right-4" : "-left-4"} w-full h-full bg-red-400 rounded-3xl transition-transform duration-300 group-hover:scale-105`}
                  ></div>
                  <img
                    src={monastery.image}
                    alt={monastery.name}
                    className="relative w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  {/* Location Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-red-400 font-semibold flex items-center gap-2">
                      <span>📍</span> {monastery.location}
                    </p>
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-400 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-2xl">
                      {monastery.id - 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {monastery.name}
                    <span className="text-red-400">, {monastery.location}</span>
                  </h3>
                  <div className="text-gray-600 text-lg leading-relaxed">
                    {monastery.description}
                  </div>

                  {/* Special Button for 5th monastery */}
                  {monastery.id === 5 && (
                    <button className="mt-6 bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2">
                      <span>🏺</span>
                      Visit Our Catalog for Antique Buddha Statues
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BUDDHIST MONKS SECTION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🙏 Buddhist Masters
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Great <span className="text-red-400">Buddhist Monks</span> &
              Teachers
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore the lives and teachings of the greatest Buddhist masters
              who have illuminated the path of Dharma for millions across
              centuries.
            </p>
          </div>

          {/* Monks Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {buddhistMonks.map((monk) => (
              <div
                key={monk.id}
                onClick={() => setSelectedMonk(monk)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={monk.image}
                    alt={monk.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/f87171/ffffff?text=${monk.name}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Period Badge */}
                  <span className="absolute top-4 right-4 bg-red-400 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {monk.period.split(" - ")[0]}
                  </span>

                  {/* Name on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {monk.name}
                    </h3>
                    <p className="text-white/80 text-sm">{monk.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {monk.shortDesc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      📍 {monk.birthPlace.split(",")[0]}
                    </span>
                    <button className="text-red-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Quote */}
          <div className="mt-16 bg-red-400 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px]">
                ☸
              </div>
            </div>
            <div className="relative z-10">
              <span className="text-6xl mb-6 block">🪷</span>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium italic mb-6 max-w-3xl mx-auto">
                "Three things cannot be long hidden: the sun, the moon, and the
                truth."
              </blockquote>
              <p className="text-white/80 font-semibold text-lg">
                — Gautam Buddha
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MONK DETAIL MODAL ==================== */}
      {selectedMonk && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedMonk(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 md:h-72">
              <img
                src={selectedMonk.image}
                alt={selectedMonk.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x400/f87171/ffffff?text=${selectedMonk.name}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedMonk(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Name & Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-red-400 text-white text-xs px-3 py-1 rounded-full font-medium mb-3 inline-block">
                  {selectedMonk.period}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {selectedMonk.name}
                </h2>
                <p className="text-white/90 text-lg">{selectedMonk.title}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-red-50 p-4 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">🙏</span>
                  <p className="text-xs text-gray-500">Original Name</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedMonk.originalName}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">📍</span>
                  <p className="text-xs text-gray-500">Birth Place</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedMonk.birthPlace}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">📅</span>
                  <p className="text-xs text-gray-500">Period</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedMonk.period}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">⭐</span>
                  <p className="text-xs text-gray-500">Title</p>
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {selectedMonk.title}
                  </p>
                </div>
              </div>

              {/* History */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-400 text-white rounded-lg flex items-center justify-center text-sm">
                    📜
                  </span>
                  History & Life
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedMonk.history}
                </p>
              </div>

              {/* Teachings */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-400 text-white rounded-lg flex items-center justify-center text-sm">
                    📿
                  </span>
                  Key Teachings
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedMonk.teachings.map((teaching, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                    >
                      <span className="w-6 h-6 bg-red-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{teaching}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contributions */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-400 text-white rounded-lg flex items-center justify-center text-sm">
                    🏆
                  </span>
                  Major Contributions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedMonk.contributions}
                </p>
              </div>

              {/* Famous Quote */}
              <div className="bg-red-400 rounded-2xl p-6 text-white">
                <span className="text-4xl mb-4 block">💬</span>
                <blockquote className="text-lg md:text-xl font-medium italic mb-4">
                  "{selectedMonk.famousQuote}"
                </blockquote>
                <p className="text-white/80 font-semibold text-right">
                  — {selectedMonk.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CTA SECTION ==================== */}
      {/* CTA + Footer Combined */}
      <section className="py-8 bg-red-400 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-white text-lg font-medium mb-4">
            🪷 Explore the sacred places of Buddhism
          </p>
          <div className="flex gap-3 justify-center mb-6">
            <button className="bg-white text-red-400 font-semibold py-2 px-5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
              Visit Gallery
            </button>
            <button className="border-2 border-white text-white font-semibold py-2 px-5 rounded-lg text-sm hover:bg-white hover:text-red-400 transition-colors">
              Contact
            </button>
          </div>
          <p className="text-white/70 text-xs">
            © 2024 Buddhist Monasteries Guide. All rights reserved.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BuddhistMonasteries;

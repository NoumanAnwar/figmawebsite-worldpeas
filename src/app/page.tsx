
import Image from "next/image";


import Pic from '../public/vege1.jpg'

export default function Home() {
return (
<div className="bg-white">
<h1 className="text-6xl mt-10 pl-20 text-lime-900 absolute top-[-10px]">World Peas</h1>

<div>
<p className="mt-10 text-6xl text-center pl-40 pr-40">We're farmers, purveyors, and eaters of organically grown food.</p>

<div className="mt-20 ">

<div className="flex justify-center ">
<button className="bg-lime-900 text-white py-4 px-4 rounded-lg hover:bg-green-700">Browse our shop</button></div>

<Image src={Pic} alt="Pic" width={600} height={300}/>

<h1 className="font-semibold mt-10 text-center">WHAT WE BELIEVE</h1>

<p className="mt-5 text-center">We believe in produce. Tasty produce. Produce like:</p>

<p className="text-center">Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots.
Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini.
 Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.</p> 

<h1 className="font-semibold mt-10 text-center">WHAT ARE WE FORGETTING?</h1>

<p className="mt-5 text-center">Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
     Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins.
      Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit.
       Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries.
        Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. 
        Escarole, which, we swear, we’re vendors of organic produce, 
        but if you asked us to describe what escaroles are...</p>

</div>
</div>
</div>  
);
}

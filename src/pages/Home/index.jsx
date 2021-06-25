import React from "react";
import Hero from "components/Hero";
import HomeCard from "components/HomeCard";
import Home1 from "assets/images/home1.jpg";
import Home2 from "assets/images/home2.jpg";
import Home3 from "assets/images/home3.jpg";
import Home4 from "assets/images/home4.jpg";

const Home = () => (
  <div className="Home">
    <Hero />

    <div className="d-flex justify-content-center py-4 bg-white">
      <div className="margin-container col-md-8 my-bg-tertiary">
        <p className="lead-home text-center">
          Organiser son repas lorsqu’on est diabétique est une tâche fastidieuse.
          Elle nécessite de calculer ses apports en glucides à chaque repas afin
          d’éviter des problèmes tels que l’hypoglycémie ou l’hyperglycémie.
          Nous avons à cœur de la simplifier par le biais de cette application en facilitant
          le calcul total des glucides consommés.
        </p>
      </div>
    </div>

    <div className="margin-container py-4">
      <h3 className="display-6 text-center pb-3">Facilitez-vous la vie !</h3>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="col-lg-4 pb-3">
          <HomeCard
            title="Calculez en toute simplicité"
            description="Oubliez la calculatrice et le papier, calculer rapidement vos apports en glucides et accédez au suivi de votre alimentation."
            description2="Profitez de vos repas sans contrainte !"
          />
        </div>
        <div className="col-lg-4 pb-3">
          <HomeCard
            title="GluciCalc en quelques mots"
            description="Idéal pour les personnes diabétiques souhaitant un suivi de leurs apports en glucides. Des informations détaillées sur plus de 600 000 aliments."
            description2="Une base de données mise à jour quotidiennement !"
          />
        </div>
        <div className="col-lg-4 pb-3">
          <HomeCard
            title="Prochainement..."
            description="Créez et partagez vos recettes pauvres en glucides avec la communauté. Échangez votre historique et vos statistiques avec des professionnels de santé."
            description2="Une application mobile pour encore plus simplicité !"
          />
        </div>
      </div>
    </div>

    <div id="video" className="bg-white py-4 d-flex justify-content-center">
      <h3 className="display-6 text-center">Comment utiliser GluciCalc</h3>
      <div className="col-lg-7 col-md-12">
        <iframe src="https://www.youtube.com/embed/sUWq8ZmFmFY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>

    <div className="margin-container py-4">
      <h3 className="display-6 text-center pb-2">GluciCalc en quelques vues</h3>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="screenshot col-md-6 col-lg-5">
          <img className="screenshot-home" src={Home3} alt="home-page3" />
        </div>
        <div className="screenshot col-md-6 col-lg-5">
          <img className="screenshot-home" src={Home2} alt="home-page4" />
        </div>
        <div className="screenshot col-md-6 col-lg-5">
          <img className="screenshot-home" src={Home1} alt="home-page1" />
        </div>
        <div className="screenshot col-md-6 col-lg-5">
          <img className="screenshot-home" src={Home4} alt="home-page2" />
        </div>
      </div>
    </div>
  </div>
);

export default Home;

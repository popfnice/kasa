// about.jsx
import React, { useState } from 'react';
import '../style/about.scss';
import BannerWithoutH1 from '../../components/BannerWithoutH1';
import Collapse from '../../components/Collapse';

function About() {
    const [isOpenFiabilite, setIsOpenFiabilite] = useState(false);
    const [isOpenRespect, setIsOpenRespect] = useState(false);
    const [isOpenService, setIsOpenService] = useState(false);
    const [isOpenSecurite, setIsOpenSecurite] = useState(false);

    return (
        <div className='about-description'>
            <BannerWithoutH1 />
            <div className="aboutCollapse">
                <Collapse
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
                    isOpen={isOpenFiabilite}
                    onToggle={() => setIsOpenFiabilite(!isOpenFiabilite)}
                />
                <Collapse
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
                    isOpen={isOpenRespect}
                    onToggle={() => setIsOpenRespect(!isOpenRespect)}
                />
                <Collapse
                    title="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question"
                    isOpen={isOpenService}
                    onToggle={() => setIsOpenService(!isOpenService)}
                />
                <Collapse
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    isOpen={isOpenSecurite}
                    onToggle={() => setIsOpenSecurite(!isOpenSecurite)}
                />
            </div>
        </div>
    );
}

export default About;

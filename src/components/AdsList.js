import React, { useContext } from 'react';
import { AdsContext } from '../context/AdsContext';
import AdItem from './AdItem';
import './AdItem.css';

const AdsList = () => {
    const { ads } = useContext(AdsContext);

    return (
        <div className="Ad-list">
            {ads.map(ad => (
                <AdItem key={ad.id} ad={ad} />
            ))}
        </div>
    );
};

export default AdsList;
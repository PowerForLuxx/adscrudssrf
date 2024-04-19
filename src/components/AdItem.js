import React, { useState, useContext } from 'react';
import { AdsContext } from '../context/AdsContext';
import './AdItem.css';

const AdItem = ({ ad }) => {
    const { dispatch } = useContext(AdsContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(ad.title);
    const [editDescription, setEditDescription] = useState(ad.description);

    const handleRemove = () => {
        dispatch({ type: 'REMOVE_AD', payload: ad.id });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        dispatch({ type: 'EDIT_AD', payload: { id: ad.id, title: editTitle, description: editDescription } });
        setIsEditing(false);
    };

    return (
        <div className="Ad-item">
            {isEditing ? (
                <div className="ad-edit-form">
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Сохранить</button>
                </div>
            ) : (
                <>
              <h4><p>Заголовок</p></h4>
                    <p>{ad.title}</p>
                    <h4><p>Описание:</p></h4>
                    <p>{ad.description}</p>
                    <button onClick={handleRemove}>Удалить</button>{" "}
                    <button onClick={handleEdit}>Редактировать</button>
                </>
            )}
        </div>
    );
};

export default AdItem;
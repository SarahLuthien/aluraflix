import React, { createContext, useState, useEffect } from 'react';  

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch("https://json-server-vercel-git-main-sara-roberta-pires-s-projects.vercel.app/videos")
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            setVideos(dados.videos || []);
            setCategorias(dados.categorias || [])
        })
        .catch(err => console.error(err));
        
        }, []);
       

    const contextValue = { videos, categorias };

    return (
        <VideosContext.Provider value={contextValue}>
            {children}
        </VideosContext.Provider>
    );
};
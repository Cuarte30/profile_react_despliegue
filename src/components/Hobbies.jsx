import React from 'react';

function Hobbies() {
    // Datos ficticios de hobbies
    const hobbies = [
        {
            id: 1,
            nombre: 'Estudiante',
            descripcion: 'Siempre esta bueno seguir aprendiendo',
        },
        {
            id: 2,
            nombre: 'Jugador de futbol',
            descripcion: 'Juego con amigos',
        },
        {
            id: 3,
            nombre: 'Agricultura',
            descripcion: 'Asesoro a productores',
        },
        {
            id: 4,
            nombre: 'Jardinería',
            descripcion: 'Cultivar plantas y flores en mi jardín.',
        },
    ];

    return (
        <div className="container">
            <h2>Mis Hobbies</h2>
            <ul className="list-group">
                {hobbies.map((hobby) => (
                    <li key={hobby.id} className="list-group-item">
                        <h3>{hobby.nombre}</h3>
                        <p>{hobby.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;


'use client';

import { useState, useEffect } from 'react';

const nomes = [
    "Maria", "Ana", "José", "João", "Antônio", "Francisco", "Carlos",
    "Paulo", "Pedro", "Lucas", "Miguel", "Arthur", "Davi", "Gabriel",
    "Mateus", "Marcelo", "Rafael", "Luís", "Luiz", "Maria Eduarda",
    "Alice", "Júlia", "Laura", "Sophia", "Valentina", "Helena",
    "Maria Clara", "Maria Júlia", "Manuela", "Heitor", "Enzo Gabriel"
];

const messageTemplate = " acabou de se tornar um(a) Estudante PRO!";

export function SocialProofNotification() {
    const [currentName, setCurrentName] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const displayDuration = 7000;
        const hideDuration = 10000;
        const initialDelay = 3000;
        const totalCycle = displayDuration + hideDuration;

        const getRandomName = () => {
            return nomes[Math.floor(Math.random() * nomes.length)];
        };

        const showNotification = () => {
            setCurrentName(getRandomName());
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
            }, displayDuration);
        };

        const startLoop = () => {
            showNotification();
            const intervalId = setInterval(showNotification, totalCycle);
            return () => clearInterval(intervalId);
        };
        
        const startTimeout = setTimeout(startLoop, initialDelay);

        return () => {
            clearTimeout(startTimeout);
        };
    }, []);

    return (
        <div id="social-proof" className={`social-proof-notification ${isVisible ? 'show' : ''}`}>
            {currentName && (
                <p>
                    <strong>{currentName}</strong>{messageTemplate}
                </p>
            )}
        </div>
    );
}

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function WelcomeMsg() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>Welcome!</i>', 'Feel free to look around.', '<i>Welcome!</i>', 'Feel free to look around.'],
            typeSpeed: 70,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="mx-auto">
            <span className={"text-xl dark:text-white"} ref={el} />
        </div>
    );
}
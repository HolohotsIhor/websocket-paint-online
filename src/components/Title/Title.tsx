import { memo } from 'react';

interface TitleProps {
    hooks: {
        firstHook: string;
        secondHook: string;
    },
    resetCount: () => void;
}

export const Title = ({ hooks, resetCount }: TitleProps) => {
    console.log('Title render');
    const { firstHook, secondHook } = hooks;

    return (
        <>
            <h1>Hello it's {`${firstHook} and ${secondHook}`}</h1>
            <button onClick={resetCount}>Reset</button>
        </>
    );
}

export const MemoizedTitle = memo(Title)

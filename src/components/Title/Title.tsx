import { memo } from 'react';
import { useToggle } from '../../shared/hooks/useToggle';

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
    const { value: isOpen, toggle } = useToggle()

    return (
        <>
            <h1>Hello it's {`${firstHook} and ${secondHook}`}</h1>
            <button onClick={resetCount}>Reset</button>
            <button onClick={toggle}>{ isOpen ? 'Close' : 'Open'}</button>
        </>
    );
}

export const MemoizedTitle = memo(Title)

'use client';
import React, { createContext, useState } from 'react';
import MessageBubble from './MessageBubble';
import InputArea from './InputArea';
interface UserContextType {
    currentUser: null,
    setCurrentUser: React.Dispatch<React.SetStateAction<null>>
}

interface Messages {
    isYou: boolean,
    message: string,
    time: Date
}
export const CurrentUserContext = createContext<{
    currentUser: any[] | null,
    setCurrentUser: React.Dispatch<React.SetStateAction<any[] | null>> | null
}>({
    currentUser: null,
    setCurrentUser: null
});
export const SampleResponses = createContext<{
    sampleResponses: any[] | null,
    setSampleResponses: React.Dispatch<React.SetStateAction<any[] | null>> | null
}>({
    sampleResponses: null,
    setSampleResponses: null
});
const LayoutContext = () => {
    var now = new Date();

    var tenMinutes = new Date(now.getTime() - 10 * 60 * 1000);
    var fourMinutes = new Date(now.getTime() - 4 * 60 * 1000);

    const [currentUser, setCurrentUser] = useState<Messages[] | null>([{
        isYou: false,
        message: 'Selam',
        time: tenMinutes
    }, {
        isYou: true,
        message: 'Merhaba',
        time: fourMinutes
    }]);

    const [sampleResponses, setSampleResponses] = useState<any>(["Evet katılıyorum", "Hiç bu açıdan düşümemiştim", "Sen de haklısın", "Bence de", "Farklı bir bakış açısından da düşünebilirsin"
    ]);
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <SampleResponses.Provider value={{ sampleResponses, setSampleResponses }}>
                <div className="max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="p-8 w-full">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Sohbet Alanı</div>
                            <div className='overflow-auto'>
                                <MessageBubble />
                            </div>
                            <div className='mt-2 rounded-lg flex justify-between w-full'>
                                <InputArea  />
                            </div>
                        </div>
                    </div>
                </div>
            </SampleResponses.Provider>
        </CurrentUserContext.Provider>
    );
};

export default LayoutContext;
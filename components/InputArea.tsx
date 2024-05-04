'use client'

import { useContext, useState } from "react";
import { CurrentUserContext } from "./LayoutContext";
import { SampleResponses } from "./LayoutContext";

const InputArea = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const { sampleResponses, setSampleResponses } = useContext(SampleResponses);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState<string|null>(null);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsTyping(true);

        setCurrentUser?.((prevCurrentUser: any[] | null) => {
            if (prevCurrentUser !== null) {
                return [...prevCurrentUser, { isYou: true, message: inputValue, time: new Date() }, { isYou: false, message: "Yazıyor...", time: new Date() }];
            } else {
                return [{ isYou: true, message: inputValue, time: new Date() }];
            }
        });
        setTimeout(() => {
            if (sampleResponses !== null) {
                setCurrentUser?.((prevCurrentUser: any[] | null) => {
                    if (prevCurrentUser !== null && prevCurrentUser.length > 0) {
                        const updatedMessages = [...prevCurrentUser];
                        const lastIndex = updatedMessages.length - 1;
                        updatedMessages[lastIndex] = {
                            ...updatedMessages[lastIndex],
                            message: sampleResponses[Math.floor(Math.random() * sampleResponses.length)], // Yeni mesajı ekle
                            time: new Date()
                        };
                        return updatedMessages;
                    } else {
                        return [{ isYou: false, message: sampleResponses[Math.floor(Math.random() * sampleResponses.length)], time: new Date() }];
                    }
                });
            }
            setIsTyping(false);
        }, 2000);

        setInputValue("");
    }
    return (
        <form onSubmit={handleSubmit} className="flex w-full ">
            <input
                type="text"
                value={inputValue || ''}
                onChange={handleInputChange}
                disabled={isTyping}
                className="mr-2 px-3 grow py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                placeholder={isTyping ? "Cevap Bekleniyor..." : "Mesajınızı giriniz..."}
            />
            <button type="submit" disabled={isTyping || !inputValue} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Gönder
            </button>
        </form>
    );
}

export default InputArea;
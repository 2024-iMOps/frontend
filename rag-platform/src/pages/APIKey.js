import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './APIKey.css';

const APIKey = ({ setHasAPIKey }) => {
    const [openaiApiKey, setOpenaiApiKey] = useState('');
	const [anthropicApiKey, setAnthropicApiKey] = useState('');
    const navigate = useNavigate();

    const handleSaveOpenAIKey = () => {
        console.log("Saving OpenAI API Key:", openaiApiKey);
    };

    const handleSaveAnthropicKey = () => {
        console.log("Saving Anthropic API Key:", anthropicApiKey);
    };

    const handleNext = () => {
        if (openaiApiKey && anthropicApiKey) {
            setHasAPIKey(true);
            navigate('/');
        } else {
            alert('API 키를 모두 입력해주세요.');
        }
    };

    return (
        <div className="api-keys">
            <h1 className="text-2xl font-bold mb-4">API Keys</h1>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                    <input 
                        type="text"
                        placeholder="Enter your OpenAI API key"
                        value={openaiApiKey} 
                        onChange={(e) => setOpenaiApiKey(e.target.value)}
                        className="flex-grow p-2 border rounded-l"
                    />
                    <button
                        onClick={handleSaveOpenAIKey}
                        className="bg-blue-500 text-white p-2 rounded-r"
                    >
                        Save
                    </button>
                </div>

                <div className="flex items-center">
                    <input 
                        type="text"
                        placeholder="Enter your Anthropic API key"
                        value={anthropicApiKey} 
                        onChange={(e) => setAnthropicApiKey(e.target.value)}
                        className="flex-grow p-2 border rounded-l"
                    />
                    <button
                        onClick={handleSaveAnthropicKey}
                        className="bg-blue-500 text-white p-2 rounded-r"
                    >
                        Save
                    </button>
                </div>
            </div>
            <button
                onClick={handleNext}
                className="bg-green-500 text-white p-2 rounded mt-4 w-full"
            >
                Next
            </button>
        </div>
    );
};

export default APIKey;
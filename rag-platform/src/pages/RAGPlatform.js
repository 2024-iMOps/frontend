import React, { useState } from 'react';
import { Slider } from '@mui/material';
import './RAGPlatform.css';

const RAGPlatform = () => {
    const [chunkingMethod, setChunkingMethod] = useState('');
    const [chunkSize, setChunkSize] = useState(256);
    const [chunkOverlap, setChunkOverlap] = useState(32);
    const [temperature, setTemperature] = useState(0.1);
    const [maxTokens, setMaxTokens] = useState(2048);
    const [topP, setTopP] = useState(1.00);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0.00);
    const [presencePenalty, setPresencePenalty] = useState(0.00);
    const [embeddingModel, setEmbeddingModel] = useState('');
    const [llmModel, setLLMModel] = useState('');
    const [prompt, setPrompt] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSaveChunking = () => {
        console.log('Saving chunking parameters');
    };

    const handleSaveParameter = () => {
        console.log('Saving model parameters');
    };

    const handleSavePrompt = () => {
        console.log('Saving prompt');
    };

    const handleRun = () => {
        console.log('Running the model');
        setAnswer('This is where the model output would appear.');
    };

    const handleCheckRetrieve = () => {
        console.log('Checking retrieval');
    };

    return (
        <div className="rag-platform">      
            <div className="horizontal-sections">
                {/* Text Chunking */}
                <div className="section text-chunking">
                    <h2 className="text-lg font-bold mb-2">
                        1. Text Chunking
                    </h2>
                    <select 
                        value={chunkingMethod}
                        onChange={(e) => setChunkingMethod(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                        defaultValue=""
                    >
                        <option value="" disabled hidden>Choose a chunking method</option>
                        <option value="split">split by character</option>
                        <option value="recursively_split">recursively split by character</option>
                    </select>
                    <div className="slider-container">
                        <label className="slider-label">Chunk Size: {chunkSize}</label>
                        <div className="slider-with-labels">
                            <span className="slider-min-label">0</span>
                            <Slider 
                                value={chunkSize} 
                                onChange={(e, newValue) => setChunkSize(newValue)}
                                min={0}
                                max={1024}
                            />
                            <span className="slider-max-label">1024</span>
                        </div>
                    </div>
                    <div className="slider-container">
                        <label className="slider-label">Chunk Overlap: {chunkOverlap}</label>
                        <div className="slider-with-labels">
                            <span className="slider-min-label">0</span>
                            <Slider 
                                value={chunkOverlap} 
                                onChange={(e, newValue) => setChunkOverlap(newValue)}
                                min={0}
                                max={256}
                            />
                            <span className="slider-max-label">256</span>
                        </div>
                    </div>
                    <button onClick={handleSaveChunking} className="bg-blue-500 text-white p-2 rounded w-full mt-4">Save Chunking</button>
                </div>

                {/* Model Configuration */}
                <div className="section model-config">
                    <h2 className="text-lg font-bold mb-2">2. Model Configuration</h2>
                    <div style={{flex: 1}}>
                        <div className="slider-container">
                            <label className="slider-label">Temperature: {temperature.toFixed(2)}</label>
                            <Slider 
                                value={temperature} 
                                onChange={(e, newValue) => setTemperature(newValue)}
                                min={0}
                                max={2}
                                step={0.01}
                            />
                        </div>
                        <div className="slider-container">
                            <label className="slider-label">Max Tokens: {maxTokens}</label>
                            <Slider 
                                value={maxTokens} 
                                onChange={(e, newValue) => setMaxTokens(newValue)}
                                min={0}
                                max={4096}
                            />
                        </div>
                        <div className="slider-container">
                            <label className="slider-label">Top P: {topP.toFixed(2)}</label>
                            <Slider 
                                value={topP} 
                                onChange={(e, newValue) => setTopP(newValue)}
                                min={0}
                                max={1}
                                step={0.01}
                            />
                        </div>
                        <div className="slider-container">
                            <label className="slider-label">Frequency Penalty: {frequencyPenalty.toFixed(2)}</label>
                            <Slider 
                                value={frequencyPenalty} 
                                onChange={(e, newValue) => setFrequencyPenalty(newValue)}
                                min={0}
                                max={2}
                                step={0.01}
                            />
                        </div>
                        <div className="slider-container">
                            <label className="slider-label">Presence Penalty: {presencePenalty.toFixed(2)}</label>
                            <Slider 
                                value={presencePenalty} 
                                onChange={(e, newValue) => setPresencePenalty(newValue)}
                                min={0}
                                max={2}
                                step={0.01}
                            />
                        </div>
                    </div>
                    <button onClick={handleSaveParameter} className="bg-blue-500 text-white p-2 rounded w-full mt-4">Save Parameter</button>
                </div>

                {/* Embedding & LLM Model */}
                <div className="section embedding-llm">
                    <h2 className="text-lg font-bold mb-2">3. Embedding & LLM Model</h2>
                    <select 
                        value={embeddingModel}
                        onChange={(e) => setEmbeddingModel(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    >
                        <option value="">Choose Embedding Model</option>
                        {/* Add embedding model options here */}
                    </select>
                    <select 
                        value={llmModel}
                        onChange={(e) => setLLMModel(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    >
                        <option value="">Choose LLM Model</option>
                        {/* Add LLM model options here */}
                    </select>
                    <button onClick={handleSaveParameter} className="bg-blue-500 text-white p-2 rounded w-full mt-4">Save Parameter</button>
                </div>
            </div>

            <div className="prompt-result-container">
                {/* Prompt */}
                <div className="section prompt-section">
                    <h2 className="text-lg font-bold mb-2">4. Prompt</h2>
                    <textarea 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Input your prompt"
                        className="w-full p-2 border rounded mb-2"
                        style={{minHeight: '200px'}}
                    />
                    <button onClick={handleSavePrompt} className="bg-blue-500 text-white p-2 rounded w-full">Save Prompt</button>
                </div>

                {/* Result */}
                <div className="section result-section">
                    <h2 className="text-lg font-bold mb-2">5. Result</h2>
                    <textarea 
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Input your question"
                        className="w-full p-2 border rounded mb-2"
                        style={{minHeight: '200px'}}
                    />
                    <button onClick={handleRun} className="bg-blue-500 text-white p-2 rounded w-full mb-2">Run (save metadata)</button>
                    <textarea 
                        value={answer}
                        readOnly
                        placeholder="Answer will appear here"
                        className="w-full p-2 border rounded mb-2"
                        style={{minHeight: '200px'}}
                    />
                    <button onClick={handleCheckRetrieve} className="bg-blue-500 text-white p-2 rounded w-full">Check retrieve</button>
                </div>
            </div>
        </div>
    );
};

export default RAGPlatform;
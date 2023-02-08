import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 API is a cutting-edge language generation tool that provides powerful capabilities for text generation, chatbots, language translation, text classification, summarization, question-answering, and content creation. Integrate this API into your applications and tools to enhance their functionality and take your projects to the next level." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbots are AI-powered programs that mimic human conversation and provide customer service, information and automate tasks. Improve efficiency and customer experience by incorporating chatbots." />
      <Feature title="Knowledgebase" text="A knowledge base is a centralized collection of information, data and resources used as a reference for individuals or organizations to improve efficiency and support." />
      <Feature title="Education" text="GPT-3 has the potential to revolutionize education by providing personalized learning experiences and streamlining traditional teaching methods." />
    </div>
  </div>
);

export default WhatGPT3;

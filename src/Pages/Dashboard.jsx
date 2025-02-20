import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

// Sample Data
const skillsData = [
    { date: '2024-07-26', skill: 250 }, { date: '2024-07-27', skill: 300 }, { date: '2024-07-28', skill: 280 },
    { date: '2024-07-29', skill: 350 }, { date: '2024-07-30', skill: 400 }, { date: '2024-07-31', skill: 380 },
    { date: '2024-08-01', skill: 420 }, { date: '2024-08-02', skill: 450 }, { date: '2024-08-03', skill: 400 },
    { date: '2024-08-04', skill: 480 }, { date: '2024-08-05', skill: 500 }, { date: '2024-08-06', skill: 450 },
];

const funnelData = [
    { label: 'JavaScript', value: 4562 }, { label: 'Python', value: 2562 },
    { label: 'React', value: 1262 }, { label: 'Java', value: 1000 },
];

const categoryData = [
    { label: 'JavaScript', value: 25 }, { label: 'Python', value: 35 }, { label: 'Java', value: 40 },
];

const Card = ({ title, value, percentageChange }) => {
    const changeColor = percentageChange.startsWith('-') ? 'text-red-500' : 'text-green-500';
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-sm ${changeColor}`}>{percentageChange}</p>
        </div>
    );
};

const SkillChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [{ label: 'Skill Developed', data: data.map(item => item.skill), borderColor: 'blue', fill: false }],
    };
    
    return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
};

const FunnelChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [{ data: data.map(item => item.value), backgroundColor: ['#007bff', '#0056b3', '#003380', '#001a4d'] }],
    };
    return <Bar data={chartData} options={{ indexAxis: 'y', responsive: true, maintainAspectRatio: false }} />;
};

const CategoryChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [{ data: data.map(item => item.value), backgroundColor: ['red', 'green', 'blue'] }],
    };
    return <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
};

const Dashboard = () => {
    const [skill, setSkill] = useState(skillsData);
    const [funnel, setFunnel] = useState(funnelData);
    const [category, setCategory] = useState(categoryData);
    const [languages, setLanguages] = useState({
        Python: 4562, JavaScript: 2562, Java: 2262, C: 2100
    });

    useEffect(() => {
        // Fetch data if needed
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="row-span-2 bg-white rounded-lg shadow-md p-4">
                    <SkillChart data={skill} />
                </div>
                <div>
                    <h4 className="text-center pb-4 text-2xl text-slate-700 underline font-bold">Most Used Programming Languages</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(languages).map(([lang, value]) => (
                            <Card key={lang} title={lang} value={value} percentageChange="+5%" />
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <FunnelChart data={funnel} />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <CategoryChart data={category} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
const Dashboard = ({ children }) => {
    return (
        <div className="dashboard">
            <h1 className="dashboard-title">
                🇱🇰 Sri Lanka Weather Analytics Dashboard
            </h1>

            <p className="dashboard-subtitle">
                Visual analysis of historical climate patterns (2010 – 2024)
            </p>

            <div className="grid">
                {children}
            </div>
        </div>
    );
};

export default Dashboard;

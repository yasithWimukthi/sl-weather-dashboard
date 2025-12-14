const Card = ({ title, icon, children }) => {
    return (
        <div className="card">
            <div className="card-header">
                {icon}
                <h3>{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default Card;

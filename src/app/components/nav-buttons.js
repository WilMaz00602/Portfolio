import "../resources/style/nav-buttons.scss";

export default function NavButtons({ tabs, activeTab, setActiveTab }) {
    return (
        <div id="nav-buttons">
            {tabs.map(tab => (
                <button
                    key={tab.key}
                    className={activeTab === tab.key ? "active" : ""}
                    onClick={() => setActiveTab(tab.key)}
                >
                {tab.key.charAt(0).toUpperCase() + tab.key.slice(1)}
                </button>
            ))}
        </div>
    )
}
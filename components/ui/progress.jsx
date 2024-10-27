// In /C:/Users/Siddhesh/Downloads/ai-finance-tracking-main/components/ui/progress.jsx
export function Progress({ value, className }) {
    return (
        <div className={`progress-bar ${className}`}>
            <div className="progress-bar-fill" style={{ width: `${value}%` }} />
        </div>
    );
}

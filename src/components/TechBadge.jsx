export default function TechBadge({ icon: Icon, label, color }) {
    return (
        <span
            title={label}
            className="flex items-center gap-2 text-sm font-semibold px-2 py-1 rounded text-white"
            style={{ backgroundColor: color }}
        >
      <Icon className="text-base" />
            {label}
    </span>
    );
}
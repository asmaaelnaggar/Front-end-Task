export default function FooterColumn({ header, items }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-semibold text-lg">{header}</h3>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <span key={index} className="gray-color text-sm hover:text-gray-900 cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

{/* Container: bg-white rounded-lg p-4 mb-3 shadow-md = basic card styling */}
{/* hover:shadow-lg transition-all duration-200 = hover effects */}
{/* border-l-4 relative cursor-pointer = left border, positioning context, clickable */}
{/* Template literal handles highlighted state conditionally */}
<article className={`
  bg-white rounded-lg p-4 mb-3 shadow-md
  hover:shadow-lg transition-all duration-200
  border-l-4 relative cursor-pointer
  ${highlighted ? 'border-l-orange-500 bg-orange-50' : 'border-l-blue-500'}
`}>
  {/* Header: flex justify-between items-center mb-2 = horizontal layout with space between */}
  <div className="flex justify-between items-center mb-2">
    {showCategory && (
      {/* Category badge: inline-block for inline positioning, bg/text colors, padding, rounded corners, small text */}
      <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold uppercase">
        {category}
      </span>
    )}
    {/* Date: text-sm text-gray-500 = small gray text */}
    <time className="text-sm text-gray-500" dateTime={date}>
      {formattedDate}
    </time>
  </div>
  
  {/* Body: space-y-2 = vertical spacing between children */}
  <div className="space-y-2">
    {/* Description: text-base font-medium text-gray-900 = normal size, medium weight, dark text */}
    <h3 className="text-base font-medium text-gray-900">{description}</h3>
    
    {/* Amount: text-lg font-bold text-green-600 = large, bold, green text */}
    <p className="text-lg font-bold text-green-600">{formattedAmount}</p>

    {onDelete && (
      {/* Delete button: absolute positioning, red background with hover, white text, circular, centered content */}
      {/* focus states for accessibility */}
      <button
        className="
          absolute top-2 right-2
          bg-red-500 hover:bg-red-600
          text-white border-0 rounded-full
          w-6 h-6 cursor-pointer text-base
          flex items-center justify-center
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-red-400
        "
        onClick={handleDelete}
        aria-label="Delete expense"
      >
        ×
      </button>
    )}
  </div>
</article>
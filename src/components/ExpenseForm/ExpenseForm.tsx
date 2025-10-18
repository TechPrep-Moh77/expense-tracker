/* Container Styles */
.expense-form {
  background: white;           /* → bg-white */
  border-radius: 8px;         /* → rounded-lg */
  padding: 24px;              /* → p-6 */
  margin-bottom: 32px;        /* → mb-8 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* → shadow-sm */
  border: 1px solid #E5E7EB;  /* → border border-gray-200 */
}
<article className= 'bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200 md:p-6 md:mb-8 p-3 mb-5'

<h3 className= 'text-xl font-bold text-gray-900 mb-5'}></h3>

}>







</article>

/* Form Title */
.expense-form h3 {
  font-size: 20px;            /* → text-xl */
  font-weight: bold;          /* → font-bold */
  color: #1F2937;             /* → text-gray-900 */
  margin: 0 0 20px 0;         /* → mb-5 */
}

/* Form Groups */
.form-group {
  margin-bottom: 16px;        /* → mb-4 */
}

.form-group label {
  display: block;             /* → block */
  font-size: 14px;           /* → text-sm */
  font-weight: 500;          /* → font-medium */
  color: #374151;            /* → text-gray-700 */
  margin-bottom: 6px;        /* → mb-1.5 */
}

/* Input and Select Styles */
.form-group input,
.form-group select {
  width: 100%;               /* → w-full */
  padding: 10px 12px;        /* → px-3 py-2.5 */
  border: 1px solid #D1D5DB; /* → border border-gray-300 */
  border-radius: 6px;        /* → rounded-md */
  font-size: 14px;           /* → text-sm */
  background: white;         /* → bg-white */
  color: #374151;            /* → text-gray-700 */
  transition: border-color 0.2s, box-shadow 0.2s; /* → transition-colors duration-200 */
  box-sizing: border-box;    /* → (built into Tailwind) */
}

/* Interactive States */
.form-group input:hover,
.form-group select:hover {
  border-color: #4F46E5;     /* → hover:border-blue-500 */
}

.form-group input:focus,
.form-group select:focus {
  outline: none;             /* → focus:outline-none */
  border-color: #4F46E5;     /* → focus:ring-2 focus:ring-blue-500 */
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); /* → focus:border-transparent */
}

.form-group input::placeholder {
  color: #9CA3AF;            /* → placeholder-gray-400 */
}

/* Form Actions Container */
.form-actions {
  display: flex;             /* → flex */
  gap: 12px;                 /* → gap-3 */
  margin-top: 24px;          /* → mt-6 */
}

/* Base Button Styles */
.btn {
  padding: 10px 16px;        /* → px-4 py-2.5 */
  border-radius: 6px;        /* → rounded-md */
  font-size: 14px;           /* → text-sm */
  font-weight: 500;          /* → font-medium */
  cursor: pointer;           /* → cursor-pointer */
  transition: all 0.2s;      /* → transition-all duration-200 */
  border: 1px solid;         /* → border */
  display: inline-flex;      /* → inline-flex */
  align-items: center;       /* → items-center */
  justify-content: center;   /* → justify-center */
  min-width: 80px;           /* → min-w-20 */
}

/* Primary Button */
.btn-primary {
  background: #4F46E5;       /* → bg-blue-500 */
  color: white;              /* → text-white */
  border-color: #4F46E5;     /* → border-blue-500 */
}

.btn-primary:hover {
  background: #4338CA;       /* → hover:bg-blue-600 */
  border-color: #4338CA;     /* → hover:border-blue-600 */
  transform: translateY(-1px); /* → hover:-translate-y-0.5 */
}

/* Secondary Button */
.btn-secondary {
  background: white;         /* → bg-white */
  color: #374151;            /* → text-gray-700 */
  border-color: #D1D5DB;     /* → border-gray-300 */
}

.btn-secondary:hover {
  background: #F9FAFB;       /* → hover:bg-gray-50 */
  border-color: #9CA3AF;     /* → hover:border-gray-400 */
}

/* Disabled Button States */
.btn:disabled {
  opacity: 0.5;              /* → disabled:opacity-50 */
  cursor: not-allowed;       /* → disabled:cursor-not-allowed */
  transform: none;           /* → disabled:transform-none */
}

.btn:disabled:hover {
  transform: none;           /* → disabled:hover:transform-none */
}

/* Form Validation Styles */
.form-group.error input,
.form-group.error select {
  border-color: #EF4444;     /* → border-red-500 */
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1); /* → ring-2 ring-red-500 ring-opacity-10 */
}

.form-error {
  color: #EF4444;            /* → text-red-500 */
  font-size: 12px;           /* → text-xs */
  margin-top: 4px;           /* → mt-1 */
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .expense-form {
    padding: 16px;           /* → p-4 md:p-6 */
    margin-bottom: 20px;     /* → mb-5 md:mb-8 */
  }
  
  .form-actions {
    flex-direction: column;  /* → flex-col md:flex-row */
  }
  
  .btn {
    width: 100%;             /* → w-full md:w-auto */
  }
}

@media (max-width: 480px) {
  .expense-form {
    padding: 12px;           /* → p-3 md:p-6 */
  }
  
  .form-group input,
  .form-group select {
    padding: 12px;           /* → p-3 md:px-3 md:py-2.5 */
    font-size: 16px;         /* → text-base md:text-sm (prevents iOS zoom) */
  }
}
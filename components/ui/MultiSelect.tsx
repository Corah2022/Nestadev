'use client'
import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { useThemeToggler } from '@/stores/useThemeToggler';



interface MultiSelectProps {
    label: string;
    values: string[];
    onChange: (values: string[]) => void;
    options: string[];
    description?: string;
    error?: string;
    disabled?: boolean;
}

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
    label,
    values,
    onChange,
    options,
    description,
    error,
    disabled
}) => {
    const selectOptions = options.map(opt => ({
        value: opt,
        label: opt,
        disabled: disabled ? true : false
    }));

    const selectedValues = selectOptions.filter(opt =>
        values?.includes(opt.value)
    );

    const { resolvedTheme } = useThemeToggler();
    const isDark = resolvedTheme === 'dark';

    const customStyles: StylesConfig<SelectOption, true> = {
        control: (base, state) => ({
            ...base,
            backgroundColor: disabled ? (isDark ? '#6b728030' : '#f3f4f6') : (isDark ? '#141415' : '#f8fafc'),
            borderRadius: '0.5rem',
            borderWidth: '1px',
            borderColor: disabled ? '#6b728070' : error ? '#ef4444' : state.isFocused ? '#2563eb' : (isDark ? '#262626' : '#e5e5e5'),
            boxShadow: 'none',
            transition: 'all 200ms ease',
            '&:hover': {
                borderColor: error ? '#ef4444' : '#2563eb'
            },
            padding: '2px 4px',
            minHeight: '40px',
            '@media (min-width: 640px)': {
                minHeight: '44px',
            },
            cursor: disabled ? 'not-allowed' : 'pointer',
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: isDark ? '#141415' : '#ffffff',
            borderRadius: '0.5rem',
            marginTop: '4px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            backdropFilter: 'none',
            border: `1px solid ${isDark ? '#262626' : '#e5e5e5'}`,
        }),
        menuList: (base) => ({
            ...base,
            backgroundColor: isDark ? '#141415' : '#ffffff',
            padding: '4px',
            borderRadius: '0.5rem',
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? (isDark ? '#333' : '#f1f5f9') : (isDark ? '#141415' : '#ffffff'),
            color: isDark ? '#FFFFFF' : '#111827',
            padding: '8px 12px',
            fontSize: '0.75rem',
            '@media (min-width: 640px)': {
                padding: '12px 16px',
                fontSize: '0.875rem',
            },
            '&:hover': {
                backgroundColor: isDark ? '#333' : '#f1f5f9'
            }
        }),
        multiValue: (base) => ({
            ...base,
            backgroundColor: isDark ? '#333' : '#e2e8f0',
            borderRadius: '1rem',
            padding: '0 4px',
            margin: '2px'
        }),
        multiValueLabel: (base) => ({
            ...base,
            color: isDark ? '#FFFFFF' : '#111827',
            padding: '2px 6px',
            fontSize: '0.75rem',
            '@media (min-width: 640px)': {
                padding: '4px 8px',
                fontSize: '0.875rem',
            }
        }),
        multiValueRemove: (base) => ({
            ...base,
            color: '#9CA3AF',
            borderRadius: '50%',
            '&:hover': {
                backgroundColor: isDark ? '#4a5568' : '#cbd5e1',
                color: isDark ? '#FFFFFF' : '#111827'
            }
        }),
        placeholder: (base) => ({
            ...base,
            color: '#9CA3AF',
            fontSize: '0.75rem',
            '@media (min-width: 640px)': {
                fontSize: '0.875rem',
            }
        }),
        input: (base) => ({
            ...base,
            color: isDark ? '#FFFFFF' : '#111827',
        }),
        singleValue: (base) => ({
            ...base,
            color: isDark ? '#FFFFFF' : '#111827',
        })
    };

    return (
        <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            {description && (
                <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
            )}
            <div>
                <Select<SelectOption, true>
                    isMulti
                    options={selectOptions}
                    value={selectedValues}
                    // format selected values display

                    isDisabled={disabled}

                    onChange={(newValue) => {
                        onChange((newValue || []).map((v) => v.value));
                    }}
                    styles={customStyles}
                    formatOptionLabel={(option: SelectOption) => (
                        <div className="py-1">
                            <div className="font-medium">{option.label}</div>
                        </div>
                    )}
                    classNamePrefix="material-select"
                    className={`${error ? 'border-red-500' : 'border-gray-700'} `}

                />
                {error && (
                    <p className="text-sm text-red-500 mt-1">{error}</p>
                )}
            </div>

        </div >
    );
};

export default MultiSelect; 
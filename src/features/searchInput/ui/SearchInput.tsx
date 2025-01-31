import { Input } from '@/shared/ui/Input';
import { ChangeEvent, useState } from 'react';

interface SearchInputProps {
	onSearch: (query: string) => void;
	placeholder?: string;
	currentValue?: string;
	className?: string;
}

export function SearchInput({
	onSearch,
	placeholder = 'Поиск...',
	currentValue,
	className,
}: SearchInputProps) {
	const [query, setQuery] = useState<string>(currentValue || '');

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setQuery(value);
		onSearch(value);
	};

	return (
		<Input
			className={className}
			placeholder={placeholder}
			value={query}
			onChange={handleInput}
		/>
	);
}

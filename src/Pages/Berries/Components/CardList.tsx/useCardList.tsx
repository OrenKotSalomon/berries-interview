import { useCallback, useEffect, useState } from "react";
import useDebounce from "../../../../Shared/customHooks/useDebounce/useDebounce";
import { IBerryDetail } from "../../../../Interfaces/IBerryDetail";


interface IProps {
    items: IBerryDetail[]
}

export default function useCardlist({ items }: IProps) {
    const [search, setSearch] = useState<string>("");
    const [list, setList] = useState(items)
    const debouncedSearch = useDebounce(search, 500);


    useEffect(() => {

        handleFilter()
    }, [debouncedSearch]);

    const handleSearch = (text: string) => {
        setSearch(text);
    };
    const handleFilter = useCallback(() => {
        const regex = new RegExp(debouncedSearch, 'i');
        const newItems = items.filter((item) => {
            return regex.test(item.name);
        });
        setList(newItems);
    }, [debouncedSearch]);


    return {
        handleSearch,
        search,
        list
    };
}

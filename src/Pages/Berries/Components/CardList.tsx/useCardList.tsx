import { useCallback, useEffect, useState } from "react";
import useDebounce from "../../../../Shared/customHooks/useDebounce/useDebounce";
import { IBerryDetail } from "../../../../Interfaces/IBerryDetail";


interface IProps {
    items: IBerryDetail[]
    setList: (items: IBerryDetail[]) => void
}

export default function useCardlist({ items, setList }: IProps) {
    const [search, setSearch] = useState<string>("");

    const debouncedSearch = useDebounce(search, 500);




    const handleFilter = () => {
        const regex = new RegExp(debouncedSearch, "i");
        const newItems = items.filter((item) => regex.test(item.name));
        console.log('newItems',);

        setList([...newItems]);
    }


    useEffect(() => {
        handleFilter();
    }, [debouncedSearch]);


    const handleSearch = (text: string) => {
        setSearch(text);
    };

    return {
        handleSearch,
        search,
    };
}

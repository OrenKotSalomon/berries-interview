import { useCallback, useEffect, useState } from "react"
import useLocalStorage from "../../../Shared/customHooks/LocalStorage/useLocalStorage"
import { STORAGE_KEYS } from "../../../Shared/API/constants"
import API_CALL from '../../../Shared/API/api_call'
import { IBerry } from "../../../Interfaces/IBerry";
import { IBerryDB, } from "../../../Interfaces/IBerryDB";
import { IBerryDetail } from "../../../Interfaces/IBerryDetail";





export const VALID_FILTERS = ["very-soft", "soft", "hard", "very-hard", "super-hard"] as const;


export type FilterType = typeof VALID_FILTERS[1];


export default function useBerries() {
    const [selectedFilter, setSelectedFilter] = useState<keyof IBerryDB>('soft')
    const [berries, setBerries] = useState<IBerryDB>({});
    const [localBerries, setLocalBerries] = useLocalStorage<IBerryDB>(
        STORAGE_KEYS.Berries,
        berries
    );
    const selectedBerries = berries[selectedFilter] || [];
    const [list, setList] = useState(selectedBerries)
    const [loading, setLoading] = useState(false)
    const getBerries = useCallback(async (): Promise<void> => {
        setLoading(true)
        try {
            const url = "https://pokeapi.co/api/v2/berry?limit=200";
            const res = await API_CALL.GET(url);

            if (res?.results) {
                await buildObject(res.results)

            }
        } catch (e) {
            console.error(`[useBerries] [getBerries] ${e}`);
        }
        setLoading(false)
    }, [setBerries, setLocalBerries, berries]);

    const buildObject = async (data: IBerry[]): Promise<void> => {
        try {
            const DBObject: IBerryDB = {};

            for (const berry of data) {
                const res = await API_CALL.GET<IBerryDetail>(berry.url);
                if (res === undefined) continue;
                const category = res.firmness?.name as keyof IBerryDB;

                if (!DBObject[category]) {
                    DBObject[category] = [res];
                } else {
                    DBObject[category]?.push(res);
                }
            }

            setBerries(DBObject);
            setLocalBerries(DBObject);

        } catch (e) {
            console.error(`[useBerries] [buildObject] ${e}`);
        }
    };


    useEffect(() => {
        if (Object.keys(localBerries).length > 0) {
            setBerries(localBerries);
            const selectedBerries = localBerries[selectedFilter] || [];
            setList(selectedBerries)
        } else {
            getBerries();
        }
    }, [localBerries, getBerries]);

    return {
        berries,
        getBerries,
        selectedFilter,
        setSelectedFilter,
        list, setList,
        loading
    };
}
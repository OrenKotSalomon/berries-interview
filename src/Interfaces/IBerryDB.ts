

import { IBerryDetail } from './IBerryDetail';

export interface IBerryDB {
    [key: string]: IBerryDetail[];
}
export interface IBerryDBKeys {
    "very-soft": keyof IBerryDB
    "soft": keyof IBerryDB
    "hard": keyof IBerryDB
    "very-hard": keyof IBerryDB
    "super-hard": keyof IBerryDB
}

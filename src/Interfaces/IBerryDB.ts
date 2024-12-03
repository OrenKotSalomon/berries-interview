

import { IBerryDetail } from './IBerryDetail';

export interface IBerryDB {
    "very-soft"?: IBerryDetail[];
    "soft"?: IBerryDetail[];
    "hard"?: IBerryDetail[];
    "very-hard"?: IBerryDetail[];
    "super-hard"?: IBerryDetail[];
}
export interface IBerryDBKeys {
    "very-soft": keyof IBerryDB
    "soft": keyof IBerryDB
    "hard": keyof IBerryDB
    "very-hard": keyof IBerryDB
    "super-hard": keyof IBerryDB
}

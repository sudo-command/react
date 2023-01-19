export interface CovidModel {
        year: number;
        weeknum: number;
        new_case: number;
        total_case: number;
        new_case_excludeabroad: number;
        total_case_excludeabroad: number;
        new_recovered: number;
        total_recovered: number;
        new_death: number;
        total_death: number;
        case_foreign: number;
        case_prison: number;
        case_walkin: number;
        case_new_prev: number;
        case_new_diff: number;
        death_new_prev: number;
        death_new_diff: number;
        update_date: string;
    }



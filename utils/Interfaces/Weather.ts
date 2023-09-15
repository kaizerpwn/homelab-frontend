export interface Weather {
    current?: {
        last_updated_epoch?: number | undefined;
        last_updated?: string | undefined;
        temp_c?: number | undefined;
        temp_f?: number | undefined;
        is_day?: number | undefined;
        condition?: {
            text?: string | undefined;
            icon?: string | undefined;
            code?: number | undefined;
        },
        wind_mph?: number | undefined;
        wind_kph?: number | undefined;
        wind_degree?: number | undefined;
        wind_dir?: string | undefined;
        pressuremb?: number | undefined;
        pressurein?: number | undefined;
        precip_m?:number | undefined;
        precip_in?:number | undefined;
        humidity?: number | undefined;
        cloud?: number | undefined;
        feelsik_c?: number | undefined;
        feelsike_f?: number | undefined;
        vis_km?: number | undefined;
        vis_mies?: number | undefined;
        uv?: number | undefined;
        gut_mph?: number | undefined;
        gust_kph?: number | undefined;
    }
}
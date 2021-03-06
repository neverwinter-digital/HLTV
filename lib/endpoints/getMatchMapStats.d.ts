import FullMatchMapStats, { PlayerPerformanceStats } from '../models/FullMatchMapStats';
import HLTVConfig from '../models/HLTVConfig';
export declare type PlayerPerformanceStatsMap = {
    [key: number]: PlayerPerformanceStats;
};
declare const getMatchMapStats: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullMatchMapStats>;
export default getMatchMapStats;

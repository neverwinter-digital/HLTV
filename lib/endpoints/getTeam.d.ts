import FullTeam from '../models/FullTeam';
import HLTVConfig from '../models/HLTVConfig';
declare const getTeam: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullTeam>;
export default getTeam;

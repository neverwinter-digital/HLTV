import FullMatch from '../models/FullMatch';
import HLTVConfig from '../models/HLTVConfig';
declare const getMatch: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullMatch>;
export default getMatch;

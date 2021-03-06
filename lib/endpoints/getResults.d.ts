import MatchResult from '../models/MatchResult';
import HLTVConfig from '../models/HLTVConfig';
declare const getResults: (config: HLTVConfig) => ({ pages }?: {
    pages?: number;
}) => Promise<MatchResult[]>;
export default getResults;

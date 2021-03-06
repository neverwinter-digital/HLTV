import FullStream from '../models/FullStream';
import HLTVConfig from '../models/HLTVConfig';
declare const getStreams: (config: HLTVConfig) => ({ loadLinks }?: {
    loadLinks?: boolean | undefined;
}) => Promise<FullStream[]>;
export default getStreams;

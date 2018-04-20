import Team from '../models/Team'
import * as E from '../utils/parsing'
import { HLTV_URL } from '../utils/constants'
import { fetchPage, toArray } from '../utils/mappers'
import TeamRank from "../models/TeamRank";

const getRanking = async (): Promise<TeamRank[]> => {
    const $ = await fetchPage(`${HLTV_URL}/ranking/teams`)

    return toArray($('.ranked-team')).map(matchEl => {
        const teamEl = matchEl.find('.team-logo img')
        const rank = Number(matchEl.find('.position').text().substr(1))

        const team: Team = {
            name: teamEl.attr('title'),
            id: Number(E.popSlashSource(teamEl)) || undefined
        }

        return { team, rank }
    })
}

export default getRanking

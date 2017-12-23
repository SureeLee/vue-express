import {HEADLINE} from './types'

export default {
    changeHeadLine({commit},headline){
        commit(HEADLINE,headline)
    }
}
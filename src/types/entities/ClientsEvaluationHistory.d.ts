import { Client } from './Client'
import { Evaluation } from './Evaluation'
import { EvaluationListObject } from './EvaluationListObject'

type HistoryObject = {
    date: string
    value: number
  }
  
export type ClientsEvaluationHistory = {
    client: Client
    evaluationList: EvaluationListObject[]
    newestEvaluation: Evaluation
    overallResults: {
        weight: number
        fatPercentage: number
        muscleMassPercentage: number
        visceralFat: number
    }
    history: {
        weight: HistoryObject[]
        fatPercentage: HistoryObject[]
        muscleMassPercentage: HistoryObject[]
        basalMetabolicRate: HistoryObject[]
        visceralFat: HistoryObject[]
        metabolicAge: HistoryObject[]
    }
}
export const candidate = `

    scalar Date

    input Candidate{
        id: ID
        name:String!
        location:String!
        qualification:[String]!
        resume_url:String!
        salaryExpectations:Int
        experienceInYears:Float
        readyToRelocate:Boolean
        appliedTo:Job
    }

    type CandidateResponse{
        id: ID
        name:String!
        location:String!
        qualification:[String]!
        resume_url:String!
        salaryExpectations:Int
        experienceInYears:Float
        readyToRelocate:Boolean
        appliedTo:JobResponse
        applied_at:Date
    }

    
    type Query{
        candidates: [CandidateResponse]
    }

    interface MutationResponse {
        code: String!
        success: Boolean!
        message: String!
    }


    type AddCandidatesResponse implements MutationResponse {
        code: String!
        success: Boolean!
        message: String!
        candidate: CandidateResponse
    }

    type Mutation {
        addCandidates(candidateDetails:Candidate! , job:Job!) : AddCandidatesResponse
    }

`;

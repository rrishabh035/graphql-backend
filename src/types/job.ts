export const job = `

    scalar JSON

    enum JobType{
        REMOTE
        PART_TIME
        FULL_TIME
    }

    input Job{
        id:ID
        title:String
        location:String
        description:String
        CTC:Int
        jobType:JobType
        companyName:String
    }

    type JobResponse{
        id:ID
        title:String
        location:String
        description:String @deprecated(reason:"Not required")
        CTC:Int
        jobType:JobType
        companyName:String
        posted_at:Date
        extraDetails:JSON
    }

    type Query{
        jobs: [JobResponse]
    }
`;
